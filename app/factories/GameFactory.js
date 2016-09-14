"use strict";

app.factory("GameStorage", ($q, $http, FirebaseURL) => {
  let getGameList = (user) => {
    let games = [];
    //This is the Angular way of doing promises
    return $q((resolve, reject)=>{
      $http.get(`${FirebaseURL}/games.json?orderBy="uid"&equalTo="${user}"`)
      //Angular does the parsing of the object for you, just like AJAX or getJSON
      .success((gameObject)=>{
        if (gameObject !== null){
          Object.keys(gameObject).forEach((key)=>{
            gameObject[key].id = key;
            games.push(gameObject[key]);
          });
          resolve(games);
        } else {
          resolve(games);
        }
      })
      .error((error)=>{
        reject(error);
      });
    });
  };

  let getSingleGame = (gameId) => {
    return $q( (resolve, reject) => {
      $http.get(`${FirebaseURL}games/${gameId}.json`)
      .success( (gameObject) => {
        resolve(gameObject);
      })
      .error( (error) => {
        reject(error);
      });
    });
  };

  let updateGame = (gameId, editedGame) => {
    return $q( (resolve, reject) => {
      $http.patch(`${FirebaseURL}games/${gameId}.json`,
        JSON.stringify(editedGame))
      .success( (objFromFirebase) => {
        resolve(objFromFirebase);
      })
      .error( (error) => {
        reject(error);
      });
    });
  };

  let postNewGame = (newGame) => {
    return $q( (resolve, reject) => {
      $http.post(`${FirebaseURL}/games.json`,
        JSON.stringify(newGame))
        .success( (objFromFirebase) => {
          resolve(objFromFirebase);
        })
        .error( (error) => {
          reject(error);
        });
    });
  };
let deleteGame = (gameId) => {
  return $q( (resolve, reject) => {
    $http.delete(`${FirebaseURL}/games/${gameId}.json`)
    .success( (objFromFirebase) => {
      resolve(objFromFirebase);
    });
  });
};
  return {getGameList, postNewGame, deleteGame, updateGame, getSingleGame};
});