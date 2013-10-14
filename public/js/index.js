var AngelFlameApp = angular.module('AngelFlameApp', [
    'AngelFlameControllers' /* Dependencies */
]);

AngelFlameApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/about', {
            templateUrl: 'partials/about.html',
            controller: 'AboutController'
        })
        .when('/members', {
            templateUrl: 'partials/members.html',
            controller: 'MembersController'
        })
        .when('/contact', {
            templateUrl: 'partials/contact.html',
            controller: 'ContactController'
        })
        .otherwise({
            redirectTo: '/members'
        });
}]);
