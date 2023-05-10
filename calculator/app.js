(function(){
    'use strict';

    angular.module('calculatorApp', [])

    .controller('calculatorController', function($scope) {
        $scope.name = ""
        $scope.totalValue = 0;

        $scope.showTitle = function() {
            return "Calculadora de nombres";
        };

        $scope.displayNumeric = function() {
            var totalValue = calculateNumericForString($scope.name);
            $scope.totalValue = totalValue;
        };

        function calculateNumericForString(string) {
            var totalStringValue = 0;
            for(var i = 0; i < string.length; i++) {
                totalStringValue += string.charCodeAt(i);
            }

            return totalStringValue;
        };
    });

})();