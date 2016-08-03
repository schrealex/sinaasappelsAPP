'use strict';

var actorServices = angular.module('actorServices', []);

movieServices.factory('ActorSearch', function SearchOmdbApiMovies($http, $q) {
    return {
        getActor : function (actorName, appelsAPPConfig) {
            var searchActorName = actorName.replace(/ /g, '%20');
            var url = "http://api.themoviedb.org/3/search/person?api_key=" + appelsAPPConfig.apiKey + "&query=" + searchActorName;
            return $http.get(url)
                .then(function(response) {
                    if (typeof response.data === 'object') {
                        return response.data;
                    } else {
                        return $q.reject(response.data);
                    }
                }, function(response) {
                    return $q.reject(response.data);
                });
        }
    };
});

actorServices.factory('ActorSearch', ['$http',
    function ActorSearch($http) {
        return function(actorName, appelsAPPConfig) {
            var searchActorName = actorName.replace(/ /g, '%20');
            var url = "http://api.themoviedb.org/3/search/person?api_key=" + appelsAPPConfig.apiKey + "&query=" + searchActorName;
            console.debug(url);
            return $http.get(url)
                .success(function(response) {
                    return response;
                })
                .error(function(error) {
                    return error;
                });
        };
    }
]);

actorServices.factory('ActorDetails', ['$http',
    function ActorDetails($http) {
        return function(actorId, appelsAPPConfig) {
            var url = "http://api.themoviedb.org/3/person/" + actorId + "?api_key=" + appelsAPPConfig.apiKey;
            console.debug(url);
            return $http.get(url)
                .success(function(response) {
                    return response;
                })
                .error(function(error) {
                    return error;
                });
        };
    }
]);

actorServices.factory('MovieCredits', ['$http',
    function MovieCredits($http) {
        return function(actorId, appelsAPPConfig) {
            var url = "http://api.themoviedb.org/3/person/" + actorId + "/movie_credits" +  "?api_key=" + appelsAPPConfig.apiKey;
            console.debug(url);
            return $http.get(url)
                .success(function(response) {
                    return response;
                })
                .error(function(error) {
                    return error;
                });
        };
    }
]);

actorServices.factory('MovieImages', ['$http',
    function MovieImages($http) {
        return function(movieId, appelsAPPConfig) {
            var url = "http://api.themoviedb.org/3/movie/" + movieId + "/images" +  "?api_key=" + appelsAPPConfig.apiKey;
            console.debug(url);
            return $http.get(url)
                .success(function(response) {
                    return response;
                })
                .error(function(error) {
                    return error;
                });
        };
    }
]);
