"use strict";
app.controller("PartyViewCtrl", function($scope, $routeParams, PartyStorage) {
$scope.partyMemberIds = [];
$scope.partyGameList = [];
$scope.games = [];
$scope.finalGameList = [];
$scope.finalArray = [];
$scope.theFinalArray = [];

  // This is supposed to get the games of those in the party
  PartyStorage.getPartyGameList()
  .then((gamesArray) => {
    $scope.games = gamesArray;
    console.log("gamesArray", gamesArray);
  });

  function uniq(passedInArray) {
    return Array.from(new Set(passedInArray));
    // this needs to be above where its declared or var uniq = function()
    }
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
            for (var x = 0; x < $scope.partyGameList.length; x++){
              var tmp = $scope.partyGameList[x];
              var tmpCount = 0;

              var fullArrayCount = $scope.partyGameList.length;

              for (var y = 0; y < $scope.partyGameList.length; y++){
                if (tmp === $scope.partyGameList[y]){
                  tmpCount++;
                  if (tmpCount === $scope.partyMemberIds.length){
                //we keep this one
                  $scope.finalArray.push($scope.partyGameList[y]);
                //now remove from $scope.partyGameList
                  }
                }
              }
            }
            console.log("$scope.finalArray", $scope.finalArray);

            $scope.theFinalArray = uniq($scope.finalArray);

            console.log("$scope.theFinalArray", $scope.theFinalArray);

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