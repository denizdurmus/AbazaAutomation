angular.module('AutomationUI.SelectorType')
    .controller('SelectorTypesController', SelectorTypesController);

function SelectorTypesController($scope, SelectorTypeService, ngDialog) {
    var controller = this;

    controller.selectorTypes = [];

    activate();

    function activate() {
        SelectorTypeService.findAll().then(postsSuccessFn, postsErrorFn);

        $scope.$on('selectorType.created', function(event, selectorType) {
            controller.selectorTypes.unshift(selectorType);
        });

        $scope.$on('selectorType.created.error', function() {

        });

        function postsSuccessFn(data, status, headers, config) {
            controller.selectorTypes = data.data.results;
        }


        function postsErrorFn(data, status, headers, config) {

        }
    }

    controller.delete = function(selectorTypeId) {
        ngDialog.openConfirm({template: 'selectorTypeDeleteConfirmDialog'})
        .then(function() {
            SelectorTypeService.delete(selectorTypeId).then(deleteSelectorTypeSuccessFn, deleteSelectorTypeErrorFn);;
        });

        function deleteSelectorTypeSuccessFn(data, status, headers, config) {
            ngDialog.open({template: 'selectorTypeDeleteSuccessDialog'});
        }

        function deleteSelectorTypeErrorFn(data, status, headers, config) {
            ngDialog.open({template: 'selectorTypeDeleteErrorDialog'});
        }
    };
        
}
