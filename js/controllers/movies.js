'use strict';

var moviesController = angular.module('moviesController', []);

moviesController.controller('MoviesController', ['$scope', '$location', 'Movies', 'MovieInfo2', 'appelsAPPConfig',
    function($scope, $location, Movies, MovieInfo2, appelsAPPConfig) {
		Movies.success(function(data) {
			$scope.movies = data;
    	});

    	this.go = function(path) {
        	$location.path(path);
    	};

		this.getImdbIdAndGo = function(movieId) {
			MovieInfo2(movieId, appelsAPPConfig)
				.success(function(data){
					$location.path('/detail/' + data.imdb_id );
				});
		};
    }
]);


