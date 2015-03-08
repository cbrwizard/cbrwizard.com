require('angular');
const RouteFilter = require('./../filters/route');
const I18nFilter = require('./../filters/i18n');

/**
 * Filters module
 */
const cbrwizardFilters = angular.module('cbrwizardFilters', [])
  .filter('I18nFilter', I18nFilter)
  .filter('RouteFilter', RouteFilter);

module.exports = cbrwizardFilters;
