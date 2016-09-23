"use strict";
app.controller("PartyViewCtrl", function($scope, $routeParams, PartyStorage) {
$scope.partyMemberIds = [];
$scope.partyGameList = [];
$scope.games = [];
$scope.finalGameList = [];
  // This is supposed to get the games of those in the party
  PartyStorage.getPartyGameList()
  .then((gamesArray) => {
    $scope.games = gamesArray;
    console.log("gamesArray", gamesArray);
  });
  // Trying to get the party that was clicked on here
  PartyStorage.getSingleParty($routeParams.partyid)
  .then((partyObject) => {
    $scope.party = partyObject;
    console.log("partyObject.members.length", partyObject.members.length);
    // this loop pulls out UID from the partyObject
    for(var i = 1; i < partyObject.members.length; i+=2){
      $scope.partyMemberIds.push(partyObject.members[i]);
    }
    console.log("$scope.partyMemberIds.length", $scope.partyMemberIds.length);
    // this loop will pull out games in common with uids in the group
    for(var ii = 0; ii < $scope.partyMemberIds.length; ii++){
      var tempId = $scope.partyMemberIds[ii];
        for(var iii = 0; iii < $scope.games.length; iii++){
          // console.log("$scope.games[iii].uid", $scope.games[iii].uid);
          // console.log("tempId", tempId);
          // console.log("WHAT IS THIS", $scope.games[iii]);
          if($scope.games[iii].uid === tempId){
            $scope.partyGameList.push($scope.games[iii].title);
            console.log("$scope.games[iii].title", $scope.games[iii].title);
            // Getting crazy with loops here
            // This is supposed to pull out one istance of each duplicate game
            // var tempGameList = $scope.games[iii].title;
            // console.log("tempGameList", tempGameList);
            // for(var x = 0; x < $scope.partyGameList.length; x++){
            //   var isDuplicate = false;
            //   if($scope.partyGameList[x] === tempGameList){
            //     isDuplicate = true;
            //   }
            //   if(isDuplicate === false)
            //     $scope.finalGameList.push($scope.partyGameList[x]);
            //   // console.log("$scope.finalGameList", $scope.finalGameList);
            //   // console.log("finalGameList", $scope.finalGameList);
            // }
          }}
    }
    // console.log("$scope.partyMemberIds", $scope.partyMemberIds);
    // console.log("$scope.partyGameList", $scope.partyGameList);
  });
  // Things to do!
  // Display usernames of party members
  // Display a list of games that each member has in common
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

  /// Code before blow up

//   "use strict";
// app.controller("PartyViewCtrl", function($scope, $routeParams, PartyStorage) {
//   $scope.partyMemberIds = [];
//   $scope.partyGameList = {
//     name: "",
//   };
//   $scope.games = [];
//   $scope.finalGamesArray = [];
//   console.log("WHAT THE HELL", $scope.partyGameList);
//   // This is supposed to get the games of those in the party
//   PartyStorage.getPartyGameList()
//   .then((gamesArray) => {
//     $scope.games = gamesArray;
//     console.log("gamesArray", gamesArray);
//   });
//   // Trying to get the party that was clicked on here
//   PartyStorage.getSingleParty($routeParams.partyid)
//   .then((partyObject) => {
//     $scope.party = partyObject;
//     console.log("partyObject.members.length", partyObject.members.length);
//     // this loop pulls out UID from the partyObject
//     for(var i = 1; i < partyObject.members.length; i+=2){
//       $scope.partyMemberIds.push(partyObject.members[i]);
//     }
//     console.log("$scope.partyMemberIds.length", $scope.partyMemberIds.length);
//     // this loop will pull out games in common with uids in the group
//     for(var ii = 0; ii < $scope.partyMemberIds.length; ii++){
//       var tempId = $scope.partyMemberIds[ii];
//         for(var iii = 0; iii < $scope.games.length; iii++){
//           console.log("$scope.games[iii]", $scope.games[iii]);
          // console.log("tempId", tempId);
          // Loops over games to count how many times they are owned via uids in party
        //   if($scope.games[iii].uid === tempId){
        //     if($scope.partyGameList[$scope.games[iii].title])
        //     {$scope.partyGameList[$scope.games[iii].title].ownedCount+=1;}
        //     else {
        //       $scope.partyGameList[$scope.games[iii].title] = {
        //       ownedCount: 1
        //     };
        //     }
        //     // console.log("$scope.games[iii].title", $scope.games[iii].title);
        //     // Getting crazy with loops here
        //     // This is supposed to pull out one istance of each duplicate game
        //     // var tempGameList = $scope.games[iii].title;
        //     // for(var game in $scope.partyGameList){
        //     //   var isDuplicate = true;
        //     //   if(game === tempGameList){
        //     //     isDuplicate = false;
        //     //   }
        //     //   if(isDuplicate === true)
        //     //     $scope.partyGameList.push(tempGameList);
        //     //   // console.log("tempGameList", tempGameList);
        //     // }
        //     let things = $scope.partyGameList[$scope.games[iii]];
        //     // console.log("THINGS", things);
        //     for (var w in things) {
        //       // console.log('$scope.partyGameList[i]',  things[w]);
        //       if (things[w] === $scope.partyMemberIds.length) {
        //         // console.log("WHAT IS HAPPENING");
        //         $scope.finalGamesArray.push(things);
        //         // console.log("ARRAY", $scope.finalGamesArray);
        //       }
        //     }
        //     // if (things === $scope.partyMemberIds.length){
        //     //   console.log('HELLO')
//         //     // }
//         //   }
//         // }
//     }
//   }
//     // console.log("$scope.partyMemberIds", $scope.partyMemberIds);
//     console.log("$scope.partyGameList", $scope.partyGameList);
//   });
//   // Things to do!
//   // Display usernames of party members
//   // Display a list of games that each member has in common
// });

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

