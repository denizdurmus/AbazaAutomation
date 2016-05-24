angular.module('AutomationUI.ActionType')
    .directive('actiontypes', ActionTypes);

function ActionTypes() {
    var directive = {
        controller: 'ActionTypesController',
        controllerAs: 'actionTypesController',
        restrict: 'E',
        scope: {
            selectortypes: '='
        },
        templateUrl: '/static/ui/app/actionType/tmpl/actionTypes.html'
    };

    return directive;
}
