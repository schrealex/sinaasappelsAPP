'use strict';

var appelsAPP = angular.module('appelsAPP', [
	'ngRoute',

	'moviesController',
	'movieInfoController',
	'ratingsController',
	'actorsController',
	'actorDetailController',
	'searchMovieController',
	'settingService',
	'movieServices',
	'actorServices',
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
	    templateUrl : 'partials/movies/movie.html',
	    controller : 'MovieInfoController'
	})
	.when('/actor/:name', {
		templateUrl : 'partials/movies/actor.html',
		controller : 'ActorDetailController'
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
