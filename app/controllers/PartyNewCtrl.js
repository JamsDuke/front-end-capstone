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
  // Removes a user from the members array
  // Not implemented, should be replaced with checkbox option.
  // $scope.removeUserFromParty = function(user) {
  //   $scope.newParty.members.push(user.uid);
  // };
  // Creates a new party
  $scope.addNewParty = function() {
    PartyStorage.postNewParty ($scope.newParty)
    .then(function() {
      $window.location.href = "#/party/list";
    });
  };
});


// "use strict";

// app.controller("PartyNewCtrl", function($scope, PartyStorage) {
//   let user = $scope.$parent.getUser();

//   PartyStorage.getUserList(user)
//   .then((partyArray) => {
//     $scope.party = partyArray;
//     console.log("partyArray", partyArray);
//   });

// // WIP: Need Add player to group function and remove player from group function
// });