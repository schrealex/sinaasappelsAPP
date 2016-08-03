'use strict';

var actorDetailController = angular.module('actorDetailController', []);

actorDetailController.controller('ActorDetailController', ['$scope', '$sce', '$routeParams', 'ActorSearch', 'ActorDetails', 'MovieCredits', 'MovieImages', 'appelsAPPConfig',
    function($scope, $sce, $routeParams, ActorSearch, ActorDetails, MovieCredits, MovieImages, appelsAPPConfig) {
		ActorSearch.getActor($routeParams.name, appelsAPPConfig)
			.then(function(actorSearchResults) {
				$scope.movies = data.Search;
			}, function(error) {
				console.log('error', error);
			});


		ActorSearch($routeParams.name, appelsAPPConfig)
			.then(function(actorSearchResults){
				$scope.actor = actorSearchResults.data.results[0];

				ActorDetails(actorSearchResults.data.results[0].id, appelsAPPConfig)
					.then(function(actorResults){
						$scope.actorDetail = actorResults.data;
						$scope.biography = $sce.trustAsHtml(actorResults.data.biography);
					});

				MovieCredits(actorSearchResults.data.results[0].id, appelsAPPConfig)
					.then(function(creditsResults){
						$scope.movieCredits = creditsResults.data;
						var randomId = Math.floor((Math.random() * creditsResults.data.cast.length) + 1);
						MovieImages(creditsResults.data.cast[randomId].id, appelsAPPConfig)
							.then(function(imagesResults){
								$scope.movieBackdrops = imagesResults.data.backdrops;
							});
					});
			});
	}
]);

