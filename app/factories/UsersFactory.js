"use strict";

app.factory("UserStorage", ($q, $http, FirebaseURL) => {
  // Populate a list of registered users from the profiles folder in the database
  let getUserList = (user) => {
    let users = [];
    //This is the Angular way of doing promises
    return $q((resolve, reject)=>{
      $http.get(`${FirebaseURL}/profiles.json`)
      //Angular does the parsing of the object for you, just like AJAX or getJSON
      .success((userObject)=>{
        if (userObject !== null){
          Object.keys(userObject).forEach((key)=>{
            userObject[key].id = key;
            users.push(userObject[key]);
          });
          resolve(users);
        } else {
          resolve(users);
        }
      })
      .error((error)=>{
        reject(error);
      });
    });
  };
  return {getUserList};
});