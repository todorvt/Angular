// Code goes here

(function() {
    var app = angular.module('gemStore', []);

    app.controller('GalleryController', function() {
        this.imageIndex = 0;
        this.currentImageChange = function(imageNumber) {
            console.log(imageNumber);
            this.imageIndex = imageNumber || 0;
        };
    });

    app.controller('StoreController', ['$http', function($http){
        var store = this;
        store.products = [];
        $http.get('products.json').success(function(data){
            store.products = data;
        });
        //this.products = gems;
    }]);
 })();