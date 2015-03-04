var moment = require('./../../../../../bower_components/moment/min/moment-with-locales');

/**
 * Sets current locale
 */
class LocaleConfig {
  /**
   * Updates locales for i18n-js
   */
  static updateLocales() {
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