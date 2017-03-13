(function(angular){
    //
    //
    angular.module('moviecat.movie_detail',['ngRoute'])

        .config(['$routeProvider',function($routeProvider){
            $routeProvider.when('/details/:id',{
                controller:'movieController',
                templateUrl:'movie_detail/view.html'
            })
        }])
        .controller('movieController',['$scope',
            '$location',
            '$routeParams',
            'MyHttp'
            ,function($scope,$location,$routeParams,MyHttp){
                console.log("fffffffffffff");
                //var id=$location.url().split('/')[2];
                MyHttp.jsonp('http://api.douban.com/v2/movie/subject/'+$routeParams.id,{},function(data){
                    console.log(data);
                    $scope.data=data;
                    $scope.$apply();
                })
        }]);
})(angular)