"use strict";

app.controller("UserListCtrl", function($scope, UserStorage) {
  let user = $scope.$parent.getUser();
// Pop out current user before displaying array
  UserStorage.getUserList(user)
  .then((usersArray) => {
    console.log('USER LIST CTRL', user);
    for (var i = 0; i < usersArray.length; i++) {
      var currentUserID = usersArray[i].uid;
      if (user === currentUserID) {
        var currentUser = usersArray[i];
        var index = usersArray.indexOf(currentUser);
        console.log(index);
        if (index > -1) {
          usersArray.splice(index, 1);
        }
        console.log(usersArray[i]);
        console.log('THEY MATCH', currentUserID);
        $scope.users = usersArray;

      }
    }
    console.log(usersArray);
  });


// WIP: Need Add player to group function and remove player from group function

  // $scope.removeUserFromGroup = (gameId) => {
  //   UserStorage.deleteGame(gameId)
  //   .then( (response) => {
  //     UserStorage.getGameList(user)
  //     .then( (usersArray) => {
  //       $scope.users = usersArray;
  //     });
  //   });
  // };
});
