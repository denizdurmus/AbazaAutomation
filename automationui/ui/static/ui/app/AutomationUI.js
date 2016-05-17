var myModule = angular.module('AutomationUI',
    [
        'ngRoute',
        'AutomationUI.Common',
        'AutomationUI.SelectorType'
    ]);

myModule.config(function($routeProvider, $httpProvider) {
    $routeProvider
        .when('/index', {
            templateUrl: '/static/ui/app/common/tmpl/index.html',
            requiresLogin: false
        })
        .when('/selectorType', {
            templateUrl: '/static/ui/app/selectorType/tmpl/selectorType.html',
            controller: 'SelectorTypeController',
            controllerAs: 'selectorType',
            requiresLogin: false
        });

    $httpProvider.interceptors.push('loadingInterceptor');
});

myModule.factory('loadingInterceptor', function(LoadingService) {
    var loadingInterceptor = {
        request: function(config) {
            LoadingService.setLoading(true);
            return config;
        },
        response: function(response) {
            LoadingService.setLoading(false);
            return response;
        }
    };
    return loadingInterceptor;
});

myModule.run(function($rootScope, LoadingService) {
    $rootScope.$on('$routeChangeStart', function(e, curr, prev) {
        LoadingService.setLoading(true);
    });

    $rootScope.$on('$routeChangeSuccess', function(e, curr, prev) {
        LoadingService.setLoading(false);
    });
});
