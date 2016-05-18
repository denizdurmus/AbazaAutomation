angular.module('AutomationUI.Login')
    .controller('LoginController', LoginController);

function LoginController($rootScope, $scope, $location, store, AuthenticationService) {
    $scope.signin = function() {
        var formData = {
            username: $scope.username,
            password: $scope.password
        };

        AuthenticationService.signin(formData, function(res) {
            if (res.type == false) {
                alert(res.data);
            } else {
                store.token = res.token;
                $location.path('/index');
            }
        }, function() {
            $rootScope.error = 'Failed to signin';
        });
    };

    $scope.signup = function() {
        var formData = {
            email: $scope.email,
            password: $scope.password
        };

        AuthenticationService.save(formData, function(res) {
            if (res.type == false) {
                alert(res.data);
            } else {
               store.token = res.data.token;
               $location.path('/index');
            }
        }, function() {
            $rootScope.error = 'Failed to signup';
        });
    };

    $scope.me = function() {
        AuthenticationService.me(function(res) {
            $scope.myDetails = res;
        }, function() {
            $rootScope.error = 'Failed to fetch details';
        });
    };

    $scope.logout = function() {
        AuthenticationService.logout(function() {
            $location.path('/login');
        }, function() {
            alert('Failed to logout!');
        });
    };
    $scope.token = store.token;
}
