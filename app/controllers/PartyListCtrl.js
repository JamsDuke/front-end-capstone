"use strict";

app.controller("PartyListCtrl", function($scope, $window, $routeParams, PartyStorage) {
  let user = $scope.$parent.getUser();

  //retrieve the 'parties' with uid property equal to user
  //this populates the page via the ng-repeat being linked to 'party in parties'
  //parties is defined here via $scope.parties
  PartyStorage.getParties(user)
  .then((partyListArray) => {
    $scope.parties = partyListArray;
  });

  //navigate to the new party partial on 'add new' button click
  $scope.makeNewParty = function () {
    $window.location.href = "#/parties/new";
  };

  $scope.partyEdit = function (partyId) {

    $window.location.href = `#/parties/edit/${partyId}`;
  };
  //delete a party using ng-click and the party id being passed in via the
  //data attr in the partial
  $scope.partyDelete = function (partyId) {
    PartyStorage.deleteParty(partyId)
    .then( () => {
      //reload page
      PartyStorage.getParties(user)

      .then((partyListArray) => {
        $scope.parties = partyListArray;
      });
    });
  };
//--there probably is a better way to have done this--
  //navigate to the 'single-party' partial using the party's id
  $scope.goToParty = function (partyId, partyTitle) {
    $scope.$parent.currentPartyId = partyId;
    $scope.$parent.currentPartyTitle = partyTitle;
    $window.location.href = `#/parties/${partyId}`;
  };
});

// "use strict";

// app.controller("PartyListCtrl", function($scope, PartyStorage) {
//   let user = $scope.$parent.getUser();

//   PartyStorage.getParties(user)
//   .then((partiesArray) => {
//     $scope.parties = partiesArray;
//   });

//   $scope.partyDelete = (partyId) => {
//     PartyStorage.deleteParty(partyId)
//     .then( (response) => {
//       PartyStorage.getPartyList(user)
//       .then( (partiesArray) => {
//         $scope.parties = partiesArray;
//       });
//     });
//   };
// });


