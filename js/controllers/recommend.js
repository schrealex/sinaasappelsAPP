'use strict';

var recommendController = angular.module('recommendController', ['ngAnimate']);

recommendController.controller('RecommendController', ['$scope', 'MovieGenres', 'RecommendMovie', 'appelsAPPConfig',
    function($scope, MovieGenres, RecommendMovie, appelsAPPConfig) {

        $scope.selection = {
            genres: [],
            years: '',
            rating: 0,
            adult: false,
            popular: false
        };

        MovieGenres(appelsAPPConfig)
            .success(function(data){
                $scope.genres = data.genres;
            });

        $scope.years = {
            1940: '40s (1940 - 1949)',
            1950: '50s (1950 - 1959)',
            1960: '60s (1960 - 1969)',
            1970: '70s (1970 - 1979)',
            1980: '80s (1980 - 1989)',
            1990: '90s (1990 - 1999)',
            2000: '00s (2000 - 2009)',
            2010: '10s (2010 - 2019)'
        };

        $scope.ratings = {
            1: 1,
            2: 2,
            3: 3,
            4: 4,
            5: 5,
            6: 6,
            7: 7,
            8: 8,
            9: 9
        };

        $scope.selectYear = function(year) {
            $scope.selection.years = {};
            $scope.selection.years[year] = true;
        };

        $scope.selectRating = function(rating) {
            $scope.selection.rating = {};
            $scope.selection.rating[rating] = true;
        };

        $scope.getMovieGenres = function(genreIds) {
            var foundGenres = [];
            if(genreIds != undefined) {
                genreIds.forEach(function (genreId) {
                    $scope.genres.forEach(function (entry) {
                        if (entry.id == genreId) {
                            foundGenres.push(entry.name)
                        }
                    });
                });
            }
            return foundGenres.join(', ');
        };

        $scope.recommend = function() {
            var randomize = function(amount) {
                return Math.ceil(Math.random() * amount);
            };

            var selectedGenres = $scope.selection.genres;
            var selectedYears = $scope.selection.years;
            var selectedRating = $scope.selection.rating;
            var adult = $scope.selection.adult;
            var popular = $scope.selection.popular;

            RecommendMovie(appelsAPPConfig, selectedGenres, selectedYears, selectedRating, popular, adult)
                .success(function(data){
                    var results = data.results;
                    $scope.recommendation = results[randomize(results.length) - 1];
                });
        };
	}
]);