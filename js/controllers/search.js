'use strict';

var searchMovieController = angular.module('searchMovieController', []);

searchMovieController.controller('SearchMovieController', ['$scope', '$routeParams', 'SearchMovies', 'appelsAPPConfig', 
    function($scope, $routeParams, SearchMovies, appelsAPPConfig) {
	
	 	var pendingTask;
		
		$scope.change = function() {
			if (pendingTask) {
				clearTimeout(pendingTask);
			}
			pendingTask = setTimeout(fetch, 800);
	    };
	    
	    function fetch() {
	    	SearchMovies($scope.search, appelsAPPConfig)
	    	.success(function(data) {
	    		$scope.movies = data.results; 
	    	});
	    }
	    
	    $scope.select = function() {
	    	this.setSelectionRange(0, this.value.length);
	    }
	}
]);