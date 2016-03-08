'use strict';

var actorsController = angular.module('actorsController', []);

actorsController.controller('ActorsController', ['$scope', '$location',
    function($scope, $location) {
    	this.go = function(path) {
        	$location.path(path);
    	};
    }
]);


