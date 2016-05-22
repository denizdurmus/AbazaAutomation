angular.module('AutomationUI.SelectorType')
    .directive('selectortypes', SelectorTypes);

function SelectorTypes() {
    var directive = {
        controller: 'SelectorTypesController',
        controllerAs: 'selectorTypesController',
        restrict: 'E',
        scope: {
            posts: '='
        },
        templateUrl: '/static/ui/app/selectorType/tmpl/selectorTypes.html'
    };

    return directive;
}

