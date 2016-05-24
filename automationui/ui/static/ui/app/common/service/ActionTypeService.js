angular.module('AutomationUI.Common')
    .service('ActionTypeService',
        function($rootScope, $http) {
            var service = this,
              baseUrl = 'http://localhost:8000';

            service.findAll = function() {
                return $http.get(baseUrl + '/api/actionType/');
            };

            service.findById = function(actionTypeId) {
                return $http.get(baseUrl + '/api/actionType/' + actionTypeId);
            };

            service.create = function(actionType) {
                return $http.post(baseUrl + '/api/actionType/', actionType);
            };

            service.delete = function(actionTypeId) {
                return $http.delete(baseUrl + '/api/actionType/' + actionTypeId);
            };

            service.update = function(actionType) {
                return $http.put(baseUrl + '/api/actionType/' + actionType.id + '/', actionType);
            };

        });
