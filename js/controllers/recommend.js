'use strict';

var recommendController = angular.module('recommendController', []);

recommendController.controller('RecommendController', ['$scope', 'RecommendMovie', 'appelsAPPConfig',
    function($scope, RecommendMovie, appelsAPPConfig) {
        this.recommend = function() {
            var randomize = function(amount) {
                return Math.ceil(Math.random() * amount);
            };

            RecommendMovie(appelsAPPConfig)
                .success(function(data){
                    console.log(data);
                    var results = data.results;
                    $scope.recommendation = results[randomize(results.length) - 1];
                });
        };
	}
]);