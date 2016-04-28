'use strict';

var genreServices = angular.module('genreServices', []);

genreServices.factory('MovieGenres', ['$http',
    function MovieGenres($http) {
        return function(appelsAPPConfig) {
            var url = "http://api.themoviedb.org/3/genre/movie/list?api_key=" + appelsAPPConfig.apiKey;
            console.debug(url);
            return $http.get(url)
            .success(function(data) {
                return data;
            })
            .error(function(err) {
                return err;
            });
        };
    }
]);

genreServices.factory('TVGenres', ['$http',
    function TVGenres($http) {
        return function(appelsAPPConfig) {
            var url = "http://api.themoviedb.org/3/genre/tv/list?api_key=" + appelsAPPConfig.apiKey;
            console.debug(url);
            return $http.get(url)
            .success(function(data) {
                return data;
            })
            .error(function(err) {
                return err;
            });
        };
    }
]);
