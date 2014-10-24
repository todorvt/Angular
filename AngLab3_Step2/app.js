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

    app.controller('TabController', function(){
        this.tab = 1;
        this.isSet = function(checkTab) {
            return this.tab === checkTab;
        };

        this.setTab = function(activeTab) {
            this.tab = activeTab;
        };
    });

    app.controller("ReviewController", function(){

        this.review = {};

        this.addReview = function(product){
            this.review.createdOn = Date.now();
            product.reviews.push(this.review);
            this.review = {};
        };

    });

})();