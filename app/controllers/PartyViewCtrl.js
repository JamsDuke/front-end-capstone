"use strict";
app.controller("PartyViewCtrl", function($scope, UserStorage) {
  //array holds pins specific to this board
  $scope.partyMembers = [];
  //gets all pins associated with the current user
  UserStorage.getPartyMembers($scope.$parent.getUser())
  .then((UserListArray) => {
    //clear arrays
    $scope.partyMembers = [];
    //puts all pins associated with current user into an array
    $.each(UserListArray, function (index, value) {
      if (value.partyId === $scope.$parent.currentPartyId) {
        $scope.partyMembers.push(value);
      }
    });
  });
  //delete pin using pin id, passed in from ng-click on partial
  $scope.pinDelete = function (pinid) {
    UserStorage.deletePin(pinid)
    .then( function () {
      UserStorage.getPartyMembers($scope.$parent.getUser())
      .then((UserListArray) => {
        //clear arrays
        $scope.partyMembers = [];

        //puts all pins associated with current user into an array
        $.each(UserListArray, function (index, value) {
          if (value.partyId === $scope.$parent.currentPartyId) {
            $scope.partyMembers.push(value);
          }
        });
        //sorts the array of user pins to three arrays, one for each column
      });
    });
  };
});
