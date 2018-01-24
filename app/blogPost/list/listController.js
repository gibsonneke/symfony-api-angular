'use strict';

angular.module('myApp.blogPost')

.controller('listController', ['$scope', 'api', '$filter', function($scope, api, $filter) {

  $scope.blogPosts = [];

  api.getAll()
      .then(function (result) {
        console.log('result', result);
        $scope.blogPosts = result.data;
      }, function (error) {
        console.log('error', error);
      });

    $scope.remove = function (id) {
        api.remove(id)
            .then(function (result) {
                $scope.blogPosts = $filter('filter')($scope.blogPosts, function (value, index, array) {
                    return value.id !== id;
                });
            }, function (error) {
                console.error('error', error);
            });
    }

}]);