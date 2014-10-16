(function() {
    var app = angular.module("myApp", []);

    app.controller("myCtrl", ['$scope', function($scope) {
        this.firstName = "John";
        this.lastName = "Doe";
        this.fullName = function() {
            return this.firstName + " " + this.lastName;
        };
        }]);
    app.filter('reverse', function() {
        return function(input, uppercase) {
            input = input || '';
            var out = "";
            for (var i = 0; i < input.length; i++) {
                out = input.charAt(i) + out;
            }
            // conditional based on optional argument
            if (uppercase) {
                out = out.toUpperCase();
            }
            return out;
        };
    });
})();