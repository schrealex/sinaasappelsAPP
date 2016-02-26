'use strict';

var actorDetailController = angular.module('actorDetailController', []);

actorDetailController.controller('ActorDetailController', ['$scope', '$routeParams', 'ActorSearch', 'ActorDetails', 'MovieCredits', 'MovieImages', 'appelsAPPConfig',
    function($scope, $routeParams, ActorSearch, ActorDetails, MovieCredits, MovieImages, appelsAPPConfig) {
		ActorSearch($routeParams.name, appelsAPPConfig)
			.then(function(actorSearchResults){
				$scope.actor = actorSearchResults.data.results[0];

				ActorDetails(actorSearchResults.data.results[0].id, appelsAPPConfig)
					.then(function(actorResults){
						console.log(actorResults.data)
						$scope.actorDetail = actorResults.data;
					});

				MovieCredits(actorSearchResults.data.results[0].id, appelsAPPConfig)
					.then(function(creditsResults){
						console.log(creditsResults.data)
						$scope.movieCredits = creditsResults.data;

						MovieImages(creditsResults.data.cast[1].id, appelsAPPConfig)
							.then(function(imagesResults){
								console.log(imagesResults.data.backdrops)
								$scope.movieBackdrops = imagesResults.data.backdrops;
							});
					});
			});
	}
]);

