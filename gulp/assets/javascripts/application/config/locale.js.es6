var moment = require('./../../../../../vendor/assets/javascripts/configs/moment-with-locales');

//
// Sets current locale
class LocaleConfig {
  // Runs all configuration methods
  constructor() {
    this.updateLocales();
  }

  // Updates locales for i18n-js
  updateLocales() {
    var $body, defaultLocale, currentLocale;
    $body = $('body');
    defaultLocale = $body.data('default-locale');
    currentLocale = $body.data('current-locale');

    I18n.defaultLocale = defaultLocale;
    I18n.locale = currentLocale;

    moment.locale(currentLocale);
  }
}

module.exports = LocaleConfig;