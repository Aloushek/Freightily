/**
* homeController 
*
* @class homeController
* @constructor
*/

angular.module('appControllers')
  .controller('homeController', ['$scope', 'User', function($scope){
    $scope.setNavigationPath("home");
  }
]);