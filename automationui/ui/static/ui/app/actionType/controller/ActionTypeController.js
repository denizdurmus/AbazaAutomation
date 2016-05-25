angular.module('AutomationUI.ActionType')
    .controller('ActionTypeController', ActionTypeController);

function ActionTypeController($rootScope, $scope, ActionTypeService, ngDialog) {
    var controller = this;

    controller.actionTypeToAdd = {hasElement: '0', hasInput: '0'};

    controller.create = function() {
        if ($scope.actionTypeCreateForm.$invalid) {
            return false;
        }

        var actionTypeToAdd = controller.actionTypeToAdd;

        $scope.closeThisDialog();

        ActionTypeService.create(actionTypeToAdd).then(createActionTypeSuccessFn, createActionTypeErrorFn);

        function createActionTypeSuccessFn(data, status, headers, config) {
            actionTypeToAdd.id = data.data.id;
            $rootScope.$broadcast('actionType.created', actionTypeToAdd);
            ngDialog.open({template: 'actionTypeCreateSuccessDialog'});
        }

        function createActionTypeErrorFn(data, status, headers, config) {
            $rootScope.$broadcast('actionType.created.error');
            ngDialog.open({template: 'actionTypeCreateErrorDialog'});
        }
    };

    controller.actionTypeToAddHasElementChanged = function() {
        if (controller.actionTypeToAdd.hasElement === '0') {
            controller.actionTypeToAdd.hasInput = '0';
        }
    };
}
