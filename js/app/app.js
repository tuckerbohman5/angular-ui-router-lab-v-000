angular
    .module('app', ['ui.router'])
    .config(function ($stateProvider){
      $stateProvider
        .state('user', {
          url: '/user/:id',
          templateUrl: 'views/user.html',
          controller: 'UserController as user',
          resolve: {
            user: function (UserService, $stateParams) {
              return UserService.getUser($stateParams.id);
            }
          }
        });
    });