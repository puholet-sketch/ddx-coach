window.DDX_DATA = {
  athlete: {
    name: "Атлет",
    weightKg: 97,
    note: "Силовая выносливость — ваш главный козырь. Техника прежде веса."
  },
  days: [
    {
      id: "mon",
      short: "Пн",
      title: "Жимовой день",
      subtitle: "Верхняя часть тела",
      focus: "Грудь · Плечи · Трицепс",
      warmup: "Эллипс 15 мин",
      cooldown: "Растяжка 5–10 мин"
    },
    {
      id: "tue",
      short: "Вт",
      title: "Низ + кардио",
      subtitle: "Нижняя часть тела",
      focus: "Квадрицепс · Бицепс бедра · Ягодицы",
      warmup: "Эллипс / лёгкая разминка 10–15 мин",
      cooldown: "Растяжка 5–10 мин"
    },
    {
      id: "wed",
      short: "Ср",
      title: "Функционал + пресс",
      subtitle: "Круговая нагрузка",
      focus: "Кор · Выносливость · Grip",
      warmup: "Суставная разминка 5 мин",
      cooldown: "Дыхание / растяжка"
    },
    {
      id: "thu",
      short: "Чт",
      title: "Тяговой день",
      subtitle: "Верхняя часть тела",
      focus: "Спина · Бицепс · Задняя дельта",
      warmup: "Эллипс 15 мин",
      cooldown: "Растяжка 5–10 мин"
    },
    {
      id: "fri",
      short: "Пт",
      title: "Низ + интервалы",
      subtitle: "Сила ног и кардио",
      focus: "Ягодицы · Задняя цепь · Икры",
      warmup: "Разминка 10 мин",
      cooldown: "Беговая дорожка 20–25 мин (2/2)"
    }
  ],
  exercises: [
    {
      id: "bench-press",
      day: "mon",
      name: "Жим штанги лежа",
      sets: 4,
      reps: "8–12",
      startKg: 50,
      progression: "+2.5 кг / нед",
      muscles: ["Грудные", "Трицепс", "Передняя дельта"],
      image: "assets/exercises/bench-press.png",
      cues: [
        "Лопатки сведены, стопы в пол, лёгкий прогиб без отрыва таза.",
        "Опускайте гриф к нижней части груди под контролем.",
        "Добавляйте вес только при чистой технике на RPE 8–9."
      ]
    },
    {
      id: "ohp",
      day: "mon",
      name: "Армейский жим",
      sets: 3,
      reps: "10–12",
      startKg: 25,
      progression: "+2.5 кг / нед",
      muscles: ["Дельты", "Трицепс", "Кор"],
      image: "assets/exercises/overhead-press.png",
      cues: [
        "Кор жёсткий, не прогибайтесь в пояснице.",
        "Жмите вверх и чуть назад над головой.",
        "Если вес «скачет» — закрепите текущий 1–2 недели."
      ]
    },
    {
      id: "flyes",
      day: "mon",
      name: "Разводки гантелей лежа",
      sets: 3,
      reps: "12–15",
      startKg: 14,
      progression: "+2 кг / нед (по 1 кг)",
      muscles: ["Грудные"],
      image: "assets/exercises/bench-press.png",
      cues: [
        "Локти мягко согнуты на всей амплитуде.",
        "Растягивайте грудь внизу без боли в плечах.",
        "Не превращайте разводку в жим."
      ]
    },
    {
      id: "dips",
      day: "mon",
      name: "Отжимания на брусьях",
      sets: 3,
      reps: "до отказа",
      startKg: 15,
      progression: "+2.5 кг после 12+ чистых",
      muscles: ["Грудь", "Трицепс", "Передняя дельта"],
      image: "assets/exercises/dips.png",
      cues: [
        "Корпус слегка вперёд для акцента на грудь.",
        "Не ныряйте слишком глубоко при дискомфорте плеч.",
        "Резкий спад веса — сигнал недовосстановления."
      ]
    },
    {
      id: "lateral-raise",
      day: "mon",
      name: "Подъёмы гантелей в стороны",
      sets: 3,
      reps: "12–15",
      startKg: 10,
      progression: "+1–2 кг / нед",
      muscles: ["Средняя дельта"],
      image: "assets/exercises/overhead-press.png",
      cues: [
        "Ведите гантели локтями, не кистями.",
        "Поднимайте чуть выше параллели, без читинга корпусом.",
        "Малый вес и контроль важнее килограммов."
      ]
    },
    {
      id: "squat",
      day: "tue",
      name: "Приседания со штангой",
      sets: 4,
      reps: "8–12",
      startKg: 55,
      progression: "+2.5 кг / нед",
      muscles: ["Квадрицепс", "Ягодицы", "Кор"],
      image: "assets/exercises/squat.png",
      cues: [
        "Колени по направлению носков, пятки в пол.",
        "Глубина — до параллели или комфортного максимума.",
        "База недели: не пропускайте ради тренажёров."
      ]
    },
    {
      id: "rdl-smith",
      day: "tue",
      name: "Мёртвая тяга в Смита",
      sets: 3,
      reps: "10–12",
      startKg: 40,
      progression: "+2.5 кг / нед",
      muscles: ["Бицепс бедра", "Ягодицы", "Разгибатели спины"],
      image: "assets/exercises/deadlift.png",
      cues: [
        "Таз назад, спина нейтральная, гриф близко к ногам.",
        "Тяните задней цепью, не округляйте поясницу.",
        "Ощущение растяжения бицепса бедра — хороший ориентир."
      ]
    },
    {
      id: "leg-extension",
      day: "tue",
      name: "Разгибание ног",
      sets: 3,
      reps: "12–15",
      startKg: 40,
      progression: "+5 кг / нед",
      muscles: ["Квадрицепс"],
      image: "assets/exercises/squat.png",
      cues: [
        "Полная амплитуда без рывка в верхней точке.",
        "Пауза 1 сек в пике сокращения.",
        "Подходит как добивка после приседа."
      ]
    },
    {
      id: "leg-curl",
      day: "tue",
      name: "Сгибание ног лежа",
      sets: 3,
      reps: "12–15",
      startKg: 30,
      progression: "+5 кг / нед",
      muscles: ["Бицепс бедра"],
      image: "assets/exercises/deadlift.png",
      cues: [
        "Таз прижат, не отрывайте его от подушки.",
        "Контролируйте негативную фазу.",
        "Балансирует переднюю поверхность бедра."
      ]
    },
    {
      id: "leg-press",
      day: "tue",
      name: "Жим ногами",
      sets: 4,
      reps: "10–15",
      startKg: 90,
      progression: "+5–10 кг / нед",
      muscles: ["Квадрицепс", "Ягодицы"],
      image: "assets/exercises/squat.png",
      cues: [
        "Не отрывайте поясницу от спинки.",
        "Стопы на ширине плеч, колени не заваливать внутрь.",
        "Хорошая замена/дополнение приседа при усталости."
      ]
    },
    {
      id: "circuit-burpee",
      day: "wed",
      name: "Берпи",
      sets: 3,
      reps: "10–12",
      startKg: 0,
      progression: "+раунд или +2 повтора",
      muscles: ["Всё тело", "Кардио"],
      image: null,
      cues: [
        "Держите темп ровным, не рвите поясницу.",
        "Можно упростить без прыжка при усталости.",
        "Часть круговой: 3–4 круга, отдых 2–3 мин."
      ]
    },
    {
      id: "pullups",
      day: "wed",
      name: "Подтягивания",
      sets: 3,
      reps: "8–10",
      startKg: 0,
      progression: "+1–2 повтора / нед",
      muscles: ["Широчайшие", "Бицепс"],
      image: "assets/exercises/row.png",
      cues: [
        "Полный вис → подбородок выше перекладины.",
        "Без раскачки, если цель — сила спины.",
        "Резинка или австралийские — ок для прогресса."
      ]
    },
    {
      id: "plank",
      day: "wed",
      name: "Планка",
      sets: 3,
      reps: "60 сек",
      startKg: 0,
      progression: "+10 сек или вес на спине",
      muscles: ["Кор"],
      image: null,
      cues: [
        "Таз нейтрален, не провисает и не торчит вверх.",
        "Дышите ровно — не задерживайте дыхание.",
        "Напрягайте ягодицы и пресс одновременно."
      ]
    },
    {
      id: "crunches-machine",
      day: "wed",
      name: "Скручивания в тренажере",
      sets: 3,
      reps: "15–20",
      startKg: 25,
      progression: "+5 кг / нед",
      muscles: ["Прямая мышца живота"],
      image: null,
      cues: [
        "Скручивайте корпус, а не тяните руками.",
        "Короткий диапазон с контролем лучше читинга.",
        "В декабре был сильный рост — закрепляйте технику."
      ]
    },
    {
      id: "farmer-walk",
      day: "wed",
      name: "Проходка фермера",
      sets: 3,
      reps: "40 м",
      startKg: 25,
      progression: "+2.5–5 кг / руку",
      muscles: ["Трапеции", "Grip", "Кор"],
      image: "assets/exercises/deadlift.png",
      cues: [
        "Плечи назад и вниз, шаг короткий и уверенный.",
        "Не наклоняйтесь в сторону более тяжёлой руки.",
        "Отличный финишер функционального дня."
      ]
    },
    {
      id: "tbar-row",
      day: "thu",
      name: "Тяга Т-грифа",
      sets: 4,
      reps: "8–12",
      startKg: 25,
      progression: "+2.5 кг / нед",
      muscles: ["Широчайшие", "Ромбовидные", "Бицепс"],
      image: "assets/exercises/row.png",
      cues: [
        "Тяните к низу груди / поясу, локти вдоль корпуса.",
        "Не округляйте спину в нижней точке.",
        "В декабре был топ-прогресс (+20 кг) — берегите технику."
      ]
    },
    {
      id: "seated-row",
      day: "thu",
      name: "Тяга гориз. блока к поясу",
      sets: 3,
      reps: "10–12",
      startKg: 55,
      progression: "+5 кг / нед",
      muscles: ["Широчайшие", "Задняя дельта"],
      image: "assets/exercises/row.png",
      cues: [
        "Корпус почти вертикален, без сильного раскачивания.",
        "Сведите лопатки в конце тяги.",
        "Стабильный вес — нормально, меняйте хват/паузы."
      ]
    },
    {
      id: "hammer-row",
      day: "thu",
      name: "Тяга в рычажном тренажере",
      sets: 3,
      reps: "10–12",
      startKg: 40,
      progression: "+2.5–5 кг / нед",
      muscles: ["Широчайшие", "Середина спины"],
      image: "assets/exercises/row.png",
      cues: [
        "Работайте каждой стороной симметрично.",
        "Грудь прижата к упору.",
        "Контроль важнее рывка."
      ]
    },
    {
      id: "barbell-curl",
      day: "thu",
      name: "Подъём штанги на бицепс",
      sets: 3,
      reps: "10–12",
      startKg: 25,
      progression: "+2.5 кг / нед",
      muscles: ["Бицепс"],
      image: "assets/exercises/row.png",
      cues: [
        "Локти фиксированы у корпуса.",
        "Не забрасывайте вес плечами.",
        "Полный негатив 2–3 секунды."
      ]
    },
    {
      id: "lat-pulldown",
      day: "thu",
      name: "Тяга верхнего блока",
      sets: 3,
      reps: "8–12",
      startKg: 60,
      progression: "+5 кг / нед",
      muscles: ["Широчайшие", "Бицепс"],
      image: "assets/exercises/row.png",
      cues: [
        "Тяните к верхней груди, грудная клетка вверх.",
        "Не отклоняйтесь сильно назад.",
        "Широкий хват — ширина, узкий — толщина."
      ]
    },
    {
      id: "hack-squat",
      day: "fri",
      name: "Гакк-тренажер",
      sets: 4,
      reps: "10–15",
      startKg: 45,
      progression: "+5 кг / нед",
      muscles: ["Квадрицепс", "Ягодицы"],
      image: "assets/exercises/squat.png",
      cues: [
        "Отведение таза назад по задумке движения.",
        "Колени стабильны, без завала внутрь.",
        "Хороший объём без осевой нагрузки на позвоночник."
      ]
    },
    {
      id: "hip-thrust",
      day: "fri",
      name: "Ягодичный мостик со штангой",
      sets: 3,
      reps: "12–15",
      startKg: 40,
      progression: "+5 кг / нед",
      muscles: ["Ягодицы", "Бицепс бедра"],
      image: "assets/exercises/hip-thrust.png",
      cues: [
        "Подбородок слегка к груди, рёбра вниз.",
        "Вверху — полное разгибание бёдер, не переразгибайте поясницу.",
        "Пауза 1 сек в пике."
      ]
    },
    {
      id: "hyperextension",
      day: "fri",
      name: "Гиперэкстензия",
      sets: 3,
      reps: "12–15",
      startKg: 10,
      progression: "+5 кг / нед",
      muscles: ["Разгибатели спины", "Ягодицы"],
      image: "assets/exercises/deadlift.png",
      cues: [
        "Амплитуда до нейтрали — не уходите в сильный гиперлордоз.",
        "Блин на груди — только при идеальном контроле.",
        "Отличная страховка для тяговых дней."
      ]
    },
    {
      id: "calf-raise",
      day: "fri",
      name: "Подъём на носки",
      sets: 4,
      reps: "15–20",
      startKg: 55,
      progression: "+5 кг / нед",
      muscles: ["Икры"],
      image: "assets/exercises/squat.png",
      cues: [
        "Полная амплитуда: растяжка внизу + пик вверху.",
        "Без отскока — икры любят контроль.",
        "Можно чередовать носки внутрь/наружу."
      ]
    }
  ],
  /* Seed from «Сводный тренировочный дневник (Декабрь 2023)» */
  historySeed: {
    "bench-press": [
      { date: "2023-12-01", weight: 40, reps: 10, sets: 4 },
      { date: "2023-12-08", weight: 40, reps: 10, sets: 4 },
      { date: "2023-12-15", weight: 40, reps: 10, sets: 4, note: "без грифа*" },
      { date: "2023-12-22", weight: 45, reps: 10, sets: 4, note: "без грифа*" }
    ],
    "ohp": [
      { date: "2023-12-01", weight: 14, reps: 11, sets: 3 },
      { date: "2023-12-08", weight: 12, reps: 11, sets: 3 },
      { date: "2023-12-15", weight: 14, reps: 11, sets: 3 },
      { date: "2023-12-22", weight: 14, reps: 11, sets: 3 }
    ],
    "flyes": [
      { date: "2023-12-01", weight: 12, reps: 14, sets: 3 },
      { date: "2023-12-08", weight: 12, reps: 14, sets: 3 },
      { date: "2023-12-15", weight: 14, reps: 14, sets: 3 },
      { date: "2023-12-22", weight: 14, reps: 14, sets: 3 }
    ],
    "dips": [
      { date: "2023-12-01", weight: 15, reps: 10, sets: 3 },
      { date: "2023-12-08", weight: 15, reps: 10, sets: 3 },
      { date: "2023-12-15", weight: 17.5, reps: 10, sets: 3 },
      { date: "2023-12-22", weight: 10, reps: 10, sets: 3, note: "спад — восстановление" }
    ],
    "lateral-raise": [
      { date: "2023-12-01", weight: 10, reps: 14, sets: 3 },
      { date: "2023-12-08", weight: 10, reps: 14, sets: 3 },
      { date: "2023-12-15", weight: 10, reps: 14, sets: 3 },
      { date: "2023-12-22", weight: 10, reps: 14, sets: 3 }
    ],
    "squat": [
      { date: "2023-12-02", weight: 30, reps: 10, sets: 4 },
      { date: "2023-12-09", weight: 40, reps: 10, sets: 4 }
    ],
    "leg-press": [
      { date: "2023-12-23", weight: 120, reps: 12, sets: 4 }
    ],
    "rdl-smith": [
      { date: "2023-12-02", weight: 55, reps: 11, sets: 3 },
      { date: "2023-12-09", weight: 60, reps: 11, sets: 3 },
      { date: "2023-12-23", weight: 62.5, reps: 11, sets: 3 }
    ],
    "leg-extension": [
      { date: "2023-12-02", weight: 40, reps: 14, sets: 3 },
      { date: "2023-12-09", weight: 40, reps: 14, sets: 3 },
      { date: "2023-12-23", weight: 45, reps: 14, sets: 3 }
    ],
    "leg-curl": [
      { date: "2023-12-02", weight: 20, reps: 14, sets: 3 },
      { date: "2023-12-09", weight: 25, reps: 14, sets: 3 },
      { date: "2023-12-23", weight: 27.5, reps: 14, sets: 3 }
    ],
    "crunches-machine": [
      { date: "2023-12-03", weight: 20, reps: 18, sets: 3 },
      { date: "2023-12-10", weight: 25, reps: 18, sets: 3 },
      { date: "2023-12-24", weight: 30, reps: 18, sets: 3 }
    ],
    "farmer-walk": [
      { date: "2023-12-24", weight: 20, reps: 40, sets: 3, note: "кг на руку, 40 м" }
    ],
    "tbar-row": [
      { date: "2023-12-04", weight: 30, reps: 10, sets: 4 },
      { date: "2023-12-11", weight: 40, reps: 10, sets: 4 },
      { date: "2023-12-25", weight: 50, reps: 10, sets: 4, note: "без грифа*" }
    ],
    "seated-row": [
      { date: "2023-12-04", weight: 55, reps: 11, sets: 3 },
      { date: "2023-12-11", weight: 55, reps: 11, sets: 3 },
      { date: "2023-12-25", weight: 55, reps: 11, sets: 3 }
    ],
    "hammer-row": [
      { date: "2023-12-04", weight: 40, reps: 11, sets: 3, note: "на руку" },
      { date: "2023-12-11", weight: 42.5, reps: 11, sets: 3, note: "на руку" },
      { date: "2023-12-25", weight: 45, reps: 11, sets: 3, note: "на руку" }
    ],
    "barbell-curl": [
      { date: "2023-12-04", weight: 25, reps: 11, sets: 3 },
      { date: "2023-12-11", weight: 25, reps: 11, sets: 3 },
      { date: "2023-12-25", weight: 20, reps: 11, sets: 3, note: "машина" }
    ],
    "lat-pulldown": [
      { date: "2023-12-25", weight: 70, reps: 8, sets: 3 }
    ],
    "hack-squat": [
      { date: "2023-12-05", weight: 40, reps: 12, sets: 4 },
      { date: "2023-12-12", weight: 50, reps: 12, sets: 4 }
    ],
    "hip-thrust": [
      { date: "2023-12-05", weight: 30, reps: 14, sets: 3 },
      { date: "2023-12-12", weight: 32.5, reps: 14, sets: 3 }
    ],
    "hyperextension": [
      { date: "2023-12-05", weight: 10, reps: 14, sets: 3 },
      { date: "2023-12-12", weight: 20, reps: 14, sets: 3 }
    ],
    "calf-raise": [
      { date: "2023-12-05", weight: 40, reps: 18, sets: 4 },
      { date: "2023-12-12", weight: 110, reps: 18, sets: 4 }
    ]
  },
  tips: [
    "RPE 8–9 на рабочих подходах: последние 1–2 повтора тяжелые, техника идеальная.",
    "Не вышло добавить вес на неделе — закрепите текущий результат.",
    "Для гантелей прогрессия указана на общий вес (+2 кг = +1 кг на руку).",
    "Белок 2–2.5 г/кг (~190–240 г при 97 кг). Вода 3–3.5 л.",
    "Калории: поддержка ~2500–2800, дефицит 400–500, пол не ниже ~2000."
  ]
};
