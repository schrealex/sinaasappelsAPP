'use strict';

var recommendServices = angular.module('recommendServices', []);

recommendServices.factory('RecommendMovie', ['$http',
    function RecommendMovie($http) {
        return function(appelsAPPConfig, genres, years, ratings, popular, adult) {

            var selectedGenres = [];
            for(var genre in genres) {
                if(genres[genre]) {
                    selectedGenres.push(genre);
                }
            }

            var selectedYears = 0;
            if(years != undefined) {
                selectedYears =  Object.keys(years)[0];
            }

            var selectedRating = 0;
            if(ratings != undefined) {
                selectedRating =  Object.keys(ratings)[0];
            }

            var votes = popular ? 2500 : 100;

            function randomize(amount) {
                return Math.ceil(Math.random() * amount);
            }

            function pad(value) {
                return (value < 10) ? '0' + value : value;
            }

            function getCurrentDateFormatted() {
                var date = new Date();
                return [date.getFullYear(), pad(date.getMonth()+1), pad(date.getDate())].join('-');
            }

            var options = {
                // 'include_adult'                 : true,
                // 'include_video'                 : true,
                'page'                          : randomize(1)
                // 'primary_release_year'          : new Date().getFullYear(),
                // 'primary_release_date.gte'      : getCurrentDateFormatted(),
                // 'primary_release_date.lte'      : getCurrentDateFormatted(),
                // 'sort_by'                       : 'vote_avrage.desc',
                // 'vote_average.gte'              : '',
                // 'vote_average.lte'              : '5'
            };

            var parameters = '';
            parameters += '&include_adult=' + adult;
            parameters += '&vote_count=' + votes;

            if(selectedGenres != 0) {
                parameters += '&with_genres=' + selectedGenres.join('|');
            }

            if(selectedYears != undefined) {
                const year = parseInt(selectedYears);
                parameters += '&primary_release_date.gte=' + year + '-01-01'+ '&primary_release_date.lte=' + (year + 9) + '-12-31';
            }

            if(selectedRating != undefined) {
                const rating = parseInt(selectedRating);
                parameters += '&vote_average.gte=' + rating;
            }

            console.log('parameters: ' + parameters);

            var url = "http://api.themoviedb.org/3/discover/movie?api_key=" + appelsAPPConfig.apiKey + parameters;
            console.log(url, options);
            return $http.get(url, {
                params: options
            })
            .success(function(data) {
                return data;
            })
            .error(function(err) {
                return err;
            });
        };
    }
]);
