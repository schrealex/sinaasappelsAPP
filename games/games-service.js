'use strict';

var gameService = angular.module('gameService', []);

gameService.factory('ListGames', ['$http', 
    function ListGames($http) {
       	return function(appelsAPPConfig) {
       		var url = "http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=" + appelsAPPConfig.steamApiKey + "&steamid="+ appelsAPPConfig.steamId +"&format=json";
       		console.log(url);
            return $http.get(url)
            .success(function(data) {
                return data; 
            }) 
            .error(function(err) {
                return err; 
            }); 
        };
    }
]);
