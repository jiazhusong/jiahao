///**
// * Created by jiahao on 2017-03-12.
// */
//(function(angular){
//    var app=angular.module("moviecat",["ngRoute",
//        "moviecat.home_page",
//        "moviecat.movie_list",
//        "moviecat.movie_detail",
//        "moviecat.movie_active"]);
//    app.config(["$routeProvider",function($routeProvider){
//        $routeProvider.otherwise({redirectTo:"home_page"})
//    }])
//    app.controller("maincontroller"["$scope","$route",function($scope,$route){
//        $scope.query="";
//        $scope.search=function(){
//            $route.updateParams({q:$scope.query,movietype:"search"})
//        };
//    }])
//})(angular);

(function (angular) {
    "use strict";

    // start your ride

    // 1.������ģ��
    var app = angular.module('moviecat',[
        'ngRoute',
        'moviecat.home_page',
        'moviecat.movie_detail',
        'moviecat.movie_list',
        'moviecat.auto_active'
    ]);
    // ����·��
    app.config(['$routeProvider',function($routeProvider){
        $routeProvider.otherwise({redirectTo:'/home_page'});
    }]);

    // ����������
    app.controller('mainController',[
        '$scope',
        '$route',function($scope,$route){
            $scope.query = '';
            $scope.search=function(){
                $route.updateParams({q:$scope.query,movietype:'search'});
            }
        }]);
})(angular);
