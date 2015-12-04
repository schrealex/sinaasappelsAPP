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
	    	SearchOmdbApiMovies($scope.search, appelsAPPConfig)
	    	.success(function(data) {
	    		console.log(data);
	    		$scope.movies = data.Search; 
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