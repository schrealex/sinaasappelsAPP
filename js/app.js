'use strict';

var appelsAPP = angular.module('appelsAPP', [
	'ngRoute',

	'moviesController',
	'movieInfoController',
	'ratingsController',
	'searchMovieController',
	'settingService',
	'movieServices',
	'gamesController',
	'gameService'
]);

appelsAPP.config(['$routeProvider', 
       function($routeProvider) {
	$routeProvider
	.when('/movies', {
	    templateUrl : 'partials/movies/movies.html',
	    controller : 'MoviesController'
	})
	.when('/detail/:imdbID', {
	    templateUrl : 'partials/movies/movieInfo.html',
	    controller : 'MovieInfoController'
	})
	.when('/', {
	    templateUrl : 'partials/movies/searchOmdiApi.html',
	    controller : 'SearchMovieController'
	})
	.when('/search', {
	    templateUrl : 'partials/movies/search.html',
	    controller : 'SearchMovieController'
	})
	.when('/games', {
	    templateUrl : 'games/games.html',
	    controller : 'GamesController'
	})
	.otherwise({
	    redirectTo: '/'
    });
}]);
