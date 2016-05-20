angular.module('AutomationUI.SelectorType')
    .directive('selectortypes', SelectorTypes)
    .controller('SelectorTypesController', SelectorTypesController);

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

function SelectorTypesController($scope, SelectorTypeService) {
    var controller = this;

    controller.selectorTypes = [];

    activate();

    function activate() {
        SelectorTypeService.findAll().then(postsSuccessFn, postsErrorFn);

        $scope.$on('selectorType.created', function(event, selectorType) {
            controller.selectorTypes.unshift(selectorType);
        });

        $scope.$on('selectorType.created.error', function() {
            controller.selectorTypes.shift();
        });

        function postsSuccessFn(data, status, headers, config) {
            controller.selectorTypes = data.data.results;
        }


        function postsErrorFn(data, status, headers, config) {

        }
    }

    controller.delete = function(selectorTypeId, $confirm) {
        $confirm({text: 'Are you sure you want to delete?'})
        .then(function() {
            SelectorTypeService.delete(selectorTypeId);
        });
    };
}
