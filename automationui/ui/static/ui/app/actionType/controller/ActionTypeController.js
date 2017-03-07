angular.module('AutomationUI.ActionType')
    .controller('ActionTypeController', ActionTypeController);

function ActionTypeController($rootScope, $scope, ActionTypeService, SeleniumActionService) {
    var controller = this,
        seleniumActions,
        seleniumActionsLoaded = false;

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
        }

        function createActionTypeErrorFn(data, status, headers, config) {
            $rootScope.$broadcast('actionType.created.error');            
        }
    };

    controller.actionTypeToAddHasElementChanged = function() {
        if (controller.actionTypeToAdd.hasElement === '0') {
            controller.actionTypeToAdd.hasInput = '0';
        }
    };

    controller.getSeleniumActions = function() {
        if (!controller.seleniumActionsLoaded) {
            SeleniumActionService.findAll().then(seleniumActionsSuccessFn, seleniumActionsErrorFn);
            controller.seleniumActionsLoaded = true;          
        }

        return controller.seleniumActions;

        function seleniumActionsSuccessFn(data, status, headers, config) {
            controller.seleniumActions = data.data.results;            
        }

        function seleniumActionsErrorFn(data, status, headers, config) {
            
        }
    }
}
