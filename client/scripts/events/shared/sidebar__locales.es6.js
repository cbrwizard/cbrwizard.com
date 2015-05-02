Template.sidebar__locales.events({
  'click .locales .flag': function () {
    TAPi18n.setLanguage(this.valueOf());
  }
});