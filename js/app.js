'use strict';

var appelsAPP = angular.module('appelsAPP', [
	'ngRoute',

	'moviesController',
	'movieInfoController',
	'ratingsController',
	'searchMovieController',
	'settingService',
	'movieServices'
]);

appelsAPP.config(['$routeProvider', 
       function($routeProvider) {
	$routeProvider
	.when('/', {
	    templateUrl : 'partials/movies/movies.html',
	    controller : 'MoviesController'
	})
	.when('/detail/:imdbID', {
	    templateUrl : 'partials/movies/movieInfo.html',
	    controller : 'MovieInfoController'
	})
	.when('/search/:title', {
	    templateUrl : 'partials/movies/search.html',
	    controller : 'SearchMovieController'
	})
	.otherwise({
	    redirectTo: '/'
    });
}]);
