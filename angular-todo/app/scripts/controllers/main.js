'use strict';

/**
 * @ngdoc function
 * @name angularTodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularTodoApp
 */
angular.module('angularTodoApp')
  .controller('MainCtrl', function ($scope,localStorageService) {
    /*$scope.todos = [
      'Item1',
      'Item2',
      'Item3'
    ];*/

    var todosInStore = localStorageService.get('todos');
    $scope.todos = todosInStore && todosInStore.split('\n') || [];
    $scope.$watch('todos',function () {
      localStorageService.add('todos',$scope.todos.join('\n'));
    },true);
    $scope.addTodo = function () {
      $scope.todos.push($scope.addTodoThing);
      $scope.addTodoThing = '';
    };
    $scope.removeTodo = function (index) {
      $scope.todos.splice(index,1);
    }
  });
