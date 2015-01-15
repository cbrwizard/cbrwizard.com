##
# Locale configs
app.config.LocaleConfig =

  ##
  # Runs all configuration methods
  configureApp: ->
    @updateLocales()

  ##
  # Updates locales for i18n-js
  updateLocales: ->
    $body = $('body')
    defaultLocale = $body.data('default-locale')
    currentLocale = $body.data('current-locale')

    I18n.defaultLocale = defaultLocale
    I18n.locale = currentLocale

    moment.locale(currentLocale)

app.config.LocaleConfig.configureApp()