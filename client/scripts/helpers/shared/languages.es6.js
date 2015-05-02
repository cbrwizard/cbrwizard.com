Template.registerHelper('languages', function () {
  return _.keys(TAPi18n.getLanguages());
});