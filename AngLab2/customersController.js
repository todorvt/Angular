(function() {
    var app = angular.module("myApp", []);
    app.controller("customersController", ['$scope', '$http', function($scope, $http) {
        this.viewInfo = function(obj){
            var ind = this.names.indexOf(obj);
            this.names[ind].showInfo = !this.names[ind].showInfo;
        }
        curCtrlNames = angular.bind(this, function (val) {
            this.names = val;
        });
        $http.get("customers.json").success(function( response) {
            curCtrlNames(response);
        })
    }]);
})();