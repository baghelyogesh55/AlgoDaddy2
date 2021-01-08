firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        showUser(user);
    } else {
        // User is signed out.
        // redirect to login
        // alert("User logged out");
        window.location = "../index.html";
        firebase.auth().signOut();
    }
});