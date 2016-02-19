'use strict';

var movieInfoController = angular.module('movieInfoController', []);

movieInfoController.controller('MovieInfoController', ['$scope', '$routeParams', 'MovieInfo',
    function($scope, $routeParams, MovieInfo) {	
		MovieInfo($routeParams.imdbID, 'short')
		.success(function(data){
			$scope.movie =  data; 
		});
	}
]);
