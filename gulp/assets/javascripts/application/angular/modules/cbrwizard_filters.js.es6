//
// Filters module

var angular = require('angular');
var RouteFilter = require('./application/angular/filters/route');
var I18nFilter = require('./application/angular/filters/i18n');

var cbrwizardFilters = angular.module('cbrwizardFilters', [])
  .filter('I18nFilter', I18nFilter)
  .filter('RouteFilter', RouteFilter);

module.exports = cbrwizardFilters;
