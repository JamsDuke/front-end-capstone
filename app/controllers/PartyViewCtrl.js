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
          }

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

        }

    // }
    // for (i = 0; i < $scope.partyGameList.length; i++){
    //   var tmpGame = $scope.partyGameList[i];
    //   var countTimes = 0;
    //   for (ii = 0; ii < )
    // }
     console.log("$scope.partyGameList", $scope.partyGameList);
    }
    // console.log("$scope.partyMemberIds", $scope.partyMemberIds);
    // console.log("$scope.partyGameList", $scope.partyGameList);
  });
  // Things to do!
  // Display usernames of party members
  // Display a list of games that each member has in common
});