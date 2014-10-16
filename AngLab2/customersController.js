function customersController($scope,$http) {
    $http.get("customers.json")
        .success(function(response) {$scope.names = response;});
}