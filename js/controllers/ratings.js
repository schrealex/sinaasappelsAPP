function strict() {
    return 'use strict';
}

var ratingsController = angular.module('ratingsController', ['movieServices']);

ratingsController.controller('RatingsController', ['$scope',
    function ($scope) {
        $scope.starRating = 0;
        $scope.hoverRating = 0;

        $scope.click = function() {
            // TODO: Set the rating
        };

        $scope.mouseHover = function(param) {
            $scope.hoverRating = param;
        };

        $scope.mouseLeave = function(param) {
            $scope.hoverRating = param + '*';
        };
    }
]);

ratingsController.directive('starRating', function () {
    return {
        scope: {
            rating: '=',
            maxRating: '@',
            readOnly: '@',
            click: "&",
            mouseHover: "&",
            mouseLeave: "&"
        },
        restrict: 'EA',
        template:
        "<div style='display: inline-block; margin: 0px; padding: 0px; cursor:pointer;' ng-repeat='idx in maxRatings track by $index'>" +
            "<img ng-src='{{((hoverValue + _rating) <= $index) && \"http://www.codeproject.com/script/ratings/images/star-empty-lg.png\" || \"http://www.codeproject.com/script/ratings/images/star-fill-lg.png\"}}'" +
            "ng-Click='isolatedClick($index + 1)'" +
            "ng-mouseenter='isolatedMouseHover($index + 1)'" +
            "ng-mouseleave='isolatedMouseLeave($index + 1)'></img>" +
        "</div>",
        compile: function (element, attributes) {
            if (!attributes.maxRating || (Number(attributes.maxRating) <= 0)) {
                attributes.maxRating = '5';
            }
        },
        controller: function ($scope) {
            $scope.maxRatings = [];

            for (var i = 1; i <= $scope.maxRating; i++) {
                $scope.maxRatings.push({});
            }

            $scope._rating = $scope.rating;

            $scope.isolatedClick = function (param) {
                if ($scope.readOnly === 'true') {
                    return;
                }

                $scope.rating = $scope._rating = param;
                $scope.hoverValue = 0;
                $scope.click({
                    param: param
                });
            };

            $scope.isolatedMouseHover = function (param) {
                if ($scope.readOnly === 'true') {
                    return;
                }

                $scope._rating = 0;
                $scope.hoverValue = param;
                $scope.mouseHover({
                    param: param
                });
            };

            $scope.isolatedMouseLeave = function (param) {
                if ($scope.readOnly === 'true') {
                    return;
                }

                $scope._rating = $scope.rating;
                $scope.hoverValue = 0;
                $scope.mouseLeave({
                    param: param
                });
            };
        }
    };
});