'use strict';

var ratingsController = angular.module('ratingsController', ['movieServices']);

ratingsController.controller('RatingsController', ['$scope', '$routeParams', function ($scope) {
    this.rating = 1;

    $scope.mouseHover1 = function (param) {
       console.log('mouseHover(' + param + ')');
        $scope.hoverRating1 = param;
    };

    $scope.mouseLeave1 = function (param) {
        console.log('mouseLeave(' + param + ')');
        $scope.hoverRating1 = param + '*';
    };
}]).directive('starRating', starRating);

function starRating() {
    return {
        restrict: 'EA',
        template: '<ul class="star-rating" ng-class="{readonly: readonly}">' +
            '  <li ng-repeat="star in stars" class="star" ng-class="{filled: star.filled}" ng-click="toggle($index)" ng-mouseenter="isolatedMouseHover($index + 1)"' +
            '  ng-mouseleave="isolatedMouseLeave($index + 1)">' +
            '  <i class="fa fa-star"></i></li>' +
            '</ul>',
        scope: {
            ratingValue: '=ngModel',
            max: '=?', // optional (default is 5)
            onRatingSelect: '&?',
            readonly: '=?',
        	click: "&",
            mouseHover: "&",
            mouseLeave: "&"
        },
        link: function(scope, element, attributes) {
            if (scope.max == undefined) {
                scope.max = 5;
            }

            function updateStars() {
                scope.stars = [];
                for (var i = 0; i < scope.max; i++) {
                    scope.stars.push({
                        filled: i < scope.ratingValue
                    });
                }
            };
            scope.toggle = function(index) {
                if (scope.readonly == undefined || scope.readonly === false) {
                    scope.ratingValue = index + 1;
                    scope.onRatingSelect({
                        rating: index + 1
                    });
                }
            };
            scope.$watch('ratingValue', function(oldValue, newValue) {
                if (newValue) {
                    updateStars();
                }
            });
            
            scope.isolatedMouseHover = function (param) {
                scope._rating = 0;
                scope.ratingValue = param;
                scope.mouseHover({
            	param: param
                });
	};

	scope.isolatedMouseLeave = function (param) {
	    if ($scope.readOnly == 'true') return;

	    scope._rating = $scope.rating;
	    scope.ratingValue = 0;
	    scope.mouseLeave({
		param: param
	    });
	};
        }
    };
}    
