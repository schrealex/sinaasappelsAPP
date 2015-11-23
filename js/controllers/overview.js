'use strict';

var movieOverviewController = angular.module('movieOverviewController', []);

movieOverviewController.controller('MovieOverviewController', ['$scope', 'MovieInfo',
    function($scope, MovieInfo) {
		
		var movies = MovieInfo('The+Matrix' , 'short').success(function(data){ $scope.movies = [data]; });
		console.log(movies);
	
//    	MovieInfo.success(function(data) {
    	    
//    	});
    
//    	this.go = function(path) {
//        	$location.path(path);
//    	};
    }
]);


