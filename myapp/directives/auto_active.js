/**
 * Created by jiahao on 2017-03-13.
 */
(function(angular){
    var app=angular.module("moviecat.auto_active",[]);
    app.directive("autoActive",["$location",function($location){
        return {
            //templateUrl:"http://www.baidu.api.com",
            //transclude:true,
            //replace:true,
            //$scope:{myclass:"@"},
            link:function(scope,element,attrubutes){
                $location.url();
                scope.loca=$location;
                scope.$watch("loca.url()",function(now,old){
                    var a=element.children();
                    var hash=a[0].hash.substr(1);
                    if(now.startsWith(hash)){
                        element.parent().children().removeClass("active");
                        element.addClass("active");
                    }
                });
            }
        };
    }])
})(angular)