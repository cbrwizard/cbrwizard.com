function seedRecords() {
  const seedRecords = [
    {
      collection: cbrw.Collections.Experiments,
      records: [
        {
          data: {
            title: 'Brainlook.org',
            name: 'brainlook',
            url: 'http://brainlook.org',
            createdAt: new Date().valueOf(),
            releaseDate: new Date('2013-09-01').valueOf()
          },
          translations: {
            en: {
              description: 'A website about opinion analysis, which helps people to share their views on everything and get powerful statistics.'
            },
            'ru-RU': {
              description: 'Сайт анализа мнений. Позволяет людям узнать, о чем думает общество в виде доступной и мощной статистики.'
            }
          }
        },
        {
          data: {
            name: 'rashka',
            url: 'http://valiizrashki.ru',
            createdAt: new Date().valueOf(),
            releaseDate: new Date('2014-04-01').valueOf()
          },
          translations: {
            en: {
              title: 'Vali iz rashki',
              description: 'A satyric website about escaping from Russia as fast as possible.'
            },
            'ru-RU': {
              title: 'Вали из Рашки',
              description: 'Сатиристический сайт об эвакуации из Рашки.'
            }
          }
        },
        {
          data: {
            title: 'Elon goes to Mars!',
            name: 'elon',
            url: 'https://github.com/cbrwizard/game-off-2016',
            createdAt: new Date().valueOf(),
            releaseDate: new Date('2016-12-01').valueOf()
          },
          translations: {
            en: {
              description: "A game about Elon trying to colonize Mars! It's made with Unity and can be played in a browser. It was made in 1 month in free time as a part of Github Game-off 2016 competition."
            },
            'ru-RU': {
              description: 'Игра про то, как Илон колонизирует Марс! Она сделана с помощью Unity, в неё можно играть в браузере. Она была сделана за 1 месяц в свободное время как участник конкурса Github Game-off 2016.'
            }
          }
        },
        {
          data: {
            title: 'PerfectS Bot LEGO mindstorms',
            name: 'perfects_bot',
            url: 'https://www.youtube.com/watch?v=me5-JXdOl2I',
            createdAt: new Date().valueOf(),
            releaseDate: new Date('2015-07-28').valueOf()
          },
          translations: {
            en: {
              description: 'A robot made from LEGO which helps me to stay fit while coding. Every 30 minutes it finds me and tells me to do pushups! A Hipchat bot version is also available.'
            },
            'ru-RU': {
              description: 'Робот, сделанный из Лего, помогающий мне не зажиреть во время работы. Каждые полчаса он находит меня и заставляет делать отжимания! Также есть версия в виде Hipchat бота.'
            }
          }
        }
      ]
    }
  ];

  seedRecords.forEach(function (recordsObject) {
    // recordsObject.collection.remove({}); // uncomment if you want to reset seeds on server startup
    if (recordsObject.collection.find().count() < recordsObject.records.length) {
      recordsObject.records.forEach(function (record) {
        recordsObject.collection.insertTranslations(record.data, record.translations);
      });

      console.log(`inserted ${recordsObject.collection._name}`);
    }
  });
}

Meteor.startup(seedRecords);
