angular.module('AutomationUI.ActionType')
    .controller('ActionTypesController', ActionTypesController);

function ActionTypesController($rootScope, $scope, ActionTypeService, ngDialog, DTOptionsBuilder, DTColumnBuilder) {
    var controller = this;

    controller.actionTypes = [];
    controller.actionTypeToUpdate = null;
    controller.actionTypeUpdateDialog = null;
    controller.delete = deleteActionType;
    controller.showUpdate = showUpdate;
    controller.update = update;

    controller.dtOptions = DTOptionsBuilder.newOptions()
        .withOption('ajax', '/api/actionType/dataTableQuery')
        .withDataProp('results')
        .withOption('processing', true)
        .withOption('serverSide', true)
        .withOption('ordering', false)
        .withPaginationType('full_numbers');

    controller.dtColumns = [
        DTColumnBuilder.newColumn('id').withTitle('ID'),
        DTColumnBuilder.newColumn('name').withTitle('Name')
    ];

    activate();

    function activate() {
        $scope.$on('actionType.created', function(event, actionType) {
            controller.queryAll();
        });

        $scope.$on('actionType.created.error', function() {

        });

        $scope.$on('actionType.updated', function() {
           controller.queryAll();
        });

        $scope.$on('actionType.updated.error', function() {

        });

        $scope.$on('actionType.deleted', function() {
            controller.queryAll();
        });

        $scope.$on('actionType.deleted.error', function() {

        });
    }

    function deleteActionType(actionTypeId) {
        ngDialog.openConfirm({template: 'actionTypeDeleteConfirmDialog'})
        .then(function() {
            ActionTypeService.delete(actionTypeId).then(deleteActionTypeSuccessFn, deleteActionTypeErrorFn);
        });

        function deleteActionTypeSuccessFn(data, status, headers, config) {
            ngDialog.open({template: 'actionTypeDeleteSuccessDialog'});
            $rootScope.$broadcast('actionType.deleted');
        }

        function deleteActionTypeErrorFn(data, status, headers, config) {
            ngDialog.open({template: 'actionTypeDeleteErrorDialog'});
            $rootScope.$broadcast('actionType.deleted.error');
        }
    }

    function showUpdate(actionTypeId) {
        ActionTypeService.findById(actionTypeId).then(findActionTypeSuccessFn, findActionTypeErrorFn);

        function findActionTypeSuccessFn(data, status, headers, config) {
            controller.actionTypeToUpdate = data.data;
            controller.actionTypeUpdateDialog = ngDialog.open({
                template: '/static/ui/app/actionType/tmpl/update.html',
                scope: $scope
            });
        }

        function findActionTypeErrorFn(data, status, headers, config) {
            ngDialog.open({template: 'actionTypeUpdateErrorDialog'});
        }
    }

    function update() {
        ActionTypeService.update(controller.actionTypeToUpdate).then(updateActionTypeSuccessFn,
            updateActionTypeErrorFn);

        ngDialog.close(controller.actionTypeUpdateDialog.id);

        function updateActionTypeSuccessFn(data, status, headers, config) {
            ngDialog.open({template: 'actionTypeUpdateSuccessDialog'});
            $rootScope.$broadcast('actionType.updated');
        }

        function updateActionTypeErrorFn(data, status, headers, config) {
            ngDialog.open({template: 'actionTypeUpdateErrorDialog'});
            $rootScope.$broadcast('actionType.updated.error');
        }
    }

    controller.actionTypeToUpdateHasElementChanged = function() {
        if (controller.actionTypeToUpdate.hasElement === '0') {
            controller.actionTypeToUpdate.hasInput = '0';
        }
    };

}
