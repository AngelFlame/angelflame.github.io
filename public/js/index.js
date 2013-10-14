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
        // start animations
        angular.element('.logo > .before').addClass('animated fadeOutLeft');
        angular.element('.logo > .after').addClass('animated fadeOutRight');

        window.setTimeout(function() {
            // hide animations
            angular.element('.logo').addClass('hide');
        }, 1000);
    }, 1000);

    // inject modules
    angular.bootstrap(document, ['AngelFlameApp']);
});
