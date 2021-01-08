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
        var profilePic = document.querySelector(".userImg");
        var userName = document.querySelector(".userName");
        var email = document.querySelector(".email");

        if (user.photoURL != null) {
            userPic.src = null;
            userPic.src = user.photoURL;
            profilePic.src = user.photoURL;

        } else {
            userPic.src = "/algodaddy/images/user2.png";
        }

        profileSignIn.style.display = "none";
        profileName.style.display = "inline";
        var name = document.querySelector("#userName");
        name.innerHTML = user.displayName;
        userName.innerText = user.displayName;
        email.innerHTML = "<i class='fas fa-envelope'></i> " + user.email;

        showBarGraph();
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
    }
});

function loadFile(event) {
    var file = event.target.files[0];
    uploadProfilePic(file);

}

function showBarGraph() {
    var div1 = document.getElementById("d1");
    div1.style.display = "none";
    var p = document.querySelector(".resultPlaceholder");
    p.style.display = "none";

    var arr = [];
    sub = "TOC";
    show(sub, arr, "d1");
}

function show(sub, arr, id) {
    arr = [];

    var userId = firebase.auth().currentUser.uid;

    var database = firebase.database();
    database.ref("Marks/" + userId).on('value', (snapshot) => {
        if (snapshot.exists()) {
            if (snapshot.val().TOC.Module1 == undefined || (snapshot.val().TOC.Module1.marks == undefined)) {
                arr.push(0);
            } else {
                arr.push(snapshot.val().TOC.Module1.marks);
                console.log(arr);
            }
            if (snapshot.val().TOC.Module2 == undefined || (snapshot.val().TOC.Module2.marks == undefined)) {
                arr.push(0);
            } else {
                arr.push(snapshot.val().TOC.Module2.marks);
            }
            if (snapshot.val().TOC.Module3 == undefined || (snapshot.val().TOC.Module3.marks == undefined)) {
                arr.push(0);
            } else {
                arr.push(snapshot.val().TOC.Module3.marks);
            }
            if (snapshot.val().TOC.Module4 == undefined || (snapshot.val().TOC.Module4.marks == undefined)) {
                arr.push(0);
            } else {
                arr.push(snapshot.val().TOC.Module4.marks);
            }
            if (snapshot.val().TOC.Module5 == undefined || (snapshot.val().TOC.Module5.marks == undefined)) {
                arr.push(0);
            } else {
                arr.push(snapshot.val().TOC.Module5.marks);
            }
            console.log(arr);
            bargraph(arr, sub, id);


        } else {
            var p = document.querySelector(".resultPlaceholder");
            p.style.display = "block";
            console.log("Not present");

        }
    });

}

function bargraph(arr, title, id) {
    var div1 = document.getElementById("d1");
    div1.style.display = "block";
    CanvasJS.addColorSet("greenShades", [ //colorSet Array

        "#1accf0",
        "#1a9ef0",
        "#1a61f0",
        "#1a5af0",

        "#093294"

    ]);
    var chart = new CanvasJS.Chart(id, {
        animationEnabled: true,
        theme: "light2", // "light1", "light2", "dark1", "dark2"
        colorSet: "greenShades",
        title: {
            text: title
        },

        axisY: {
            title: "marks",
            maximum: 100,
            minimum: -1,
            interval: 20
        },

        data: [{
            type: "column",
            showInLegend: true,
            legendMarkerColor: "grey",
            legendText: "Marks are in percentage",
            dataPoints: [{
                y: Number(arr[0] * 10),
                label: "Topic 1"
            }, {
                y: Number(arr[1] * 10),
                label: "Topic 2"
            }, {
                y: Number(arr[2] * 10),
                label: "Topic 3"
            }, {
                y: Number(arr[3] * 10),
                label: "Topic 4"
            }, {
                y: Number(arr[4] * 10),
                label: "Topic 5"
            }]
        }]
    });
    chart.render();
}

function uploadProfilePic(file) {

    user = firebase.auth().currentUser;
    var sp = document.getElementById("uploading");
    var storageRef = firebase.storage().ref(user.uid + '/profilePic/' + 'profilePic.jpg');

    // Upload file
    var task = storageRef.put(file);
    task.on(
        'state_changed',

        function progress(snapshot) {
            var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            // uploader.value = percentage;
            //if percentage = 100
            //$(".overlay").hide();         
        },
        function error(err) {},
        function complete() {
            storageRef.getDownloadURL().then(function(url) {
                user.updateProfile({
                    photoURL: url
                }).then(function() {
                    alert("Uploaded Successfully");
                    window.location.reload();
                }).catch(function(error) {
                    alert("Failed to upload");
                });
                // console.log(user.photoURL);
                // console.log(user);
            }).catch(function(error) {});
        }
    );
}

function checkName() {
    var name = document.querySelector("#newName");
    if (name.value == "") {
        alert("Please fill it");
        return false;
    } else {
        // alert("All correct " + name.value);
        var user = firebase.auth().currentUser;
        if (user != null) {
            user.updateProfile({
                displayName: name.value
            }).then(function() {
                $("#myModal").modal("hide");
                alert("Updated successfully");
                window.location.reload();
            });
        }

        return true;
    }
}

function Logout() {
    firebase.auth().signOut();
    history.back();
}