var em = document.getElementById("email");
var pwd = document.getElementById("pwd");
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
firebase.initializeApp(firebaseConfig);

function signup() {
    //get email and Password
    const email = em.value;
    const pass = pwd.value;
    const auth = firebase.auth();
    const promise = auth.createUserWithEmailAndPassword(email, pass);
    var user = firebase.auth().currentUser;
    user.sendEmailVerification();
    promise.catch(e => console.log(e.message));

    firebase.auth().onAuthStateChanged(function(user) {
        if (user.emailVerified) {
            console.log('Email is verified');
            console.log(user);
            alert("Confirmation link sent to your email");
        } else {
            window.location = "index.html";
            firebase.auth().signOut();
            alert("Email is not verified");
        }
    });
}
//Add a realtime listener
// user = firebase.auth().currentUser;