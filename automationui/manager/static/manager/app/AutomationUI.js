var myModule = angular.module('AutomationUI',
    [
        'ngRoute',
        'ngAnimate',
        'ngMessages',
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

    // Auth0 Authentication
    authProvider.init({
        domain: 'angello.auth0.com',
        clientID: 'Fq8hKAkghu45WpnqrYTc6dbvXhBUdP7l'
    });

    // Loading interceptor
    $httpProvider.interceptors.push('loadingInterceptor');

});