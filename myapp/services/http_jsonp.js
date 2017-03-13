/**
 * Created by jiahao on 2017-03-12.
 */
(function(angular){
    var app=angular.module("moviecat.http_jsonp",[]);
    app.service("MyHttp",["$window",function($window){
        this.jsonp=function(url,arg,fn){
            var queryString="";
            for(var k in arg){
                queryString+=k+"="+arg[k]+"&";
            }

        url +="?"+queryString;
        var callbackName="jsonp_"+Math.random().toString().substr(2);
        $window[callbackName]=function(data){
            console.log(data);
            fn(data);
            $window.document.body.removeChild(scriptElement);
        };
        url+="callback="+callbackName;
        var scriptElement=$window.document.createElement("script");
        scriptElement.src=url;
        $window.document.body.appendChild(scriptElement);
        }
    }]);
})(angular);