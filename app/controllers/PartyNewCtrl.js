"use strict";

app.controller("PartyNewCtrl", function($scope, $window, PartyStorage) {
  $scope.header = "Create a New Party";

  $scope.newParty = {
    title: "",
    description: "",
    uid: $scope.$parent.getUser()
  };

  $scope.addNewParty = function() {
    PartyStorage.postNewParty ($scope.newParty)
    .then(function() {
      $window.location.href = "#/party/current"; // rerouting back to list view after promise is returned
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