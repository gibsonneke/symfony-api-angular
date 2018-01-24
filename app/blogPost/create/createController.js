'use strict';

angular.module('myApp.blogPost')

    .controller('createController', ['$scope', 'api', function($scope, api) {

        $scope.blogPost = {};

        $scope.create = function (blogPost) {

            api.post(blogPost)
                .then(function (result) {
                    console.log('result', result);
                    window.location.href = '#!list';
                }, function (error) {
                    console.log('error', error);
                })
        };

    }]);