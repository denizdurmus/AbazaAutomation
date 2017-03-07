angular.module('AutomationUI.SeleniumAction')
    .controller('SeleniumActionsController', SeleniumActionsController);

function SeleniumActionsController($compile, $rootScope, $scope, SeleniumActionService, ngDialog, DTOptionsBuilder,
    DTColumnBuilder, DTColumnDefBuilder) {
    var controller = this;

    controller.seleniumActionToUpdate = null;
    controller.seleniumActionUpdateDialog = null;
    controller.delete = deleteSeleniumAction;
    controller.showUpdate = showUpdate;
    controller.update = update;

    controller.dtInstance = {};
    controller.reloadData = reloadData;

    controller.dtOptions = DTOptionsBuilder.newOptions()
        .withOption('ajax', '/api/seleniumAction/dataTableQuery/')
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
        DTColumnBuilder.newColumn('description').withTitle('Description'),
        DTColumnBuilder.newColumn('javaMethod').withTitle('Java Method'),
        DTColumnDefBuilder.newColumnDef(4).withTitle('Edit').renderWith(function(data, type, full) {
            return '<div class="btn-group" role="group"> ' +
                        '<button type="button" class="btn btn-default" title="Update" ' +                            
                            'ng-click="seleniumActionsController.showUpdate(' + full.id + ')"> ' +
                            '<span class="glyphicon glyphicon-edit" aria-hidden="true"></span> ' +
                        '</button> ' +
                        '<button type="button" class="btn btn-default" title="Delete" ' +
                            'ng-click="seleniumActionsController.delete(' + full.id + ')"> ' +
                            '<span class="glyphicon glyphicon-trash" aria-hidden="true"></span> ' +
                        '</button> ' +
                    '</div>';
            })
    ];

    activate();

    function activate() {
        $scope.$on('seleniumAction.created', function(event, seleniumAction) {
            controller.reloadData();
        });

        $scope.$on('seleniumAction.created.error', function() {

        });

        $scope.$on('seleniumAction.updated', function() {
           controller.reloadData();
        });

        $scope.$on('seleniumAction.updated.error', function() {

        });

        $scope.$on('seleniumAction.deleted', function() {
            controller.reloadData();
        });

        $scope.$on('seleniumAction.deleted.error', function() {

        });
    }

    function reloadData() {
        controller.dtInstance.reloadData(false);
    }

    function deleteSeleniumAction(seleniumActionId) {
        ngDialog.openConfirm({template: 'seleniumActionDeleteConfirmDialog'})
        .then(function() {
            SeleniumActionService.delete(seleniumActionId).then(deleteSeleniumActionSuccessFn, deleteSeleniumActionErrorFn);
        });

        function deleteSeleniumActionSuccessFn(data, status, headers, config) {
            ngDialog.open({template: 'seleniumActionDeleteSuccessDialog'});
            $rootScope.$broadcast('seleniumAction.deleted');
        }

        function deleteSeleniumActionErrorFn(data, status, headers, config) {
            ngDialog.open({template: 'seleniumActionDeleteErrorDialog'});
            $rootScope.$broadcast('seleniumAction.deleted.error');
        }
    }

    function showUpdate(seleniumActionId) {
        SeleniumActionService.findById(seleniumActionId).then(findSeleniumActionSuccessFn, findSeleniumActionErrorFn);

        function findSeleniumActionSuccessFn(data, status, headers, config) {
            controller.seleniumActionToUpdate = data.data;
            controller.seleniumActionUpdateDialog = ngDialog.open({
                template: '/static/ui/app/seleniumAction/tmpl/update.html',
                scope: $scope
            });
        }

        function findSeleniumActionErrorFn(data, status, headers, config) {
            ngDialog.open({template: 'seleniumActionUpdateErrorDialog'});
        }
    }

    function update() {
        SeleniumActionService.update(controller.seleniumActionToUpdate).then(updateSeleniumActionSuccessFn,
            updateSeleniumActionErrorFn);

        ngDialog.close(controller.seleniumActionUpdateDialog.id);

        function updateSeleniumActionSuccessFn(data, status, headers, config) {
            ngDialog.open({template: 'seleniumActionUpdateSuccessDialog'});
            $rootScope.$broadcast('seleniumAction.updated');
        }

        function updateSeleniumActionErrorFn(data, status, headers, config) {
            ngDialog.open({template: 'seleniumActionUpdateErrorDialog'});
            $rootScope.$broadcast('seleniumAction.updated.error');
        }
    }

}
