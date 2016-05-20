angular.module('AutomationUI.SelectorType')
    .controller('SelectorTypeController', SelectorTypeController);

function SelectorTypeController($rootScope, $scope, SelectorTypeService, $modal) {
    var controller = this,
        selectorTypeToAdd = {};

    controller.create = function() {
        var selectorTypeToAdd = controller.selectorTypeToAdd;

        $rootScope.$broadcast('selectorType.created', selectorTypeToAdd);

        $scope.closeThisDialog();

        SelectorTypeService.create(selectorTypeToAdd).then(createSelectorTypeSuccessFn, createSelectorTypeErrorFn);

        function createSelectorTypeSuccessFn(data, status, headers, config) {
            $modal({
                title: 'Succes',
                content: 'SelectorType is created successfully.',
                show: true
            });
        }

        function createSelectorTypeErrorFn(data, status, headers, config) {
            $rootScope.$broadcast('selectorType.created.error');
            $modal({
                title: 'Error',
                content: 'An error occured while saving selectorType.',
                show: true
            });
        }
    };
}
