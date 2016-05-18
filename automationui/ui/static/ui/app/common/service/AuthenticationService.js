angular.module('AutomationUI.Common')
    .service('AuthenticationService', function($http, store, $location, jwtHelper) {
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
              } else {
                var profile = store.get('profile');
                auth.authenticate(profile, token);
                $rootScope.$broadcast('onCurrentUserId', profile.user_id);
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
                    $location.path('/index');
                  })
                  .error(function() {
                    alert('Failed to signin');
                    $rootScope.error = 'Failed to signin';
                  });
            },
            me: function(success, error) {
                $http.get(baseUrl + '/me').success(success).error(error);
            },
            logout: function(success) {
                changeUser({});
                delete store.token;
                success();
            }
        };
    });
