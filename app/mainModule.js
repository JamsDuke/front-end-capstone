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