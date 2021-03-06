"use strict";

app.controller("PartyListCtrl", function($scope, $window, PartyStorage) {
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

  $scope.partyEdit = function (partyid) {

    $window.location.href = `#/parties/edit/${partyid}`;
  };
  //delete a party using ng-click and the party id being passed in via the
  //data attr in the partial
  $scope.partyDelete = function (partyid) {
    PartyStorage.deleteParty(partyid)
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
  $scope.goToParty = function (partyid, partytitle) {
    $scope.$parent.currentPartyId = partyid;
    // console.log("partyid", partyid);
    $scope.$parent.currentPartyTitle = partytitle;
    // console.log("partytitle", partytitle);
    $window.location.href = `#/party/${partyid}`;
  };
});


