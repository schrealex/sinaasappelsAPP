'use strict';

var movieInfoController = angular.module('movieInfoController', []);

movieInfoController.controller('MovieInfoController', ['$scope', '$routeParams', 'MovieInfo',
    function($scope, $routeParams, MovieInfo) {	
		MovieInfo($routeParams.imdbID, 'short')
		.success(function(data){
			$scope.movie =  data; 
		});
	}
//    	var movieId = $routeParams.imdbID;
//    
//    	var movies = Movies.get(function(Movies) {
//    		$scope.movies = movies;
//    	});
//    
//	    $.each(movies, function() {
//	    	if(this.imdbID == movieId) {
//	    		$scope.movie = this;
//	    	}
//	    });
//	}
]);
