'use strict';

/**
 * @ngdoc overview
 * @name angularTodoApp
 * @description
 * # angularTodoApp
 *
 * Main module of the application.
 */
angular
  .module('angularTodoApp', [
    'ngRoute',
    'angular-sortable-view',
    'LocalStorageModule'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .config(['localStorageServiceProvider',function (localStorageServiceProvider) {
    localStorageServiceProvider.setPrefix('ls');
  }]);
