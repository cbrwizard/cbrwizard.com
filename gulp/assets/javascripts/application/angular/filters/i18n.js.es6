/**
 * Gets a locale for a passed path
 *
 * @param path {String} path to a rails locale translation
 * @returns {String} translation for a set locale
 * @note takes locales from Rails
 */
var I18nFilter = function(){
  return function(path){
    return I18n.t(path);
  }
};

module.exports = I18nFilter;