//Code for Sign up module

function btnSignUp() {
    var fname = document.querySelector("#fn").value;
    var sname = document.getElementById("sn").value;
    var email = document.getElementById("email").value;
    var pwd = document.getElementById("pwd").value;
    var cpwd = document.getElementById("cpwd").value;
    // var btnsignup = document.querySelector("button").value;
    if (fname == "" || sname == "" || email == "" || pwd == "" || cpwd == "") {
        alert("Please fill all the fields");
    } else if (pwd != cpwd)
        alert("Please check your pasword again");
    else {
        alert("all fields are OK");
        createUser();
    }

    function createUser() {
        firebase.auth().createUserWithEmailAndPassword(email, pwd)
            .then(() => {
                var user = firebase.auth().currentUser;
                if (user != null) {
                    user.updateProfile({
                        displayName: fname + " " + sname
                    }).then(function() {
                        console.log("Updated");
                    }, function(error) {
                        console.log("Error happened");
                    });
                }
                alert("Account created successfully");
                if (!user.emailVerified) {
                    alert("your email is not verified\nLink has been sent on the given email");
                    user.sendEmailVerification().then(function() {
                        // Email Verification sent!
                        // [START_EXCLUDE]
                        alert('Email Verification Sent!');
                        // [END_EXCLUDE]
                    });
                }
            }).catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode);
                console.log(errorMessage);
                alert(errorMessage);
                return;
                // ...
            });
    }
}



//For sign in
function signin() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("pwd").value;
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(function() {
            user = firebase.auth().currentUser;
            if (user.emailVerified) {
                window.location = "welcome.html";
            } else {
                alert("Please verify your email");
                return;
            }
        })
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage);
            // ...
        });
}

//Profile Page
function showBarGraph() {
    //for bar graph
    var div1 = document.getElementById("d1");
    div1.style.display = "none";
    var div2 = document.getElementById("d2");
    div2.style.display = "none";
    var div3 = document.getElementById("d3");
    div3.style.display = "none";
    var div4 = document.getElementById("d4");
    div4.style.display = "none";
    var div5 = document.getElementById("c1");
    div5.style.display = "block";
    var div6 = document.getElementById("c2");
    div6.style.display = "block";
    var div7 = document.getElementById("c3");
    div7.style.display = "block";
    var div8 = document.getElementById("c4");
    div8.style.display = "block";
    var arr = [];
    sub = "Theory Of Computation";
    show(sub, arr, "c1");
    sub = "Database Management System";
    p = document.getElementById("p2");
    show(sub, arr, "c2");
    sub = "Cyber Security";
    p = document.getElementById("p3");
    show(sub, arr, "c3");
    sub = "Internet And Web Technology";
    p = document.getElementById("p4");
    show(sub, arr, "c4");

}

function showLineGraph() {
    //for line graph
    var div1 = document.getElementById("d1");
    div1.style.display = "block";
    var div2 = document.getElementById("d2");
    div2.style.display = "block";
    var div3 = document.getElementById("d3");
    div3.style.display = "block";
    var div4 = document.getElementById("d4");
    div4.style.display = "block";
    var div5 = document.getElementById("c1");
    div5.style.display = "none";
    var div6 = document.getElementById("c2");
    div6.style.display = "none";
    var div7 = document.getElementById("c3");
    div7.style.display = "none";
    var div8 = document.getElementById("c4");
    div8.style.display = "none";
    var arr = [];
    sub = "Theory Of Computation";
    show(sub, arr, "d1");
    sub = "Database Management System";
    p = document.getElementById("p2");
    show(sub, arr, "d2");
    sub = "Cyber Security";
    p = document.getElementById("p3");
    show(sub, arr, "d3");
    sub = "Internet And Web Technology";
    p = document.getElementById("p4");
    show(sub, arr, "d4");
}


function bargraph(arr, title, id) {
    CanvasJS.addColorSet("greenShades", [ //colorSet Array

        "#eb5a52",
        "#f7d00c",
        "#2E8B57",
        "#1fcff2",
        "#2e2f82"
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
                y: Number(arr[0]),
                label: "Topic 1"
            }, {
                y: Number(arr[1]),
                label: "Topic 2"
            }, {
                y: Number(arr[2]),
                label: "Topic 3"
            }, {
                y: Number(arr[3]),
                label: "Topic 4"
            }, {
                y: Number(arr[4]),
                label: "Topic 5"
            }]
        }]
    });
    chart.render();
}

function linegraph(arr, title, id) {
    var chart = new CanvasJS.Chart(id, {
        animationEnabled: true,
        theme: "light2",
        title: {
            text: title,
        },
        axisY: {
            title: "marks",
            maximum: 110,
            minimum: 0,
            interval: 20
        },
        data: [{
            type: "line",
            indexLabelFontSize: 16,
            dataPoints: [{
                y: Number(arr[0]),
                label: "Topic 1"
            }, {
                y: Number(arr[1]),
                label: "Topic 2"
            }, {
                y: Number(arr[2]),
                label: "Topic 3"
            }, {
                y: Number(arr[3]),
                label: "Topic 4"
            }, {
                y: Number(arr[4]),
                label: "Topic 5"
            }]
        }]
    });
    chart.render();
}

function showUser(user) {
    var p = document.querySelector("#mssg");
    p.textContent = user.displayName;
    var e = document.querySelector("#email");
    e.textContent = user.email;
    var img = document.querySelector("#i1");
    if (user.photoURL != null) {
        img.src = user.photoURL;
    }

}

function loadFile(event) {
    var image = document.getElementById('i1');
    var file = event.target.files[0];
    image.src = URL.createObjectURL(file);
    uploadProfilePic(file);

}

function addMarks() {
    var marks = document.getElementById("marks").value;
    var sub = document.getElementById("subject");
    var t = document.getElementById("topic");

    add(marks, sub.options[sub.selectedIndex].text, t.options[t.selectedIndex].text);
}