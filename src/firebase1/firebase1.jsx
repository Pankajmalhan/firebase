import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyAiIi-lZEpySzyMr026OGfU8VglAmo9teE",
  authDomain: "reactdb-1d3df.firebaseapp.com",
  databaseURL: "https://reactdb-1d3df.firebaseio.com",
  projectId: "reactdb-1d3df",
  storageBucket: "reactdb-1d3df.appspot.com",
  messagingSenderId: "57178661436"
};
firebase.initializeApp(config);
const database = firebase.database();
class Firebase {
  constructor() {
   // this.database = firebase.database();
  }

  getAllData = async path => {
    try {
      const data = await database.ref(path).once("value");
      return data.val();
    } catch (exp) {
      console.log({ exp });
    }
  };

  getContinueData = callback => {
    // database.ref('hobbies').on("value", snapshot => {
    //   console.log(snapshot.val());
    //   callback(snapshot.val());
    // });

    // database.ref('hobbies').on("child_added", snapshot => {
    //   console.log(snapshot.val());
    //   callback(snapshot.val());
    // });

    // database
    //   .ref("hobbies")
    //   .once("value")
    //   .then(snapshot => {
    //     const childData = [];
    //     snapshot.forEach(childSnapshot => {
    //       childData.push(childSnapshot.child('name').val());
    //     });
    //     console.log(childData);
    //   });
  };

  setData = () => {
    database
      .ref()
      .set({
        name: "Andrew Mead 1200",
        age: Date.now(),
        isSingle: false,
        location: {
          city: "Philadelphia",
          country: "United States"
        },
        hobbies: [
          { id: 1, name: "Pankaj 1" },
          { id: 2, name: "Pankaj 2" },
          { id: 3, name: "Pankaj 3" },
          { id: 4, name: "Pankaj 4" },
          { id: 5, name: "Pankaj 5" },
          { id: 2, name: "Pankaj 2" },
          { id: 3, name: "Pankaj 3" },
          { id: 4, name: "Pankaj 4" },
          { id: 5, name: "Pankaj 5" }
        ]
      })
      .then(() => {
        console.log("Data is saved!");
      })
      .catch(e => {
        console.log("This failed.", e);
      });
  };
}

const FirebaseObj = new Firebase();

export default FirebaseObj;
