var AngelFlameControllers = angular.module('AngelFlameControllers', []);

AngelFlameControllers.controller('AboutController', function($scope) {

});

AngelFlameControllers.controller('ContactController', function($scope, $rootScope) {

});

AngelFlameControllers.controller('MembersController', function($scope, $http) {

    $http.get('public/data/members.json').success(function(membersData) {

        $scope.membersData = membersData; 
        $scope.currentMemberData = membersData[$scope.memberIndex];

        // reinit, to make sure we load the first one
        $scope.memberIndex = 0;
    });

    $scope.updateMemberIndex = function(index) {
        $scope.memberIndex = index;
    };

    $scope.$watch('memberIndex', function(index) {
        var membersData = $scope.membersData;

        if (membersData) {
            $scope.currentMember = membersData[index];
        }
    });
});
