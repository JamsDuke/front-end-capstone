"use strict";

app.controller("LoginCtrl", function($scope, $window, AuthFactory){
  $scope.account = {
    email: "",
    username: "",
    password: ""
  };
  $scope.register = () => {
    console.log("you clicked register");
    AuthFactory.createUser({
      email: $scope.account.email,
      username: $scope.account.username,
      password: $scope.account.password
    })
    .then((userData) => {
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
        $window.location.href = "#/home";
      } else {
        $window.location.href = "#/login";
      }
      console.log("data from login", data);
    }, (error) => {
      console.log("Error logging in", error);
    });
  };
});
