'use strict';

var searchMovieController = angular.module('searchMovieController', []);

searchMovieController.controller('SearchMovieController', ['$scope', '$location', 'SearchOmdbApiMovies', 'appelsAPPConfig', 
    function($scope, $location, SearchOmdbApiMovies, appelsAPPConfig) {
	
		var pendingTask;
		
		$scope.change = function() {
			if (pendingTask) {
				clearTimeout(pendingTask);
			}
			pendingTask = setTimeout(fetch, 800);
	    };
	    
	    function fetch() {
	    	SearchOmdbApiMovies.getMovies($scope.search)
	    	.then(function(data) {
	    		$scope.movies = data.Search;
	    	}, function(error) {
				console.log('error', error);
			});
	    }
	    
	    $scope.go = function(path) {
			console.log(path)
        	$location.path(path);
	    }
	    
	    $scope.select = function() {
	    	this.setSelectionRange(0, this.value.length);
	    }
	}
]);