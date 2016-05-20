angular.module('AutomationUI.Common')
    .controller('MainController', MainController);

function MainController($scope, $location, AuthenticationService) {
    var main = this;
    main.currentUser = null;

    $scope.$on('onCurrentUserId', function(ctx, id) {
        main.currentUser = AuthenticationService.getCurrentUser();
    });

    main.logout = function() {
        AuthenticationService.logout();
        main.currentUser = null;
    };
}
