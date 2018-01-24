'use strict';

angular.module('myApp.blogPost')

    .controller('updateController', [
        '$scope',
        'api',
        '$window',
        '$routeParams',
        function($scope, api, $window, $routeParams) {

        $scope.blogPost = {};

        api.get($routeParams.id)
            .then(function (response) {
                console.log('response', response);
                $scope.blogPost = response.data;
            }, function (error) {
                console.log('error', error);
            });
            
        $scope.update = function (blogPost) {

        api.put(blogPost.id, blogPost)
            .then(function (response) {
                console.log('response', response);
                $window.location.href = '#!list';
            }, function (error) {
                console.log('error', error);
            });

        };

    }]);