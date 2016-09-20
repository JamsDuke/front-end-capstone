"use strict";

var app = angular.module("BroNight", ["ngRoute"])
.constant("FirebaseURL", "https://front-end-capstone-eb4f2.firebaseio.com/");
// Prevents access to interior of app unless logged in
let isAuth = (AuthFactory) => new Promise((resolve, reject) =>{
  if(AuthFactory.isAuthenticated()) {
    resolve();
  } else {
    reject();
  }
});
// Partials and their accompanying controllers
app.config(function($routeProvider) {
  $routeProvider.
  when('/', {
// only the U in Url is capitalized!!!
    templateUrl: 'partials/login.html',
    controller: 'LoginCtrl'
  }).
  when('/login', {
    templateUrl: 'partials/login.html',
    controller: 'LoginCtrl'
  }).
  when('/register', {
    templateUrl: 'partials/register.html',
    controller: 'LoginCtrl'
  }).
    when('/games/list', {
      templateUrl: 'partials/game-list.html',
      controller: 'GameListCtrl',
      resolve: {isAuth}
    }).
    when('/games/new', {
      templateUrl: 'partials/add-game.html',
      controller: 'GameNewCtrl',
      resolve: {isAuth}
    }).
    when("/party/new", {
      templateUrl: 'partials/make-party.html',
      controller: 'PartyNewCtrl',
      resolve: {isAuth}
    }).
    when("/party/list", {
      templateUrl: 'partials/party-list.html',
      controller: 'PartyListCtrl',
      resolve: {isAuth}
    }).
    otherwise('/');
});

// Enables use of Firebase
app.run(($location, FBCreds) => {
  let creds = FBCreds;
  let authConfig = {
    apiKey: creds.key,
    authDomain: creds.AuthDomain
  };
  firebase.initializeApp(authConfig);
});