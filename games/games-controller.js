'use strict';

var gamesController = angular.module('gamesController', []);

gamesController.controller('GamesController', ['$scope', '$location', 'ListGames', 'appelsAPPConfig',
    function($scope, $location, ListGames, appelsAPPConfig) {
		ListGames.success(function(data, appelsAPPConfig) {
			$scope.games = data;
    	});
    
    	this.go = function(path) {
        	$location.path(path);
    	};
    }
]);


