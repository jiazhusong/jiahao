/**
 * Created by jiahao on 2017-03-12.
 */
(function(angular){
    var app=angular.module("moviecat.home_page",["ngRoute"]);
    app.config(["$routeProvider",function($routeProvider){
        $routeProvider.when("/home_page",{
            controller:"home_pageController",
            templateUrl:"home_page/view.html"
        })
    }])
    app.controller("home_pageController",["$scope",function($scope){

    }])
})(angular)