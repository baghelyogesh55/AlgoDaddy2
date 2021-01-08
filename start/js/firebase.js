// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBhuDSvKy4ImuhyJUHYSuVDZPp94UnKRIA",
    authDomain: "algodaddy2.firebaseapp.com",
    databaseURL: "https://algodaddy2.firebaseio.com",
    projectId: "algodaddy2",
    storageBucket: "algodaddy2.appspot.com",
    messagingSenderId: "1044916362292",
    appId: "1:1044916362292:web:bfca5b6111bb1d7d6cfe61"
};
// Initialize Firebase

var app = firebase.initializeApp(firebaseConfig);

db = firebase.firestore(app);

// function add(m, s, t) {
//     var user = firebase.auth().currentUser;
//     if (t == "Topic 1") {

//         db.collection(s).doc(user.uid).update({
//                 topic1: m
//             })
//             .then(function(docRef) {
//                 console.log("Added Succesfully");
//                 alert("Matks Added Successfully");
//             })
//             .catch(function(error) {
//                 if (error.code == "not-found") {
//                     db.collection(s).doc(user.uid).set({
//                         topic1: m
//                     }).then(function(docRef) {
//                         console.log("Added Succesfully");
//                         alert("Marks Added Successfully");
//                     })
//                 } else console.error("Error adding document: ", error);
//             });
//     } else if (t == "Topic 2") {

//         db.collection(s).doc(user.uid).update({
//                 topic2: m
//             })
//             .then(function(docRef) {
//                 console.log("Added Succesfully");
//                 alert("Marks Added Successfully");
//             })
//             .catch(function(error) {
//                 if (error.code == "not-found") {
//                     db.collection(s).doc(user.uid).set({
//                         topic2: m
//                     }).then(function(docRef) {
//                         console.log("Added Succesfully");
//                         alert("Marks Added Successfully");
//                     })
//                 } else console.error("Error adding document: ", error);
//             });
//     } else if (t == "Topic 3") {

//         db.collection(s).doc(user.uid).update({
//                 topic3: m
//             })
//             .then(function(docRef) {
//                 console.log("Added Succesfully");
//                 alert("Marks Added Successfully");
//             })
//             .catch(function(error) {
//                 if (error.code == "not-found") {
//                     db.collection(s).doc(user.uid).set({
//                         topic3: m
//                     }).then(function(docRef) {
//                         console.log("Added Succesfully");
//                         alert("Marks Added Successfully");
//                     })
//                 } else console.error("Error adding document: ", error);
//             });
//     } else if (t == "Topic 4") {

//         db.collection(s).doc(user.uid).update({
//                 topic4: m
//             })
//             .then(function(docRef) {
//                 console.log("Added Succesfully");
//                 alert("Marks Added Successfully");
//             })
//             .catch(function(error) {
//                 if (error.code == "not-found") {
//                     db.collection(s).doc(user.uid).set({
//                         topic4: m
//                     }).then(function(docRef) {
//                         console.log("Added Succesfully");
//                         alert("Marks Added Successfully");
//                     })
//                 } else console.error("Error adding document: ", error);
//             });
//     } else if (t == "Topic 5") {

//         db.collection(s).doc(user.uid).update({
//                 topic5: m
//             })
//             .then(function(docRef) {
//                 console.log("Added Succesfully");
//                 alert("Marks Added Successfully");
//             })
//             .catch(function(error) {
//                 if (error.code == "not-found") {
//                     db.collection(s).doc(user.uid).set({
//                         topic5: m
//                     }).then(function(docRef) {
//                         console.log("Added Succesfully");
//                         alert("Marks Added Successfully");
//                     })
//                 } else console.error("Error adding document: ", error);
//             });
//     }
// }


// function show(sub, arr, id) {
//     var user = firebase.auth().currentUser;
//     // var docRef = db.collection("Theory Of Computation").doc(user.uid);
//     // let marksmssg = "";
//     arr = [];
//     var docRef = db.collection(sub).doc(user.uid);
//     docRef.get().then(function(doc) {
//         if (doc.exists) {
//             // // marksmssg = marksmssg + "<h3>" + sub + "</h3>";
//             // console.log("Document data:", doc.data());
//             if (doc.data().topic1 != undefined) {
//                 // marksmssg += "<strong>Topic 1: </strong>" + doc.data().topic1;
//                 arr.push(doc.data().topic1);
//             } else {
//                 arr.push(0);
//             }
//             if (doc.data().topic2 != undefined) {
//                 // marksmssg += "<br><strong>Topic 2: </strong>" + doc.data().topic2;
//                 arr.push(doc.data().topic2);
//             } else {
//                 arr.push(0);
//             }
//             if (doc.data().topic3 != undefined) {
//                 // marksmssg += "<br><strong>Topic 3: </strong>" + doc.data().topic3;
//                 arr.push(doc.data().topic3);
//             } else {
//                 arr.push(0);
//             }
//             if (doc.data().topic4 != undefined) {
//                 // marksmssg += "<br><strong>Topic 4: </strong>" + doc.data().topic4;
//                 arr.push(doc.data().topic4);
//             } else {
//                 arr.push(0);
//             }
//             if (doc.data().topic5 != undefined) {
//                 // marksmssg += "<br><strong>Topic 5: </strong>" + doc.data().topic5;
//                 arr.push(doc.data().topic5);
//             } else {
//                 arr.push(0);
//             }
//         } else {
//             // doc.data() will be undefined in this case
//             console.log("No such document!");
//             // marksmssg += "<br>No marks given to the subject " + sub + "<br>"
//         }
//     }).then(function() {
//         // p.innerHTML = marksmssg;
//         if (id == "c1" || id == "c2" || id == "c3" || id == "c4")
//             bargraph(arr, sub, id);
//         else
//             linegraph(arr, sub, id);
//     }).catch(function(error) {
//         console.log("Error getting document:", error);
//     });
// }

// function reset() {
//     var auth = firebase.auth();
//     var email = document.querySelector("#email");
//     var emailAddress = email.value;

//     auth.sendPasswordResetEmail(emailAddress).then(function() {
//         console.log("email sent");
//         alert("email sent successfully");
//     }).catch(function(error) {
//         // An error happened.
//     });
// }

// function uploadProfilePic(file) {

//     user = firebase.auth().currentUser;
//     var sp = document.getElementById("uploading");
//     var storageRef = firebase.storage().ref(user.uid + '/profilePic/' + 'profilePic.jpg');

//     // Upload file
//     var task = storageRef.put(file);
//     task.on(
//         'state_changed',

//         function progress(snapshot) {
//             var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//             // uploader.value = percentage;
//             //if percentage = 100
//             //$(".overlay").hide();         
//         },
//         function error(err) {},
//         function complete() {
//             storageRef.getDownloadURL().then(function(url) {
//                 user.updateProfile({
//                     photoURL: url
//                 }).then(function() {
//                     alert("Uploaded Successfully");
//                 }).catch(function(error) {
//                     alert("Failed to upload");
//                 });
//                 // console.log(user.photoURL);
//                 // console.log(user);
//             }).catch(function(error) {});
//         }
//     );
// }