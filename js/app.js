'use strict';

var appelsAPP = angular.module('appelsAPP', [
	'ngRoute',

	'movieOverviewController',
	'movieDetailsController',
	'ratingsController'
]);

appelsAPP.config([ '$routeProvider', 
       function($routeProvider) {
	$routeProvider.when('/', {
	    templateUrl : 'partials/movies/list.html',
	    controller : 'MovieOverviewController'
	}).when('/detail/:imdbID', {
	    templateUrl : 'partials/movies/detail.html',
	    controller : 'MovieDetailsController'
	}).when('/movie:imdbID', {
	    templateUrl : 'partials/movies/view.html',
	    controller : 'RatingsController'
	}).otherwise({
	    redirectTo: '/'
    });
}]);