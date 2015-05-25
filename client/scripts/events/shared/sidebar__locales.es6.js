Template.sidebar__locales.events({
  /**
   * Changes locale when user clicks on a flag
   */
  'click .locales .flag': function () {
    let localeCode = this.valueOf();
    moment.locale(localeCode);
    TAPi18n.setLanguage(localeCode);
  }
});