/**
 * Created by jiahao on 2017-03-12.
 */
(function(angular){
    var app=angular.module("moviecat.movie_list",["ngRoute","moviecat.http_jsonp"]);
    app.config(["$routeProvider",function($routeProvider){
        $routeProvider.when("/:movietype/:page?",{
            controller:"movie_listController",
            templateUrl:"movie_list/view.html"
        })
    }]);

    app.controller("movie_listController",["$scope","$http","$routeParams","$route","MyHttp",
    function($scope,$http,$routeParams,$route,MyHttp){
        console.log($routeParams);
        var pageSize=5;
        $scope.page=($routeParams.page-0)||1;
        var start=($scope.page-1)*pageSize;
        $scope.allCount=0;
        $scope.loading=true;
        MyHttp.jsonp('http://api.douban.com/v2/movie/'+$routeParams.movietype,{
            start:start,count:pageSize,q:$routeParams.q
        },function(data){
            $scope.list=data.subjects;
            $scope.allCount=data.total;
            $scope.allPage=Math.ceil($scope.allCount/pageSize);
            $scope.loading=false;
            $scope.$apply();
        });
        $scope.getPage=function(newPage){
            if(newPage<1||newPage>$scope.allPage){
                return;
            }
            $route.updateParams({page:newPage});
        }
    }])
})(angular);