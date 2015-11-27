'use strict';

var searchMovieController = angular.module('searchMovieController', []);

searchMovieController.controller('SearchMovieController', ['$scope', '$routeParams', 'SearchMovies', 'appelsAPPConfig', 
    function($scope, $routeParams, SearchMovies, appelsAPPConfig) {
    	SearchMovies($routeParams.title, appelsAPPConfig)
    		.success(function(data) {
    		    $scope.movies = data.results; 
    		});
	}
]);