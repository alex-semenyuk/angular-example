'use strict';

angular.module('ang1TestApp')
  .service('ToDoService', function() {
    function create(todoItem) {
      //todo create
      return todoItem;
    }

    function getAll() {
      return [
        {
          id:1,
          description: 'todo1 desc',
          date: new Date()
        },
        {
          id:2,
          description: 'todo2 desc',
          date: new Date()
        },
        {
          id:3,
          description: 'todo3 desc',
          date: new Date()
        },
        {
          id:4,
          description: 'todo4 desc',
          date: new Date()
        },
        {
          id:5,
          description: 'todo5 desc',
          date: new Date()
        }];
    }

    function update(todoItem) {
      //todo update
      return todoItem;
    }

    function remove(todoId) {
      //todo remove by id
    }

    return {
      create: create,
      getAll: getAll,
      update: update,
      remove: remove
    };
  });
