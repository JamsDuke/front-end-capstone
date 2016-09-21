"use strict";

app.factory("PartyStorage", ($q, $http, FirebaseURL) => {
  // Populate a list of parties that the user has uploaded to the database
  let getParties = (user) => {
    let parties = [];
    //This is the Angular way of doing promises
    return $q((resolve, reject)=>{
      $http.get(`${FirebaseURL}/parties.json?orderBy="uid"&equalTo="${user}"`)
      //Angular does the parsing of the object for you, just like AJAX or getJSON
      .success((partyObject)=>{
        if (partyObject !== null){
          Object.keys(partyObject).forEach((key)=>{
            partyObject[key].id = key;
            parties.push(partyObject[key]);
          });
          resolve(parties);
        } else {
          resolve(parties);
        }
      })
      .error((error)=>{
        reject(error);
      });
    });
  };
  // The goal here is to get ALL the games in the DB to match with UID of users in party
  let getPartyGameList = () => {
    let games = [];
    //This is the Angular way of doing promises
    return $q((resolve, reject)=>{
      $http.get(`${FirebaseURL}/games.json`)
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
// Get a single party
  let getSingleParty = (partyId) => {
    console.log("partyId", partyId);
    return $q( (resolve, reject) => {
      $http.get(`${FirebaseURL}parties/${partyId}.json`)
      .success( (partyObject) => {
        resolve(partyObject);
      })
      .error( (error) => {
        reject(error);
      });
    });
  };
// Edit a party
  let editParty = (partyId, editedParty) => {
    return $q( (resolve, reject) => {
      $http.patch(`${FirebaseURL}parties/${partyId}.json`,
        JSON.stringify(editedParty))
      .success( (partyFromFirebase) => {
        resolve(partyFromFirebase);
      })
      .error( (error) => {
        reject(error);
      });
    });
  };
// Add new party to parties
  let postNewParty = (newParty) => {
    return $q( (resolve, reject) => {
      $http.post(`${FirebaseURL}/parties.json`,
        JSON.stringify(newParty))
        .success( (partyFromFirebase) => {
          resolve(partyFromFirebase);
        })
        .error( (error) => {
          reject(error);
        });
    });
  };
// Delete party from parties
  let deleteParty = (partyId) => {
    return $q( (resolve, reject) => {
      $http.delete(`${FirebaseURL}/parties/${partyId}.json`)
      .success( (partyFromFirebase) => {
        resolve(partyFromFirebase);
      });
    });
  };
  return {getParties, getSingleParty, editParty, postNewParty, deleteParty, getPartyGameList};
});

// "use strict";

// app.factory("PartyStorage", ($q, $http, FirebaseURL) => {
//   // Populate a list of registered users from the profiles folder in the database
//   let getUserList = (user) => {
//     let party = [];
//     //This is the Angular way of doing promises
//     return $q((resolve, reject)=>{
//       $http.get(`${FirebaseURL}/party.json`)  //?orderBy="uid"&equalTo="${user}"
//       //Angular does the parsing of the object for you, just like AJAX or getJSON
//       .success((partyObject)=>{
//         if (partyObject !== null){
//           Object.keys(partyObject).forEach((key)=>{
//             partyObject[key].id = key;
//             party.push(partyObject[key]);
//             // console.log("partyObject", partyObject);
//           });
//           resolve(party);
//         } else {
//           resolve(party);
//         }
//         // console.log("party", party);
//       })
//       .error((error)=>{
//         reject(error);
//       });
//     });
//   };

//   return {getUserList};
// });


// // Add collection of users to an array, then post that array to a party.
// // Will have array of users and UID of party creator.