Template.registerHelper('humanDate', function (timestamp) {
  return moment(timestamp).fromNow();
});