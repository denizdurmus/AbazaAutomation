angular.module('AutomationUI.ActionType')
    .controller('ActionTypesController', ActionTypesController);

function ActionTypesController($compile, $rootScope, $scope, ActionTypeService, ngDialog, DTOptionsBuilder,
    DTColumnBuilder, DTColumnDefBuilder) {
    var controller = this;

    controller.actionTypeToUpdate = null;
    controller.actionTypeUpdateDialog = null;
    controller.delete = deleteActionType;
    controller.showUpdate = showUpdate;
    controller.update = update;

    controller.dtInstance = {};
    controller.reloadData = reloadData;

    controller.dtOptions = DTOptionsBuilder.newOptions()
        .withOption('ajax', '/api/actionType/dataTableQuery/')
        .withDataProp('data')
        .withOption('processing', true)
        .withOption('serverSide', true)
        .withOption('ordering', false)
        .withOption('createdRow', function(row, data, dataIndex) {
            $compile(angular.element(row).contents())($scope);
        })
        .withPaginationType('full_numbers');

    controller.dtColumns = [
        DTColumnBuilder.newColumn('id').withTitle('ID'),
        DTColumnBuilder.newColumn('name').withTitle('Name'),
        DTColumnBuilder.newColumn('hasElement').withTitle('Has Element').renderWith(function(data, type, full) {
            var ngModel = 'hasElement_' + full.id,
                initStr = ngModel + '=\'' + data + '\'';

            return '<input type="checkbox" ng-model="' + ngModel + '" ng-init="' + initStr + '" ' +
                        'bs-switch switch-on-text="YES" switch-off-text="NO" switch-active="false" ' +
                        'ng-true-value="\'1\'" ng-false-value="\'0\'">';
            }),
        DTColumnBuilder.newColumn('hasInput').withTitle('Has Input').renderWith(function(data, type, full) {
            var ngModel = 'hasInput_' + full.id,
                initStr = ngModel + '=\'' + data + '\'';

            return '<input type="checkbox" ng-model="' + ngModel + '" ng-init="' + initStr + '" ' +
                        'bs-switch switch-on-text="YES" switch-off-text="NO" switch-active="false" ' +
                        'ng-true-value="\'1\'" ng-false-value="\'0\'">';
            }),
        DTColumnDefBuilder.newColumnDef(4).withTitle('Edit').renderWith(function(data, type, full) {
            return '<div class="btn-group" role="group"> ' +
                        '<button type="button" class="btn btn-default" ' +
                            'ng-click="actionTypesController.showUpdate(' + full.id + ')"> ' +
                            '<span class="glyphicon glyphicon-edit" aria-hidden="true"></span> ' +
                        '</button> ' +
                        '<button type="button" class="btn btn-default" ' +
                            'ng-click="actionTypesController.delete(' + full.id + ')"> ' +
                            '<span class="glyphicon glyphicon-trash" aria-hidden="true"></span> ' +
                        '</button> ' +
                    '</div>';
            })
    ];

    activate();

    function activate() {
        $scope.$on('actionType.created', function(event, actionType) {
            controller.reloadData();
        });

        $scope.$on('actionType.created.error', function() {

        });

        $scope.$on('actionType.updated', function() {
           controller.reloadData();
        });

        $scope.$on('actionType.updated.error', function() {

        });

        $scope.$on('actionType.deleted', function() {
            controller.reloadData();
        });

        $scope.$on('actionType.deleted.error', function() {

        });
    }

    function reloadData() {
        controller.dtInstance.reloadData(false);
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
