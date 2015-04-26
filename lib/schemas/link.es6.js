/**
 * TODO: check its' work
 */
cbrw.Schemas.Link = new SimpleSchema({
  title: {
    type: String,
    max: 200
  },
  createdAt: {
    type: Date
  },
  updatedAt: {
    type: Date
  },
  text: {
    type: String,
    max: 2000
  }
});

// not sure if schema is needed at all
cbrw.Collections.Links.attachSchema(cbrw.Schemas.Link);
