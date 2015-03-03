//
// Filters module

var angular = require('angular');
var RouteFilter = require('./../filters/route');
var I18nFilter = require('./../filters/i18n');

var cbrwizardFilters = angular.module('cbrwizardFilters', [])
  .filter('I18nFilter', I18nFilter)
  .filter('RouteFilter', RouteFilter);

module.exports = cbrwizardFilters;
