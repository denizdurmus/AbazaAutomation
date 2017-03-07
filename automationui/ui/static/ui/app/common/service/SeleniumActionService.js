angular.module('AutomationUI.Common')
    .service('SeleniumActionService',
        function($rootScope, $http) {
            var service = this,
              baseUrl = 'http://localhost:8000';

            service.findAll = function() {
                return $http.get(baseUrl + '/api/seleniumAction/');
            };

            service.findById = function(seleniumActionId) {
                return $http.get(baseUrl + '/api/seleniumAction/' + seleniumActionId);
            };

            service.create = function(seleniumAction) {
                return $http.post(baseUrl + '/api/seleniumAction/', seleniumAction);
            };

            service.delete = function(seleniumActionId) {
                return $http.delete(baseUrl + '/api/seleniumAction/' + seleniumActionId);
            };

            service.update = function(seleniumAction) {
                return $http.put(baseUrl + '/api/seleniumAction/' + seleniumAction.id + '/', seleniumAction);
            };

        });
