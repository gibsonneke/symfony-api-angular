'use strict';

angular.module('myApp.blogPost')

    .factory('api', [
        '$http',
        function ($http) {

            var API_URL = 'http://192.168.0.100:8000/posts';

            function get(id) {
                return $http.get(API_URL + '/' + id);
            }

            function getAll() {
                return $http.get(API_URL);
            }

            function post(blogPost) {
                return $http.post(API_URL, blogPost);
            }

            function put(id, data) {
                return $http.put(API_URL + '/' + id, data);
            }

            function remove(id) {
                return $http.delete(API_URL + '/' + id);
            }

            return {
                get: get,
                getAll: getAll,
                post: post,
                put: put,
                remove: remove
            }
        }
    ]);