angular.module('AutomationUI.Login')
    .controller('LoginController', LoginController);

function LoginController($rootScope, $scope, $location, store, AuthenticationService) {
    var controller = this;

    $scope.signin = function() {
        if (!$scope.loginForm.$valid) {
            return false;
        }

        var formData = {
            username: $scope.username,
            password: $scope.password
        };

        AuthenticationService.signin(formData);
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
        AuthenticationService.logout();
    };

    controller.fieldHasError = function(form, field) {
        return (field.$invalid && field.$touched) || form.$submitted;
    };
}
