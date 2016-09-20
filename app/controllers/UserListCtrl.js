"use strict";

app.controller("UserListCtrl", function($scope, UserStorage) {
  let user = $scope.$parent.getUser();
  UserStorage.getUserList(user)
  .then((usersArray) => {
    // console.log('USER LIST CTRL', user);
    // This loop pulls out the currently logged in user, preventing their username from showing up
    // in the available users list.
    for (var i = 0; i < usersArray.length; i++) {
      var currentUserID = usersArray[i].uid;
      if (user === currentUserID) {
        var currentUser = usersArray[i];
        var index = usersArray.indexOf(currentUser);
        // console.log(index);
        if (index > -1) {
          usersArray.splice(index, 1);
        }
        // console.log(usersArray[i]);
        // console.log('THEY MATCH', currentUserID);
        $scope.users = usersArray;

      }
    }
    // console.log(usersArray);
    // $scope.addUserToParty = function(user) {
    //   UserStorage.postUserToParty(user);
    // };
  });

// WIP: Need remove player from group function
// Toggle button to hide added party members instead of deleting them from database
// When clicked, add player to [partyArray] via post.  Its okay to create/delete these
// values from database because the party list is supposed to be dynamic.

  // $scope.removeUserFromParty = (gameId) => {
  //   UserStorage.bootUser(gameId)
  //   .then( (response) => {
  //     UserStorage.getGameList(user)
  //     .then( (usersArray) => {
  //       $scope.users = usersArray;
  //     });
  //   });
  // };
});

////////////////////////////////////////////////

//Original code without Christina's fancy loop

// "use strict";

// app.controller("UserListCtrl", function($scope, $location, UserStorage) {
//   let user = $scope.$parent.getUser();

//   UserStorage.getUserList(user)
//   .then((usersArray) => {
//     $scope.users = usersArray;
//     console.log("usersArray", usersArray);
//   });

// // WIP: Need Add player to group function and remove player from group function

//   $scope.addUserToParty = function(user) {
//     UserStorage.postUserToParty(user)
//     .then(function() {
//       $location.url("/party/current");
//     });
//   };
// });