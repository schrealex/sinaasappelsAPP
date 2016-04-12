'use strict';

var recommendServices = angular.module('recommendServices', []);

recommendServices.factory('RecommendMovie', ['$http',
    function RecommendMovie($http) {
        return function(appelsAPPConfig) {

            var randomize = function(amount) {
                return Math.ceil(Math.random() * amount);
            };

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
                'page'                          : 5
                // 'primary_release_year'          : new Date().getFullYear(),
                // 'primary_release_date.gte'      : getCurrentDateFormatted(),
                // 'primary_release_date.lte'      : getCurrentDateFormatted(),
                // 'sort_by'                       : 'vote_avrage.desc',
                // 'vote_average.gte'              : '',
                // 'vote_average.lte'              : '5'
            };

            var url = "http://api.themoviedb.org/3/discover/movie?api_key=" + appelsAPPConfig.apiKey;
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
