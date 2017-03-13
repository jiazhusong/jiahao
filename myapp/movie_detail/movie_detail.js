/**
 * Created by jiahao on 2017-03-13.
 */
(function (angular) {
    var app=angular.module("moviecat.movie_detail",
        ["ngRoute"])
    app.config(["$routeProvider",function($routeProvider){
        $routeProvider.when("/details/:id",{
            templateUrl:"movie_detail/view.html",
            controller:"movieController"
        })
    }]);

    app.controller("movieController",["$scope",
        "$location","$routeParams","MyHttp",
        function($scope,$location,$routeParams,MyHttp){
            console.log("fffffffffffff");
            MyHttp.jsonp('http://api.douban.com/v2/movie/subject/'+$routeParams.id,{},function(data){

            $scope.data=data;
            $scope.$apply();
        })
    }]);
})(angular)
