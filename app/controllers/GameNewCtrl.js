"use strict";

app.controller("GameNewCtrl", function($scope, GameStorage, $location) {
  $scope.title = "Add Games";
  $scope.btnText = "Save";
  $scope.game = {
    title: "",
    genre: null,
    coopCount: null,
    description: "",
    uid: $scope.$parent.getUser()
  };

  $scope.addNewGame = function() {
    // console.log($scope.game);
    GameStorage.postNewGame($scope.game)
    .then(function() {
      $location.url("/games/list");
    });
  };
});