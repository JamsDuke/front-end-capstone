"use strict";

app.controller("GameEditCtrl", function($scope, $location, $routeParams, GameStorage) {
  $scope.title = "Edit Game Info";
  $scope.btnText = "Update";
  $scope.game = {};

  GameStorage.getSingleGame($routeParams.gameId)
  .then( (response) => {
    $scope.game = response;
  });

  $scope.addNewGame = () => {
    GameStorage.updateGame($routeParams.gameId, $scope.game)
    .then( (response) => {
      $location.url("/games/list");
    });
  };
});