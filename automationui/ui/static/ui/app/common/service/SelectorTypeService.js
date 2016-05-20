angular.module('AutomationUI.Common')
    .service('SelectorTypeService',
        function($rootScope, $http) {
            var service = this,
              baseUrl = 'http://localhost:8000';

            service.findAll = function() {
                return $http.get(baseUrl + '/api/selectorType/');
            };

            service.create = function(selectorType) {
                return $http.post(baseUrl + '/api/selectorType/', selectorType);
            };

            service.delete = function(selectorTypeId) {
                return $http.delete(baseUrl + '/api/selectorType/', selectorTypeId);
            };

        });
