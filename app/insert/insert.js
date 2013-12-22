(function() {

    'use strict';

    angular.module('insert', [])

    .controller('InsertCtrl', ['$scope', '$localStorage', function($scope, $localStorage) {
        $scope.main.running = true;
        $localStorage.newJob = $localStorage.newJob || {};
        $scope.newJob = $localStorage.newJob;

        $scope.createJob = function() {
            $scope.newJob.pendingAt = new Date().getTime();
            $scope.main.pendingJobs.$add($scope.newJob);
            $localStorage.newJob = $scope.newJob;
        };
    }]);

})();