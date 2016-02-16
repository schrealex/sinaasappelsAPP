'use strict';

var actorDetailController = angular.module('actorDetailController', []);

actorDetailController.controller('ActorDetailController', ['$scope', '$routeParams', 'ActorSearch', 'ActorDetails', 'MovieCredits', 'appelsAPPConfig',
    function($scope, $routeParams, ActorSearch, ActorDetails, MovieCredits, appelsAPPConfig) {
		ActorSearch($routeParams.name, appelsAPPConfig)
		.then(function(actorSearchResults){
			$scope.actor = actorSearchResults.data.results[0];

			ActorDetails(actorSearchResults.data.results[0].id, appelsAPPConfig)
			.then(function(actorResults){
				console.log(actorResults.data)
				$scope.actorDetail = actorResults.data;
			});

			MovieCredits(actorSearchResults.data.results[0].id, appelsAPPConfig)
			.then(function(actorResults){
				console.log(actorResults.data)
				$scope.movieCredits = actorResults.data;
			});
		});
	}
]);

