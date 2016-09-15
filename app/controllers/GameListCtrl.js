"use strict";

app.controller("GameListCtrl", function($scope, GameStorage) {
  let user = $scope.$parent.getUser();

  GameStorage.getGameList(user)
  .then((gamesArray) => {
    $scope.games = gamesArray;
  });

  $scope.gameDelete = (gameId) => {
    GameStorage.deleteGame(gameId)
    .then( (response) => {
      GameStorage.getGameList(user)
      .then( (gamesArray) => {
        $scope.games = gamesArray;
      });
    });
  };
});