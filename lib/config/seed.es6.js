if (Meteor.isServer) {
  function seedRecords() {
    const seedRecords = [
      {
        collection: cbrw.Collections.Experiments,
        records: [
          {
            title: 'Brainlook.org',
            name: 'brainlook',
            description: 'Website about opinion analysis, which helps people share their views on anything' +
            ' and get rich statistics.',
            url: 'http://brainlook.org',
            createdAt: new Date().valueOf(),
            releaseDate: new Date('2013-09-01').valueOf()
          },
          {
            title: 'Vali iz rashki',
            name: 'rashka',
            description: 'Satyric website about escaping from Russia as fast as possible.',
            url: 'http://valiizrashki.ru',
            createdAt: new Date().valueOf(),
            releaseDate: new Date('2014-04-01').valueOf()
          },
          {
            title: 'Am I epileptic?',
            name: 'epileptic',
            description: 'Medical startup which defines if you have this critical medical condition.' +
            ' WARNING: not suitable for actual epileptics',
            url: 'http://amiepilleptic.com',
            createdAt: new Date().valueOf(),
            releaseDate: new Date('2014-09-01').valueOf()
          }
        ]
      }
    ];

    seedRecords.forEach(function (recordsObject) {
      recordsObject.collection.remove({}); // uncomment if you want to reset seeds on server startup
      if (recordsObject.collection.find().count() < recordsObject.records.length) {
        console.log(`inserting ${recordsObject.collection._name}`);

        recordsObject.records.forEach(function (record) {
          recordsObject.collection.insert(record);
        })
      }
    });
  }

  seedRecords();
}


