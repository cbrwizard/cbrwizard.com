// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require i18n/translations
//= require js-routes
//= require jquery_ujs
//= require angular
//= require angular-resource
//= require angular-rails-templates
//= require bootstrap-sprockets

//= require bundle

//= require vendor_manifest

// todo: require app(=init) here, call init from there (if needed).
// there in init require other stuff and call it
// in other files remove references to global objects and require files where needed
// start with angular, then move to config and effects
// after that, remove dependencies from sprockets to browserify one by one
//var foo = require('./application/exported_lol.js.es6');
//console.log(foo(2));
//
//
//var cbrwizard = require('./application/angular/modules/cbrwizard');
//console.log(cbrwizard);
//
//var cbrwizardCtrl = require('./application/angular/controllers/pages_index_ctrl');
//console.log(cbrwizardCtrl);