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
        DTColumnBuilder.newColumn(4).withTitle('Selenium Action').renderWith(function(data, type, full) {
            return full.seleniumAction.name;
        }),
        DTColumnDefBuilder.newColumnDef(5).withTitle('Edit').renderWith(function(data, type, full) {
            return '<div class="btn-group" role="group"> ' +
                        '<button type="button" class="btn btn-default" title="Update" ' +                            
                            'ng-click="actionTypesController.showUpdate(' + full.id + ')"> ' +
                            '<span class="glyphicon glyphicon-edit" aria-hidden="true"></span> ' +
                        '</button> ' +
                        '<button type="button" class="btn btn-default" title="Delete" ' +
                            'ng-click="actionTypesController.delete(' + full.id + ')"> ' +
                            '<span class="glyphicon glyphicon-trash" aria-hidden="true"></span> ' +
                        '</button> ' +
                    '</div>';
            })
    ];

    activate();

    function activate() {
        $scope.$on('actionType.created', function(event, actionType) {
            ngDialog.open({template: 'actionTypeCreateSuccessDialog'});
            controller.reloadData();
        });

        $scope.$on('actionType.created.error', function() {
            ngDialog.open({template: 'actionTypeCreateErrorDialog'});
        });

        $scope.$on('actionType.updated', function() {
           ngDialog.open({template: 'actionTypeUpdateSuccessDialog'});
           controller.reloadData();
        });

        $scope.$on('actionType.updated.error', function() {
            ngDialog.open({template: 'actionTypeUpdateErrorDialog'});
        });

        $scope.$on('actionType.deleted', function() {
            ngDialog.open({template: 'actionTypeDeleteSuccessDialog'});
            controller.reloadData();
        });

        $scope.$on('actionType.deleted.error', function() {
            ngDialog.open({template: 'actionTypeDeleteSuccessDialog'});
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
            $rootScope.$broadcast('actionType.updated');
        }

        function updateActionTypeErrorFn(data, status, headers, config) {
            $rootScope.$broadcast('actionType.updated.error');
        }
    }

    controller.actionTypeToUpdateHasElementChanged = function() {
        if (controller.actionTypeToUpdate.hasElement === '0') {
            controller.actionTypeToUpdate.hasInput = '0';
        }
    };

}
