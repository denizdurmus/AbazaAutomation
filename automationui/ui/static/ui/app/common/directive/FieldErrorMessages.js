angular.module('AutomationUI.Common')
    .directive('haserrorfor', hasErrorFor)
    .directive('showerrorfor', showerrorfor);

function hasErrorFor() {
    var directive = {
        restrict: 'A',
        scope: {
            haserrorfor: '='
        },
        link: function(scope, element, attrs) {
            scope.$watch('haserrorfor.$$parentForm.$submitted', function(newValue, oldValue, srcScope) {
                if (newValue === true && scope.haserrorfor.$invalid === true) {
                    element.addClass('has-error');
                }
            });

            scope.$watch('haserrorfor.$touched', function(newValue, oldValue, srcScope) {
                if (newValue === true && scope.haserrorfor.$invalid === true) {
                    element.addClass('has-error');
                }
            });

            scope.$watch('haserrorfor.$invalid', function(newValue, oldValue, srcScope) {
                if (newValue === false) {
                    element.removeClass('has-error');
                }

                if (newValue === true && scope.haserrorfor.$touched === true) {
                    element.addClass('has-error');
                }
            });
        }
    };

    return directive;
}

function showerrorfor() {
    var directive = {
        restrict: 'A',
        scope: {
            showerrorfor: '='
        },
        link: function(scope, element, attrs) {
            element.addClass('ng-hide');

            scope.$watch('showerrorfor.$$parentForm.$submitted', function(newValue, oldValue, srcScope) {
                if (newValue === true && scope.showerrorfor.$invalid === true) {
                    element.removeClass('ng-hide');
                }
            });

            scope.$watch('showerrorfor.$touched', function(newValue, oldValue, srcScope) {
                if (newValue === true && scope.showerrorfor.$invalid === true) {
                    element.removeClass('ng-hide');
                }
            });

            scope.$watch('showerrorfor.$invalid', function(newValue, oldValue, srcScope) {
                if (newValue === false) {
                    element.addClass('ng-hide');
                }

                if (newValue === true && scope.showerrorfor.$touched === true) {
                    element.removeClass('ng-hide');
                }
            });
        }
    };

    return directive;
}
