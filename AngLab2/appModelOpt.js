angular.module('optionsExample', [])
    .controller('ExampleController', ['$scope', function($scope) {
        $scope.user = { name: 'Your name', city: 'Your city', data: '' };

        $scope.cancel = function (e) {
            if (e.keyCode == 27) {
                $scope.userForm.userName.$rollbackViewValue();
            }
        };
    }]);
