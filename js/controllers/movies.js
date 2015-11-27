'use strict';

var moviesController = angular.module('moviesController', []);

moviesController.controller('MoviesController', ['$scope', '$location', 'Movies',
    function($scope, $location, Movies) {
		Movies.success(function(data) {
			$scope.movies = data;
    	});
    
    	this.go = function(path) {
        	$location.path(path);
    	};
    }
]);


