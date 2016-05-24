angular.module('AutomationUI.Common')
    .service('SelectorTypeService',
        function($rootScope, $http) {
            var service = this,
              baseUrl = 'http://localhost:8000';

            service.findAll = function() {
                return $http.get(baseUrl + '/api/selectorType/');
            };

            service.findById = function(selectorTypeId) {
                return $http.get(baseUrl + '/api/selectorType/' + selectorTypeId);
            };

            service.create = function(selectorType) {
                return $http.post(baseUrl + '/api/selectorType/', selectorType);
            };

            service.delete = function(selectorTypeId) {
                return $http.delete(baseUrl + '/api/selectorType/' + selectorTypeId);
            };

            service.update = function(selectorType) {
                return $http.put(baseUrl + '/api/selectorType/' + selectorType.id + '/', selectorType);
            };

        });
