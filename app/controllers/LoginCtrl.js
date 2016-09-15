"use strict";

app.controller("LoginCtrl", function($scope, $window, AuthFactory){
  $scope.account = {
    email: "",
    username: "",
    password: ""
  };
  $scope.register = (email, password) => {
    console.log("you clicked register");
    AuthFactory.registerUser({
      email: $scope.account.email,
      password: $scope.account.password
    })
    .then((userData) => {
      AuthFactory.saveUserInfo({
        username: $scope.account.username,
        uid: userData.uid
      });
      console.log("newUser", userData);
      $scope.login();
    }, (error) => {
      console.log(`Error creating user: ${error}`);
    });
  };

  $scope.login = () => {
    console.log("you clicked login");
    AuthFactory.loginUser($scope.account)
    .then( (data) => {
      if (data) {
        $window.location.href = "#/games/list";
      } else {
        $window.location.href = "#/games/list";
      }
      console.log("data from login", data);
    }, (error) => {
      console.log("Error logging in", error);
    });
  };
});
