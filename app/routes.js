"use strict";

angular
    .module('app',['ngRoute'])
    .config(config);

function config($routeProvider){
    $routeProvider
        .when('/view1',{
            templateUrl: '/app/views/view1.html',
            controller: 'View1Ctrl'
        })
//        .when('/view2',{
//            templateUrl: '/app/views/view2.html',
//            controller: 'View2Ctrl'
//        })
        .otherwise({redirectTo: '/view1'});
}