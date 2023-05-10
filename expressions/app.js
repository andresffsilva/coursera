(function(){
    'use strict';

    angular.module('msgApp', [])

    .controller('msgController', msgController);

    function msgController($scope, $filter){
        $scope.name = "Andres";
        $scope.state = "a";
        $scope.sayHello = function(){
            return "Expressions and Interpolation";
        }
        $scope.sayMessage = function(){
            return "Me gustan las almendras y los arandanos";
        }
        $scope.setState = function(){
            $scope.state = "b";
        }
    }

})();