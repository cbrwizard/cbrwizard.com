//
// Locale configs
app.config.LocaleConfig = {
  // Runs all configuration methods
  configureApp: function(){
    this.updateLocales();
  },

  // Updates locales for i18n-js
  updateLocales: function(){
    var $body, defaultLocale, currentLocale;
    $body = $('body');
    defaultLocale = $body.data('default-locale');
    currentLocale = $body.data('current-locale');

    I18n.defaultLocale = defaultLocale;
    I18n.locale = currentLocale;

    return moment.locale(currentLocale);
  }
};

app.config.LocaleConfig.configureApp();
