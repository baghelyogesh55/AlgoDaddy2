const firebaseConfig = {
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



firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        var profileName = document.querySelector(".profileName");
        var profileSignIn = document.querySelector(".profileSignIn");
        var userPic = document.querySelector("#userPic");

        if (user.photoURL != null) {
            userPic.src = null;
            userPic.src = user.photoURL;
        } else {
            userPic.src = "/images/user2.png";
        }

        profileSignIn.style.display = "none";
        profileName.style.display = "inline";
        var name = document.querySelector("#userName");
        name.innerHTML = user.displayName;
        // alert("User is present " + user.displayName);

    } else {
        if (window.location.pathname != "/html/login/login.html") {
            var profileSignIn = document.querySelector(".profileSignIn");
            profileSignIn.style.display = "inline";
            var profileName = document.querySelector(".profileName");
            profileName.style.display = "none";
        } else {
            console.log("Yes");
        }
        // window.location = "../index.html";
        // firebase.auth().signOut();
    }
});


function Logout() {
    firebase.auth().signOut();
}