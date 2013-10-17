var AngelFlameControllers = angular.module('AngelFlameControllers', []);

AngelFlameControllers.controller('AboutController', [
    '$scope', 
    function($scope) {
        $scope.currentClass = 'about';
    }
]);

AngelFlameControllers.controller('ContactController', ['$scope', function($scope) {
    // do nothing
}]);

AngelFlameControllers.controller('MembersController', ['$scope', '$http', function($scope, $http) {
    $http.get('public/data/members.json').success(function(membersData) {
        $scope.membersData = membersData; 
    });
}]);
