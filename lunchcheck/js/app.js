(function () {
  "use strict";

  angular
    .module("lunchCheck", [])

    .controller("lunchCheckController", LunchCheckController);

  LunchCheckController.$inject = ["$scope"];

  function LunchCheckController($scope) {
    $scope.message = "";
    $scope.adverticement = "";
    $scope.eatLunchList = "";
    $scope.classMsg = "";

    $scope.evaluate = function () {
      var response = evaluateList($scope.eatLunchList);
      $scope.message = response[0];
      $scope.classMsg = response[1];
    };

    $scope.validateEmptyItems = function () {
      var response = evaluateItems($scope.eatLunchList);
      if (!response) {
        $scope.adverticement = "(Empty elements will not be taken into account)";
      } else {
        $scope.adverticement = "";
      }
    };

    function evaluateItems(string) {
      var cleanValue = string.trim();
      var splitValue = null;
      var total = 0;
      if (cleanValue != "") {
        total = getTotalItems(cleanValue);
        splitValue = cleanValue.split(",");
        if (total != splitValue.length) {
          return false;
        }
      }

      return true;
    }

    function evaluateList(string) {
      var cleanValue = string.trim();
      var total = 0;
      var arrayRespone = [];

      if (cleanValue != "") {
        total = getTotalItems(cleanValue);
        if (total <= 3) {
          arrayRespone[0] = "Enjoy";
        } else {
          arrayRespone[0] = "Too much!";
        }
        arrayRespone[1] = "alert alert-success";
      } else {
        arrayRespone[0] = "Please enter data first";
        arrayRespone[1] = "alert alert-danger";
      }

      return arrayRespone;
    }

    function getTotalItems(string) {
      var total = 0;
      var splitValue = string.split(",");
      angular.forEach(splitValue, function (val, key) {
        if (val.trim() != "") {
          total += 1;
        }
      });
      return total;
    }
  }
})();
