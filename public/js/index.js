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

// manual bootstrap
angular.element(document).ready(function() {

    window.setTimeout(function() {
        // show animations
        angular.element('.before').addClass('animated fadeOutLeft');
        angular.element('.after').addClass('animated fadeOutRight');
    }, 1000);

    // inject modules
    angular.bootstrap(document, ['AngelFlameApp']);
});
