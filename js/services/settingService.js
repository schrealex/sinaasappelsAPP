'use strict';

var settingService = angular.module('settingService', []);

settingService.factory('appelsAPPConfig', function() {
    return {
	version: '1.0',
	apiKey: 'f16bfeb0210b43f1f12d8d4ccc114ee9'
    }
});
