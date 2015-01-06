#
# Helps get information about locales from rails configs
module LocaleHelper
  ##
  # Returns current locale
  def current_locale
    I18n.locale
  end

  ##
  # Returns default locale
  def default_locale
    I18n.default_locale
  end
end
