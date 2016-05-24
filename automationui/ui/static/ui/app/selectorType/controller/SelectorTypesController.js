angular.module('AutomationUI.SelectorType')
    .controller('SelectorTypesController', SelectorTypesController);

function SelectorTypesController($rootScope, $scope, SelectorTypeService, ngDialog) {
    var controller = this;

    controller.selectorTypes = [];
    controller.selectorTypeToUpdate = null;
    controller.selectorTypeUpdateDialog = null;
    controller.queryAll = queryAll;
    controller.delete = deleteSelectorType;
    controller.showUpdate = showUpdate;
    controller.update = update;

    activate();

    function activate() {
        $scope.$on('selectorType.created', function(event, selectorType) {
            controller.queryAll();
        });

        $scope.$on('selectorType.created.error', function() {

        });

        $scope.$on('selectorType.updated', function() {
           controller.queryAll();
        });

        $scope.$on('selectorType.updated.error', function() {

        });

        $scope.$on('selectorType.deleted', function() {
            controller.queryAll();
        });

        $scope.$on('selectorType.deleted.error', function() {

        });

        controller.queryAll();
    }

    function queryAll() {
        SelectorTypeService.findAll().then(selectorTypeSuccessFn, selectorTypeErrorFn);

        function selectorTypeSuccessFn(data, status, headers, config) {
            controller.selectorTypes = data.data.results;
        }

        function selectorTypeErrorFn(data, status, headers, config) {

        }
    }

    function deleteSelectorType(selectorTypeId) {
        ngDialog.openConfirm({template: 'selectorTypeDeleteConfirmDialog'})
        .then(function() {
            SelectorTypeService.delete(selectorTypeId).then(deleteSelectorTypeSuccessFn, deleteSelectorTypeErrorFn);
        });

        function deleteSelectorTypeSuccessFn(data, status, headers, config) {
            ngDialog.open({template: 'selectorTypeDeleteSuccessDialog'});
            $rootScope.$broadcast('selectorType.deleted');
        }

        function deleteSelectorTypeErrorFn(data, status, headers, config) {
            ngDialog.open({template: 'selectorTypeDeleteErrorDialog'});
            $rootScope.$broadcast('selectorType.deleted.error');
        }
    }

    function showUpdate(selectorTypeId) {
        SelectorTypeService.findById(selectorTypeId).then(findSelectorTypeSuccessFn, findSelectorTypeErrorFn);

        function findSelectorTypeSuccessFn(data, status, headers, config) {
            controller.selectorTypeToUpdate = data.data;
            controller.selectorTypeUpdateDialog = ngDialog.open({
                template: '/static/ui/app/selectorType/tmpl/update.html',
                scope: $scope
            });
        }

        function findSelectorTypeErrorFn(data, status, headers, config) {
            ngDialog.open({template: 'selectorTypeUpdateErrorDialog'});
        }
    }

    function update() {
        SelectorTypeService.update(controller.selectorTypeToUpdate).then(updateSelectorTypeSuccessFn,
            updateSelectorTypeErrorFn);

        ngDialog.close(controller.selectorTypeUpdateDialog.id);

        function updateSelectorTypeSuccessFn(data, status, headers, config) {
            ngDialog.open({template: 'selectorTypeUpdateSuccessDialog'});
            $rootScope.$broadcast('selectorType.updated');
        }

        function updateSelectorTypeErrorFn(data, status, headers, config) {
            ngDialog.open({template: 'selectorTypeUpdateErrorDialog'});
            $rootScope.$broadcast('selectorType.updated.error');
        }
    }

}
