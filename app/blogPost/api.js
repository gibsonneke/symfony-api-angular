'use strict';

angular.module('myApp.blogPost')

    .factory('api', [
        '$http',
        function ($http) {

            var ROOT_URL = 'http://192.168.0.100:8000/posts';

            function get(id) {
                return $http.get(ROOT_URL + '/' + id);
            }

            function getAll() {
                return $http.get(ROOT_URL);
            }

            function post(blogPost) {
                return $http.post(ROOT_URL, blogPost);
            }

            function put(id, data) {
                return $http.put(ROOT_URL + '/' + id, data);
            }

            function remove(id) {
                return $http.delete(ROOT_URL + '/' + id);
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