'use strict';

var movieServices = angular.module('movieServices', []);

movieServices.factory('Movies', ['$http', function($http) { 
    return $http.get('json/movies.json') 
              .success(function(data) { 
                return data; 
              }) 
              .error(function(err) { 
                return err; 
              }); 
}]);

movieServices.factory('SearchMovies', ['$http', 
    function SearchMovies($http) {
       	return function(title, appelsAPPConfig) {
       	    	var searchTitle = title.replace(/ /g, '%20');
       		var url = "http://api.themoviedb.org/3/search/movie?api_key=" + appelsAPPConfig.apiKey + "&query=" + searchTitle;
       		console.log(url);
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

movieServices.factory('SearchOmdbApiMovies', ['$http', 
    function SearchOmdbApiMovies($http) {
        return function(title, appelsAPPConfig) {
              var searchTitle = title.replace(/ /g, '%20');
          var url = "http://www.omdbapi.com/?&s=" + searchTitle;
          console.log(url);
            return $http.get(url)
            .success(function(data) {
                console.log('Data: ' + data);
                return data; 
            }) 
            .error(function(error) {
              console.log('Error: ' + error);
                return error; 
            }); 
        };
    }
]);

movieServices.factory('MovieInfo', ['$http', 
    function MovieInfo($http) {
       	return function(title, plot) {
       		var url = 'http://www.omdbapi.com/?i=' + title + '&plot=' + plot + '&r=json';
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

movieServices.factory('MovieInfo2', ['$http',
    function MovieInfo2($http) {
        return function(movieId, appelsAPPConfig) {
            var url = "http://api.themoviedb.org/3/movie/" + movieId + "?api_key=" + appelsAPPConfig.apiKey;
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
