firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        var p = document.querySelector("#mssg");
        p.textContent = "Hello, " + user.displayName;
    } else {
        // User is signed out.
        // redirect to login
        // alert("User logged out");
        window.location = "../index.html";
        // firebase.auth().signOut();
    }
});

function signOut() {
    firebase.auth().signOut();
}