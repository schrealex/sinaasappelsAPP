'use strict';

var movieServices = angular.module('movieServices', []);

//movieServices.factory('Movie', ['$http', function($http) { 
//    return $http.get('json/movies.json') 
//              .success(function(data) { 
//                return data; 
//              }) 
//              .error(function(err) { 
//                return err; 
//              }); 
//}]);

movieServices.factory('MovieInfo', ['$http', function MovieInfo($http) {
    	//http://www.omdbapi.com/?t=The+Matrix&y=&plot=short&r=json
       	return function(title, plot) {
       		var url = 'http://www.omdbapi.com/?t=' + title + '&plot=' + plot + '&r=json';
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
