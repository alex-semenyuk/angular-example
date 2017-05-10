'use strict';

/**
 * @ngdoc function
 * @name ang1TestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ang1TestApp
 */
angular.module('ang1TestApp')
  .controller('TodoCtrl', ['$scope', 'ToDoService', function ($scope, ToDoService) {
    $scope.allSelected = false;
    $scope.addMode = false;
    $scope.todos = ToDoService.getAll();
    $scope.todos.forEach(function(todo) {
      todo.seleted = false;
    });

    $scope.toggleAll = function() {
      $scope.allSelected = ! $scope.allSelected;
      $scope.todos.forEach(function(todo) {
        todo.selected = $scope.allSelected;
      })
    };

    $scope.toggleSelected = function(todo) {
      var selected = false;
      var currentTodoArray = $scope.todos.filter(function(todoItem) {
        return todo === todoItem;
      });
      if(currentTodoArray.length === 1) {
        selected = currentTodoArray[0].selected;
        if(selected && $scope.allSelected) {
          $scope.allSelected = false;
        } else {
          $scope.todos.forEach(function(todo) {
            if(!todo.selected) {
              $scope.allSelected = false;
            }
          })
        }
      }
    };

    $scope.removeTodo = function(todo) {
      if(todo.id) {
        ToDoService.remove(todo.id);
        //todo remove real item + alert message
      }
      $scope.todos.splice($scope.todos.indexOf(todo), 1);
    };

    $scope.addTodo = function() {
      var createdTodo = ToDoService.create($scope.newTodo);
      //todo push on real item created + alert messasge
      $scope.todos.push(createdTodo);
      $scope.toggleCreateNew();
    };

    $scope.updateTodo = function(todo) {
      ToDoService.update(todo);
      //todo alert message - item updated
    };

    $scope.removeSelected = function() {
      $scope.todos.filter(function(todo) {
        return todo.selected;
      }).forEach(function(todo) {
        if (todo.id) {
          ToDoService.remove(todo.id);
          //todo splice on real item removed and alert message
        }
        $scope.todos.splice($scope.todos.indexOf(todo), 1)
      });
    };

    $scope.toggleCreateNew = function() {
      $scope.addMode = !$scope.addMode;
      if($scope.addMode) {
        $scope.newTodo = {
          selected: false,
          description: '',
          date: new Date()
        }
      }
    }

  }]);
