var AngelFlameApp = angular.module('AngelFlameApp', [
    'ngRoute',
    'ngAnimate',
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
        .when('/works', {
            templateUrl: 'partials/works.html',
            controller: 'WorksController'
        })
        .otherwise({
            redirectTo: '/about'
        });
}]);


AngelFlameApp.run(function($rootScope, $route) {
    $rootScope.$on('$routeChangeSuccess', function(e, currentRoute, prevRoute) {
        var route = (currentRoute.$$route) ? 
            currentRoute.$$route.originalPath.slice(1) : 'about';

        $rootScope.route = route;
    });
});

// manual bootstrap
angular.element(document).ready(function() {

    window.setTimeout(function() {
        // start animations
        angular.element('.logo > .before').addClass('animated fadeOutLeft');
        angular.element('.logo > .after').addClass('animated fadeOutRight');

        // because animation is started, we can show container
        // to make users see things inside.
        angular.element('.container').removeClass('invisible');

        window.setTimeout(function() {
            // hide animations
            angular.element('.logo').addClass('hide');
        }, 1000);
    }, 1500);

    // angular.element('.logo').addClass('hide');

    // inject modules
    // XXX: use document, otherwise ngAnimate will not work, weird
    angular.bootstrap(document, ['AngelFlameApp']);
});
