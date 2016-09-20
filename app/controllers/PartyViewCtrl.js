"use strict";
app.controller("PartyViewCtrl", function($scope, UserStorage) {

});

  //This stuff doesnt work, but ill keep it here just in case

  //array holds users specific to this party
  // $scope.partyMembers = [];
  // //gets all users associated with the current user
  // UserStorage.getUserList($scope.$parent.getUser())
  // .then((UserListArray) => {
  //   //clear arrays
  //   $scope.partyMembers = [];
  //   console.log("partyMembers", []);
  //   //puts all users associated with current user into an array
  //   $.each(UserListArray, function (index, value) {
  //     if (value.partyId === $scope.$parent.currentPartyId) {
  //       $scope.partyMembers.push(value);
  //     }
  //   });
  // });
  //delete user using user id, passed in from ng-click on partial
  // Not currently in operation

  // $scope.userDelete = function (userid) {
  //   UserStorage.deleteUser(userid)
  //   .then( function () {
  //     UserStorage.getUserList($scope.$parent.getUser())
  //     .then((UserListArray) => {
  //       //clear arrays
  //       $scope.partyMembers = [];

  //       //puts all users associated with current user into an array
  //       $.each(UserListArray, function (index, value) {
  //         if (value.partyId === $scope.$parent.currentPartyId) {
  //           $scope.partyMembers.push(value);
  //         }
  //       });
  //       //sorts the array of user users to three arrays, one for each column
  //     });
  //   });
  // };
