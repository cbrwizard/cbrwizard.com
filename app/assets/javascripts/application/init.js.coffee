# Main init file which prepares EVERYTHING

@.app || (@.app = {})

@app.cbrwizard = angular.module('cbrwizard', [])

#@cbrwizard.config(['$routeProvider', ($routeProvider) ->
#  $routeProvider.
#  otherwise({
#      templateUrl : '../templates/home.html',
#      controller : 'HomeCtrl'
#    })
#])