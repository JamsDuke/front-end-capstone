"use strict";

app.controller("PartyViewCtrl", function($scope, UserStorage) {
  //array holds users specific to this party
  $scope.partyMembers = [];
  //gets all users associated with the current party
  UserStorage.getPartyMembers($scope.$parent.getUser())
  .then((PartyMembersArray) => {
    //puts all users associated with current party into an array
    $.each(PartyMembersArray, function (index, value) {
      if (value.partyid === $scope.$parent.currentPartyId) {
        $scope.partyMembers.push(value);
      }
    });
  });
  //delete pin using pin id, passed in from ng-click on partial
  $scope.pinDelete = function (pinid) {
    UserStorage.deletePin(pinid)
    .then( function () {
      UserStorage.getUserPins($scope.$parent.getUser())
      .then((PartyMembersArray) => {
        //clear arrays
        $scope.partyMembers = [];
        //puts all pins associated with current user into an array
        $.each(PartyMembersArray, function (index, value) {
          if (value.boardid === $scope.$parent.currentPartyId) {
            $scope.partyMembers.push(value);
          }
        });
      });
    });
  };
});
