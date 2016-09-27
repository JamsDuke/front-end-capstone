"use strict";
app.controller("PartyViewCtrl", function($scope, $routeParams, PartyStorage, $window) {
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
    // console.log("gamesArray", gamesArray);
  });

  function uniq(passedInArray) {
    return Array.from(new Set(passedInArray));
    // this needs to be above where its declared or var uniq = function()
    }
  // Trying to get the party that was clicked on here
  PartyStorage.getSingleParty($routeParams.partyid)
  .then((partyObject) => {
    $scope.party = partyObject;
    // console.log("partyObject.members.length", partyObject.members.length);
    // this loop pulls out UID from the partyObject
    for(var i = 1; i < partyObject.members.length; i+=2){
      $scope.partyMemberIds.push(partyObject.members[i]);
    }
    // console.log("$scope.partyMemberIds.length", $scope.partyMemberIds.length);
    // this loop will pull out games in common with uids in the group
    for(var ii = 0; ii < $scope.partyMemberIds.length; ii++){
      var tempId = $scope.partyMemberIds[ii];
        for(var iii = 0; iii < $scope.games.length; iii++){
          // console.log("$scope.games[iii].uid", $scope.games[iii].uid);
          // console.log("tempId", tempId);
          // console.log("WHAT IS THIS", $scope.games[iii]);
          if($scope.games[iii].uid === tempId){
            $scope.partyGameList.push($scope.games[iii]);
          }
            // Getting crazy with loops here
            // This is supposed to pull out one istance of each duplicate game
            for (var x = 0; x < $scope.partyGameList.length; x++){
              var tmp = $scope.partyGameList[x].title;
              var tmpCount = 0;

              var fullArrayCount = $scope.partyGameList.length;

              for (var y = 0; y < $scope.partyGameList.length; y++){
                if (tmp === $scope.partyGameList[y].title){
                  tmpCount++;
                  if (tmpCount === $scope.partyMemberIds.length){
                //we keep this one
                  $scope.finalArray.push($scope.partyGameList[y]);
                //now remove from $scope.partyGameList
                  }
                }
              }
            }
            // console.log("$scope.finalArray", $scope.finalArray);
            $scope.theFinalArray = uniq($scope.finalArray);
            console.log("$scope.theFinalArray", $scope.theFinalArray.sort());
        }
     console.log("$scope.partyGameList", $scope.partyGameList);
    }
    // console.log("$scope.partyMemberIds", $scope.partyMemberIds);
    // console.log("$scope.partyGameList", $scope.partyGameList);
  });
  $scope.randomGame = function () {
    var random = $scope.theFinalArray[Math.floor(Math.random() * $scope.theFinalArray.length)];
    console.log("random button clicked");
    swal({   title: "Sup, Brah?",   text: "Broseidon: God of the Brocean has decreed: You shall play " + random.title + " this eve",   imageUrl: "images/brofist.jpg" });
    // $window.alert("Broseidon: God of the Brocean has decreed: You shall play " + random + " this eve");
  };
  // Things to do!
  // Display usernames of party members
});