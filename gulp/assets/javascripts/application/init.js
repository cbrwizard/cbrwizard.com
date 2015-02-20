//
// Prepares app namespace
//
// @todo: move from global
//window.app = {
//  // Creates angular app
//  cbrwizard:
//    angular.module(
//      'cbrwizard',
//      ['templates', 'truncate', 'angularMoment', 'cbrwizardFilters']
//    ),
//
//  // Creates custom filters module
//  angularFilters:
//    angular.module('cbrwizardFilters', []),
//
//  config: {},
//
//  effects: {
//    ThreeJs: {}
//  }
//};

//
// Adds a 3d effect to index
//
// @todo: integrate with angular for correct routing
//$(function(){
//  new app.effects.ThreeJs.Triangles(
//    $('.main-footer')[0]
//  );
//});

var foo = require('./exported_lol.js');
var loaaaa = msg => console.log(msg);
console.log(foo(200));