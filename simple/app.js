(function(){
    'use strict';

    angular.module('myFirstApp', [])

    .controller('myFirstController', function($scope) {
        $scope.name = "Andres"
        $scope.sayHello = function(){
            return "Hola Coursera!";
        }
    });

})();