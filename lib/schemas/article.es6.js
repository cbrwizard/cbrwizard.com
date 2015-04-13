cbrw.Schemas.Article = new SimpleSchema({
  title: {
    type: String,
    max: 200
  },
  createdAt: {
    type: Date
  },
  text: {
    type: String,
    max: 2000
  }
});

// not sure if schema is needed at all
// cbrw.Stores.Article.collection.attachSchema(cbrw.Schemas.Article);
