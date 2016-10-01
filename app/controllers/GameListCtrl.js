"use strict";

app.controller("GameListCtrl", function($scope, GameStorage, $window) {
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
// Function in progress
  // $scope.goToGame = function (gameId) {
  //   $window.location.href = `/games/{{game.id}}/edit`;
  // };
});