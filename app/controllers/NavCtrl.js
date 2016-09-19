"use strict";

app.controller("NavCtrl", function($scope, $location) {
  $scope.navItems = [
    {url: "#/logout", name: "Logout", showState: "$parent.isLoggedIn"},
    {url: "#/login", name: "Login", showState: "!$parent.isLoggedIn"},
    {url: "#/register", name: "Register", showState: "!$parent.isLoggedIn"},
    {url: "#/", name: "Game List", showState: "$parent.isLoggedIn"},
    {url: "#/", name: "Add Games", showState: "$parent.isLoggedIn"},
    {url: "#/", name: "Create Party", showState: "$parent.isLoggedIn"},
    {url: "#/", name: "Party List", showState: "$parent.isLoggedIn"}
  ];

  $scope.isActive = (viewLocation) => viewLocation === $location.path();
  // curly brackets and return not needed when writing one line of code after fat arrow
});



