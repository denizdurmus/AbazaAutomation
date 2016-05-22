angular.module('AutomationUI.SelectorType')
    .controller('SelectorTypeController', SelectorTypeController);

function SelectorTypeController($rootScope, $scope, SelectorTypeService, ngDialog) {
    var controller = this,
        selectorTypeToAdd = {};

    controller.create = function() {
        var selectorTypeToAdd = controller.selectorTypeToAdd;        

        $scope.closeThisDialog();

        SelectorTypeService.create(selectorTypeToAdd).then(createSelectorTypeSuccessFn, createSelectorTypeErrorFn);

        function createSelectorTypeSuccessFn(data, status, headers, config) {
            selectorTypeToAdd.id = data.data.id;
            $rootScope.$broadcast('selectorType.created', selectorTypeToAdd);
            ngDialog.open({template: 'selectorTypeCreateSuccessDialog'});
        }

        function createSelectorTypeErrorFn(data, status, headers, config) {
            $rootScope.$broadcast('selectorType.created.error');
            ngDialog.open({template: 'selectorTypeCreateErrorDialog'});
        }
    };    
}
