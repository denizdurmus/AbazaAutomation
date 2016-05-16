var myModule = angular.module('AutomationUI',
    [
        'ngRoute',
        'AutomationUI.Common',
        'AutomationUI.SelectorType'
    ]);

myModule.config(function($routeProvider, $httpProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'app/selectorType/tmpl/selectorType.html',
            controller: 'SelectorTypeController',
            controllerAs: 'selectorType',
            requiresLogin: false
        })
        .when('/selectorType', {
            templateUrl: 'app/selectorType/tmpl/selectorType.html',
            controller: 'SelectorTypeController',
            controllerAs: 'selectorType',
            requiresLogin: false
        });

    // Loading interceptor
    $httpProvider.interceptors.push('loadingInterceptor');

});