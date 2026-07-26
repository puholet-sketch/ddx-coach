(() => {
  const STORAGE_KEY = "ddx-trainer-logs-v1";
  const { days, exercises, historySeed, tips, athlete } = window.DDX_DATA;

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

  const state = {
    tab: "home",
    dayId: defaultDayId(),
    exerciseId: null,
    logs: loadLogs()
  };

  function defaultDayId() {
    const map = [null, "mon", "tue", "wed", "thu", "fri", null];
    const d = map[new Date().getDay()];
    return d || "mon";
  }

  function loadLogs() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) return JSON.parse(raw);
    } catch (_) {}
    const seeded = structuredClone(historySeed);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(seeded));
    return seeded;
  }

  function saveLogs() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.logs));
  }

  function dayById(id) {
    return days.find((d) => d.id === id);
  }

  function exerciseById(id) {
    return exercises.find((e) => e.id === id);
  }

  function exercisesForDay(dayId) {
    return exercises.filter((e) => e.day === dayId);
  }

  function logsFor(id) {
    return (state.logs[id] || []).slice().sort((a, b) => a.date.localeCompare(b.date));
  }

  function lastLog(id) {
    const list = logsFor(id);
    return list[list.length - 1] || null;
  }

  function trend(id) {
    const list = logsFor(id);
    if (list.length < 2) return { cls: "trend-flat", label: "старт" };
    const a = list[list.length - 2].weight;
    const b = list[list.length - 1].weight;
    if (b > a) return { cls: "trend-up", label: `↑ +${formatNum(b - a)} кг` };
    if (b < a) return { cls: "trend-warn", label: `↓ ${formatNum(b - a)} кг` };
    return { cls: "trend-flat", label: "↔ стабильно" };
  }

  function formatNum(n) {
    return Number.isInteger(n) ? String(n) : String(Math.round(n * 10) / 10);
  }

  function formatDate(iso) {
    const [y, m, d] = iso.split("-");
    return `${d}.${m}.${y}`;
  }

  function todayISO() {
    const t = new Date();
    const m = String(t.getMonth() + 1).padStart(2, "0");
    const d = String(t.getDate()).padStart(2, "0");
    return `${t.getFullYear()}-${m}-${d}`;
  }

  function toast(msg) {
    const el = $("#toast");
    el.textContent = msg;
    el.classList.add("show");
    clearTimeout(toast._t);
    toast._t = setTimeout(() => el.classList.remove("show"), 2200);
  }

  function setTab(tab) {
    state.tab = tab;
    $$(".nav button").forEach((b) => b.classList.toggle("active", b.dataset.tab === tab));
    if (tab === "home") renderHome();
    if (tab === "progress") renderProgress();
    if (tab === "coach") renderCoach();
    showView(tab === "home" ? (state.exerciseId ? "exercise" : "home") : tab);
  }

  function showView(name) {
    $$(".view").forEach((v) => v.classList.toggle("active", v.dataset.view === name));
  }

  function renderHome() {
    state.exerciseId = null;
    const day = dayById(state.dayId);
    const list = exercisesForDay(state.dayId);
    const isToday = state.dayId === defaultDayId();

    $("#day-nav").innerHTML = days
      .map(
        (d) => `
      <button class="day-btn ${d.id === state.dayId ? "active" : ""} ${d.id === defaultDayId() ? "today" : ""}" data-day="${d.id}">
        <strong>${d.short}</strong>
        <span>${d.title.split(" ")[0]}</span>
      </button>`
      )
      .join("");

    $("#hero").innerHTML = `
      <h2>${day.title}</h2>
      <p>${day.subtitle}. Фокус: ${day.focus}. ${isToday ? "Сегодня ваш день — поехали." : "Откройте день и залогируйте подход."}</p>
      <div class="hero-actions">
        <button class="btn" id="start-first">Открыть первое упражнение</button>
        <button class="btn ghost" data-go-progress>Мой прогресс</button>
      </div>
    `;

    $("#day-meta").innerHTML = `
      <div class="panel">
        <h3>Структура</h3>
        <p class="muted small">Разминка: ${day.warmup}<br>Заминка: ${day.cooldown}</p>
        <p class="muted small" style="margin-top:10px">${athlete.note}</p>
      </div>
    `;

    $("#ex-list").innerHTML = list
      .map((ex) => {
        const last = lastLog(ex.id);
        const t = trend(ex.id);
        const thumb = ex.image
          ? `<div class="ex-thumb"><img src="${ex.image}" alt=""></div>`
          : `<div class="ex-thumb fallback">${ex.name.slice(0, 1)}</div>`;
        return `
        <button class="ex-card" data-ex="${ex.id}">
          ${thumb}
          <div class="ex-meta">
            <h4>${ex.name}</h4>
            <p>${ex.sets}×${ex.reps}${last ? ` · последний ${formatNum(last.weight)} кг` : ` · старт ~${ex.startKg} кг`}</p>
            <div class="tags"><span class="tag">${ex.muscles[0]}</span><span class="tag ${t.cls}">${t.label}</span></div>
          </div>
          <span class="chev">›</span>
        </button>`;
      })
      .join("");

    showView("home");
    bindHome();
  }

  function bindHome() {
    $$("#day-nav [data-day]").forEach((b) =>
      b.addEventListener("click", () => {
        state.dayId = b.dataset.day;
        renderHome();
      })
    );
    $$("#ex-list [data-ex]").forEach((b) =>
      b.addEventListener("click", () => openExercise(b.dataset.ex))
    );
    $("#start-first")?.addEventListener("click", () => {
      const first = exercisesForDay(state.dayId)[0];
      if (first) openExercise(first.id);
    });
    $("[data-go-progress]")?.addEventListener("click", () => setTab("progress"));
  }

  function openExercise(id) {
    state.exerciseId = id;
    const ex = exerciseById(id);
    const last = lastLog(id);
    const list = logsFor(id);
    const t = trend(id);
    const maxW = list.reduce((m, x) => Math.max(m, x.weight || 0), 0);

    $("#ex-view").innerHTML = `
      <div class="back-row">
        <button class="icon-btn" id="back-home" aria-label="Назад">←</button>
        <div>
          <div class="brand-kicker">${dayById(ex.day).short} · ${ex.sets}×${ex.reps}</div>
          <h2 style="margin:0;font-family:var(--display);font-size:1.35rem;letter-spacing:.03em;text-transform:uppercase">${ex.name}</h2>
        </div>
      </div>

      <div class="viz">
        ${
          ex.image
            ? `<img src="${ex.image}" alt="Анатомия: ${ex.name}">`
            : `<div class="viz-fallback"><div><strong style="color:#fff;font-size:1.2rem">Фокус мышц</strong><br>${ex.muscles.join(" · ")}</div></div>`
        }
      </div>

      <div class="muscle-chips">
        ${ex.muscles.map((m) => `<span class="muscle-chip">${m}</span>`).join("")}
      </div>

      <div class="stats">
        <div class="stat"><b>${last ? formatNum(last.weight) : "—"}</b><span>посл. кг</span></div>
        <div class="stat"><b>${maxW ? formatNum(maxW) : "—"}</b><span>макс</span></div>
        <div class="stat"><b class="${t.cls}">${t.label.replace(/^[^ ]+ /, "")}</b><span>тренд</span></div>
      </div>

      <div class="panel">
        <h3>Как тренер</h3>
        <div class="cues">
          ${ex.cues.map((c, i) => `<div class="cue"><i>${i + 1}</i><div>${c}</div></div>`).join("")}
        </div>
        <p class="muted small">Старт: ~${ex.startKg} кг · Прогрессия: ${ex.progression}</p>
      </div>

      <div class="panel">
        <h3>Записать подход</h3>
        <div class="form-grid">
          <div class="field"><label>Вес, кг</label><input id="f-weight" type="number" inputmode="decimal" step="0.5" min="0" value="${last ? last.weight : ex.startKg}"></div>
          <div class="field"><label>Повторы</label><input id="f-reps" type="number" inputmode="numeric" min="1" value="${last ? last.reps : 10}"></div>
          <div class="field"><label>Подходы</label><input id="f-sets" type="number" inputmode="numeric" min="1" value="${last ? last.sets : ex.sets}"></div>
        </div>
        <button class="btn block" id="save-log">Сохранить в дневник</button>
      </div>

      <div class="panel">
        <h3>История</h3>
        <div class="history" id="hist">
          ${
            list.length
              ? list
                  .slice()
                  .reverse()
                  .map(
                    (x) => `
            <div class="hist-item">
              <div>
                <strong>${formatNum(x.weight)} кг × ${x.reps} · ${x.sets} подх.</strong><br>
                <span>${formatDate(x.date)}${x.note ? " · " + x.note : ""}</span>
              </div>
            </div>`
                  )
                  .join("")
              : `<div class="empty">Пока пусто — запишите первый подход.</div>`
          }
        </div>
      </div>
    `;

    showView("exercise");
    $("#back-home").addEventListener("click", () => {
      state.exerciseId = null;
      renderHome();
    });
    $("#save-log").addEventListener("click", () => {
      const weight = Number($("#f-weight").value);
      const reps = Number($("#f-reps").value);
      const sets = Number($("#f-sets").value);
      if (!(weight >= 0) || !(reps > 0) || !(sets > 0)) {
        toast("Проверьте вес, повторы и подходы");
        return;
      }
      if (!state.logs[id]) state.logs[id] = [];
      state.logs[id].push({ date: todayISO(), weight, reps, sets });
      saveLogs();
      toast("Записано. Красавчик.");
      openExercise(id);
    });
  }

  function renderProgress() {
    const cards = exercises
      .map((ex) => {
        const list = logsFor(ex.id);
        if (!list.length) return null;
        const first = list[0].weight;
        const last = list[list.length - 1].weight;
        const delta = last - first;
        const max = Math.max(...list.map((x) => x.weight));
        const pct = max > 0 ? Math.min(100, Math.round((last / max) * 100)) : 0;
        const t = trend(ex.id);
        return `
          <button class="progress-card" data-ex="${ex.id}" style="text-align:left;width:100%;color:inherit;background:rgba(255,255,255,.02)">
            <header>
              <strong>${ex.name}</strong>
              <span class="${t.cls}">${delta >= 0 ? "+" : ""}${formatNum(delta)} кг</span>
            </header>
            <p class="muted small" style="margin:0 0 8px">${formatNum(first)} → ${formatNum(last)} кг · записей: ${list.length}</p>
            <div class="bar"><i style="width:${pct}%"></i></div>
          </button>`;
      })
      .filter(Boolean)
      .join("");

    $("#progress-view").innerHTML = `
      <div class="topbar" style="margin-bottom:12px">
        <div class="brand">
          <div class="brand-kicker">Дневник</div>
          <h1>Прогресс</h1>
          <p>Сид из декабря 2023 + ваши новые записи (хранятся на устройстве).</p>
        </div>
      </div>
      <div class="progress-list">${cards || `<div class="panel empty">Пока нет данных</div>`}</div>
      <div style="margin-top:12px">
        <button class="btn ghost block" id="reset-seed">Сбросить к декабрю 2023</button>
      </div>
    `;
    showView("progress");
    $$("#progress-view [data-ex]").forEach((b) =>
      b.addEventListener("click", () => {
        state.tab = "home";
        $$(".nav button").forEach((n) => n.classList.toggle("active", n.dataset.tab === "home"));
        openExercise(b.dataset.ex);
      })
    );
    $("#reset-seed")?.addEventListener("click", () => {
      if (!confirm("Сбросить все записи к сиду декабря 2023?")) return;
      state.logs = structuredClone(historySeed);
      saveLogs();
      toast("Сброшено к декабрю 2023");
      renderProgress();
    });
  }

  function renderCoach() {
    $("#coach-view").innerHTML = `
      <div class="topbar" style="margin-bottom:12px">
        <div class="brand">
          <div class="brand-kicker">Personal coach</div>
          <h1>Бест практис</h1>
          <p>Из вашего плана «Тренировка + Питание».</p>
        </div>
      </div>
      <div class="panel">
        <h3>Правила прогрессии</h3>
        <div class="cues">
          ${tips.map((t, i) => `<div class="cue"><i>${i + 1}</i><div>${t}</div></div>`).join("")}
        </div>
      </div>
      <div class="panel">
        <h3>Неделя</h3>
        <div class="ex-list">
          ${days
            .map(
              (d) => `
            <button class="ex-card" data-day="${d.id}" style="grid-template-columns:1fr auto">
              <div class="ex-meta">
                <h4>${d.short} · ${d.title}</h4>
                <p>${d.focus}</p>
              </div>
              <span class="chev">›</span>
            </button>`
            )
            .join("")}
        </div>
      </div>
      <div class="panel">
        <h3>Зоны внимания (из декабрьского разбора)</h3>
        <div class="cues">
          <div class="cue"><i>!</i><div>Спад на брусьях — следите за восстановлением груди/трицепса.</div></div>
          <div class="cue"><i>!</i><div>Армейский жим был нестабилен — закрепите технику на одном весе.</div></div>
          <div class="cue"><i>!</i><div>Не пропускайте базу: присед и тяги держат баланс.</div></div>
        </div>
      </div>
    `;
    showView("coach");
    $$("#coach-view [data-day]").forEach((b) =>
      b.addEventListener("click", () => {
        state.dayId = b.dataset.day;
        setTab("home");
      })
    );
  }

  function init() {
    const weekday = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"][new Date().getDay()];
    $("#today-pill").textContent = `Сегодня · ${weekday}`;
    $$(".nav button").forEach((b) =>
      b.addEventListener("click", () => setTab(b.dataset.tab))
    );
    setTab("home");
  }

  document.addEventListener("DOMContentLoaded", init);
})();
