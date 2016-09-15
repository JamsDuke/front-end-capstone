"use strict";

app.controller("GameNewCtrl", function($scope, GameStorage, $location) {
  $scope.game = {
    title: "",
    genre: null,
    coopCount: null,
    uid: $scope.$parent.getUser()
  };

  $scope.addNewGame = function() {
    console.log($scope.game);
    GameStorage.postNewGame($scope.game)
    .then(function() {
      $location.url("/games/list");
    });
  };
});