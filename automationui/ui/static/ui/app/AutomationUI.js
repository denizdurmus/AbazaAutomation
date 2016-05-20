var myModule = angular.module('AutomationUI',
    [
        'ngRoute',
        'angular-jwt',
        'angular-storage',
        'ngAnimate',
        'ngMessages',
        'ngDialog',
        'AutomationUI.Common',
        'AutomationUI.Login',
        'AutomationUI.SelectorType'
    ]);

myModule.config(function($routeProvider, $httpProvider, jwtInterceptorProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '/static/ui/app/common/tmpl/index.html',
            requiresLogin: true
        })
        .when('/login', {
            templateUrl: '/static/ui/app/login/tmpl/login.html',
            controller: 'LoginController',
            controllerAs: 'loginController',
            requiresLogin: false
        })
        .when('/selectorType', {
            templateUrl: '/static/ui/app/selectorType/tmpl/selectorTypeHome.html',
            controller: 'SelectorTypeController',
            controllerAs: 'selectorTypeController',
            requiresLogin: true
        });

    //$httpProvider.interceptors.push('loadingInterceptor');
    $httpProvider.interceptors.push('authResponseInterceptor');
    $httpProvider.interceptors.push('jwtInterceptor');

    jwtInterceptorProvider.tokenGetter = function(store) {
      return store.get('userToken');
    };
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

myModule.factory('authResponseInterceptor', function($q) {
    var authResponseInterceptor = {
        responseError: function(response) {
            if (response.status === 401 || response.status === 403) {
                ngDialog.open({
                    template: '<p>my template</p>',
                    plain: true
                });
            }
            return $q.reject(response);
        }
    };
    return authResponseInterceptor;
});

myModule.run(function($rootScope, LoadingService, AuthenticationService) {
    /*
    $rootScope.$on('$routeChangeStart', function(e, curr, prev) {
        LoadingService.setLoading(true);
    });

    $rootScope.$on('$routeChangeSuccess', function(e, curr, prev) {
        LoadingService.setLoading(false);
    });
    */

    $rootScope.$on('$locationChangeStart', function() {
      AuthenticationService.authenticateUser();
    });
});
