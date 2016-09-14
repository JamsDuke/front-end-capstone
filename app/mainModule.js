"use strict";

var app = angular.module("BroNight", ["ngRoute"])
.constant("FirebaseURL", "https://front-end-capstone-eb4f2.firebaseio.com/");

let isAuth = (AuthFactory) => new Promise((resolve, reject) =>{
  if(AuthFactory.isAuthenticated()) {
    resolve();
  } else {
    reject();
  }
});

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
    when('/games/list', {
      templateUrl: 'partials/game-list.html',
      controller: '',
      resolve: {isAuth}
    }).
    when('/games/new', {
      templateUrl: 'partials/add-game.html',
      controller: '',
      resolve: {isAuth}
    }).
    when("/party/new", {
      templateUrl: 'partials/make-party.html',
      controller: '',
      resolve: {isAuth}
    }).
    when("/party/current", {
      templateUrl: 'partials/current-party.html',
      controller: '',
      resolve: {isAuth}
    }).
    otherwise('/');
});

app.run(($location, FBCreds) => {
  let creds = FBCreds;
  let authConfig = {
    apiKey: creds.key,
    authDomain: creds.AuthDomain
  };
  firebase.initializeApp(authConfig);
});