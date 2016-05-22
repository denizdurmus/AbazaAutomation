angular.module('AutomationUI.Common')
    .service('AuthenticationService', function($http, $rootScope, store, $location, jwtHelper, ngDialog) {
        var baseUrl = 'http://localhost:8000';

        function changeUser(user) {
            angular.extend(currentUser, user);
        }

        function urlBase64Decode(str) {
            var output = str.replace('-', '+').replace('_', '/');
            switch (output.length % 4) {
                case 0:
                    break;
                case 2:
                    output += '==';
                    break;
                case 3:
                    output += '=';
                    break;
                default:
                    throw 'Illegal base64url string!';
            }
            return window.atob(output);
        }

        function getUserFromToken() {
            var token = store.token;
            var user = {};
            if (typeof token !== 'undefined') {
                var encoded = token.split('.')[1];
                user = JSON.parse(urlBase64Decode(encoded));
            }
            return user;
        }

        var currentUser = getUserFromToken();

        return {
            authenticateUser: function() {
              var token = store.get('id_token');
              if (!token || jwtHelper.isTokenExpired(token)) {
                $location.path('/login');
              }
            },
            save: function(data) {
                $http.post(baseUrl + '/signin', data)
                  .success(success)
                  .error(error);
            },
            signin: function(data) {
                $http.post(baseUrl + '/api-token-auth/', data)
                .success(function(res) {
                    store.set('userToken', res.token);
                    store.set('id_token', res.token);
                    store.set('profile', data.username);
                    $rootScope.$broadcast('onCurrentUserId', data.username);
                    $location.path('/');
                })
                .error(function() {
                    ngDialog.open({template: 'loginErrorDialog'});    
                });
            },
            getCurrentUser: function() {
                return store.get('profile');
            },
            logout: function() {
                store.remove('id_token');
                store.remove('profile');
                store.remove('userToken');
                $rootScope.$broadcast('onCurrentUserId', null);
                $location.path('/login');
            }
        };
    });
