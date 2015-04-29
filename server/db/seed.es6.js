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
              description: 'Website about opinion analysis, which helps people share their views on anything' +
              ' and get rich statistics.'
            },
            'ru-RU': {
              description: 'Сайт анализа мнений. Позволяет людям узнать, о чем думает общество' +
              ' в виде простой и мощной статистики.'
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
              description: 'Satyric website about escaping from Russia as fast as possible.'
            },
            'ru-RU': {
              title: 'Вали из Рашки',
              description: 'Сатиристический сайт о спасении из Рашки.'
            }
          }
        },
        {
          data: {
            title: 'Am I epileptic?',
            name: 'epileptic',
            url: 'http://amiepilleptic.com',
            createdAt: new Date().valueOf(),
            releaseDate: new Date('2014-09-01').valueOf()
          },
          translations: {
            en: {
              description: 'Medical startup which defines if you have this critical medical condition.' +
              ' WARNING: not suitable for actual epileptics.'
            },
            'ru-RU': {
              description: 'Медицинский стартап, определяющий ваше состояние' +
              ' ВНИМАНИЕ: нельзя использовать на настоящих больных.'
            }
          }
        }
      ]
    }
  ];

  seedRecords.forEach(function (recordsObject) {
    recordsObject.collection.remove({}); // uncomment if you want to reset seeds on server startup
    if (recordsObject.collection.find().count() < recordsObject.records.length) {
      recordsObject.records.forEach(function (record) {
        recordsObject.collection.insertTranslations(record.data, record.translations);
      });

      console.log(`inserted ${recordsObject.collection._name}`);
    }
  });
}

Meteor.startup(seedRecords);
