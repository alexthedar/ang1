
var app = angular.module('computer', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
  $routeProvider.when('/', {
      templateUrl: 'main.html',
      controller: 'MainCtrl'
  }).
  otherwise({redirectTo:'/'})
}]);

app.controller('MainCtrl', [function(){
  console.log('this is the main controller');
}]);
