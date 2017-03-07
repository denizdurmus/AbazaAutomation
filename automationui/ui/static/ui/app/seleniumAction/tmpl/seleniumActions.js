angular.module('AutomationUI.SeleniumAction')
    .directive('seleniumactions', ActionTypes);

function ActionTypes() {
    var directive = {
        controller: 'SeleniumActionsController',
        controllerAs: 'seleniumActionsController',
        restrict: 'E',
        scope: {
            selectortypes: '='
        },
        templateUrl: '/static/ui/app/seleniumAction/tmpl/seleniumActions.html'
    };

    return directive;
}
