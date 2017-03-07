angular.module('AutomationUI.SeleniumAction')
    .controller('SeleniumActionController', SeleniumActionController);

function SeleniumActionController($rootScope, $scope, SeleniumActionService, ngDialog) {
    var controller = this;

    controller.seleniumActionToAdd = {hasElement: '0', hasInput: '0'};

    controller.create = function() {
        if ($scope.seleniumActionCreateForm.$invalid) {
            return false;
        }

        var seleniumActionToAdd = controller.seleniumActionToAdd;

        $scope.closeThisDialog();

        SeleniumActionService.create(seleniumActionToAdd).then(createSeleniumActionSuccessFn, createSeleniumActionErrorFn);

        function createSeleniumActionSuccessFn(data, status, headers, config) {
            seleniumActionToAdd.id = data.data.id;
            $rootScope.$broadcast('seleniumAction.created', seleniumActionToAdd);
            ngDialog.open({template: 'seleniumActionCreateSuccessDialog'});
        }

        function createSeleniumActionErrorFn(data, status, headers, config) {
            $rootScope.$broadcast('seleniumAction.created.error');
            ngDialog.open({template: 'seleniumActionCreateErrorDialog'});
        }
    };
}
