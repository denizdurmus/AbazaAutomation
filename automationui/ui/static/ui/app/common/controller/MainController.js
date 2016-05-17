angular.module('AutomationUI.Common')
    .controller('MainController', MainController);

function MainController($scope, $location) {
    var main = this;
    $location.path('/index');
}
