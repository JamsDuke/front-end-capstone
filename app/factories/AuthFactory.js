"use strict";

app.factory("AuthFactory", function($q, $http, FirebaseURL){
// Register a first time user and log in
  let registerUser = function(userObj) {
    return firebase.auth().createUserWithEmailAndPassword(userObj.email, userObj.password)
      .catch(function(error){
        let errorCode = error.code;
        let errorMessage = error.message;
      });
  };
// Users who have already registered log in here
  let loginUser = function(userObj) {
    return firebase.auth().signInWithEmailAndPassword(userObj.email, userObj.password)
    .catch(function(error){
      let errorCode = error.code;
      let errorMessage = error.message;
      console.log("error", errorCode, errorMessage);
    });
  };
// Log out user
  let logoutUser = function(){
    return firebase.auth().signOut();
  };
// Prevents access to the interior of the app unless you are registered and logged in
  let isAuthenticated = function(){
    return (firebase.auth().currentUser) ? true : false;
  };
// Saves username selected at registration to database under profiles
  let saveUserInfo = function(usernameObj) {
    return $q( (resolve, reject) => {
      $http.post(`${FirebaseURL}/profiles.json`,
        JSON.stringify(usernameObj))
        .success( (objFromFirebase) => {
          resolve(objFromFirebase);
        })
        .error( (error) => {
          reject(error);
        });
    });
  };
  return {registerUser, loginUser, logoutUser, isAuthenticated, saveUserInfo};
});
