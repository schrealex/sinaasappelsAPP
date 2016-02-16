'use strict';

var actorsController = angular.module('actorsController', []);

actorsController.controller('ActorsController', ['$scope', '$location',
    function($scope, $location) {
    	this.go = function(path) {
			console.log("path: " + path);
        	$location.path(path);
    	};
    }
]);


