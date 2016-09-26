"use strict";

app.controller("PartyNewCtrl", function($scope, $window, PartyStorage) {
  $scope.header = "Create a New Party";

  $scope.newParty = {
    title: "",
    description: "",
    members: [],
    uid: $scope.$parent.getUser()
  };
  // Adds user to members array
  $scope.addUserToParty = function(user) {
    $scope.newParty.members.push(user.username, user.uid);
  };
  // Creates a new party
  $scope.addNewParty = function() {
    PartyStorage.postNewParty ($scope.newParty)
    .then(function() {
      $window.location.href = "#/party/list";
    });
  };
});