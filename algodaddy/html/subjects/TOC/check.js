function checkModule1() {
    if (firebase.auth().currentUser) {
        var userId = firebase.auth().currentUser.uid;

        var database = firebase.database();
        database.ref("Marks/" + userId).on('value', (snapshot) => {
            if (snapshot.exists()) {
                if (snapshot.val().TOC.Module1 == undefined || (!snapshot.val().TOC.Module1.attempted)) {
                    console.log("Not present");
                    window.location = "quiz/quiz1.html";
                } else {
                    alert("Already attempted");
                }
            } else {
                console.log("Not present");
                // alert("You can attempt only once..");
                window.location = "quiz/quiz1.html";
            }
        });
    } else {
        alert("Please do login first");
    }

}

function checkModule2() {
    if (firebase.auth().currentUser) {
        var userId = firebase.auth().currentUser.uid;

        var database = firebase.database();
        database.ref("Marks/" + userId).on('value', (snapshot) => {
            if (snapshot.exists()) {
                if (snapshot.val().TOC.Module2 == undefined || (!snapshot.val().TOC.Module2.attempted)) {
                    console.log("Not present");
                    window.location = "quiz/quiz2.html";
                } else {
                    alert("Already attempted");
                }
            } else {
                console.log("Not present");
                window.location = "quiz/quiz2.html";
            }
        });
    } else {
        alert("Please do login first");
    }

}


function checkModule3() {
    if (firebase.auth().currentUser) {
        var userId = firebase.auth().currentUser.uid;

        var database = firebase.database();
        database.ref("Marks/" + userId).on('value', (snapshot) => {
            if (snapshot.exists()) {
                if (snapshot.val().TOC.Module3 == undefined || (!snapshot.val().TOC.Module3.attempted)) {
                    console.log("Not present");
                    window.location = "quiz/quiz3.html";
                } else {
                    alert("Already attempted");
                }
            } else {
                console.log("Not present");
                window.location = "quiz/quiz3.html";
            }
        });
    } else {
        alert("Please do login first");
    }

}


function checkModule4() {
    if (firebase.auth().currentUser) {
        var userId = firebase.auth().currentUser.uid;

        var database = firebase.database();
        database.ref("Marks/" + userId).on('value', (snapshot) => {
            if (snapshot.exists()) {
                if (snapshot.val().TOC.Module4 == undefined || (!snapshot.val().TOC.Module4.attempted)) {
                    console.log("Not present");
                    window.location = "quiz/quiz4.html";

                } else {
                    alert("Already attempted");
                }
            } else {
                console.log("Not present");
                window.location = "quiz/quiz4.html";
            }
        });
    } else {
        alert("Please do login first");
    }

}


function checkModule5() {
    if (firebase.auth().currentUser) {
        var userId = firebase.auth().currentUser.uid;

        var database = firebase.database();
        database.ref("Marks/" + userId).on('value', (snapshot) => {
            if (snapshot.exists()) {
                if (snapshot.val().TOC.Module5 == undefined || (!snapshot.val().TOC.Module5.attempted)) {
                    console.log("Not present");
                    window.location = "quiz/quiz5.html";

                } else {
                    alert("Already attempted");
                }
            } else {
                console.log("Not present");
                window.location = "quiz/quiz5.html";
            }
        });
    } else {
        alert("Please do login first");
    }

}