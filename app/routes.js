(function () {
    'use strict';

    angular
        .module('app')
        .config(config);

    function config($routeProvider) {
        $routeProvider
            .when('/dashboard', {
                templateUrl: '/app/views/dashboard.html',
                controller: 'DashboardController'
            })
            .when('/contactus',{
                templateUrl: '/app/views/contactus.html',
                controller: 'AboutUsController'
            })
            .otherwise({redirectTo: '/dashboard'});
    }
})();