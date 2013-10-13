var AngelFlameControllers = angular.module('AngelFlameControllers', []);

// register AboutController
AngelFlameControllers.controller('AboutController', ['$scope', function($scope) {
    // do nothing
}]);

AngelFlameControllers.controller('MembersController', ['$scope', '$http', function($scope, $http) {
    $http.get('public/data/members.json').success(function(membersData) {
        $scope.membersData = membersData; 
    });
}]);
