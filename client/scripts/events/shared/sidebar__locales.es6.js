Template.sidebar__locales.events({
  'click .locales .flag': function () {
    let localeCode = this.valueOf();
    moment.locale(localeCode);
    TAPi18n.setLanguage(localeCode);
  }
});