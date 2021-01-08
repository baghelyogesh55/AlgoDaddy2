function btnLogin() {
    var email = document.querySelector("#loginemail").value;
    var pwd = document.querySelector("#loginpwd").value;
    console.log(email);
    console.log(pwd);

    if (email == "" || pwd == "") {
        alert("Please fill all the fields");
    } else {
        firebase.auth().signInWithEmailAndPassword(email, pwd)
            .then(function() {
                user = firebase.auth().currentUser;
                if (user.emailVerified) {
                    alert("Logged in successfully")
                    history.back();
                    return;

                } else {
                    alert("Please verify your email first");
                    Logout();
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
}


function btnSignUp() {
    var fullname = document.querySelector("#signupName").value;
    var email = document.querySelector("#signupEmail").value;
    var pwd = document.querySelector("#signupPwd").value;
    var cnfPwd = document.querySelector("#signupCnfPwd").value;

    console.log("name = " + fullname);
    console.log("email = " + email);
    console.log("password = " + pwd);
    console.log("confirm password = " + cnfPwd);

    if (fullname == "" || email == "" || pwd == "" || cnfPwd == "") {
        alert("Please fill all the fields");
    } else if (pwd != cnfPwd)
        alert("Please check your pasword again");
    else {
        createUser();
    }

    function createUser() {
        firebase.auth().createUserWithEmailAndPassword(email, pwd)
            .then(() => {
                    var user = firebase.auth().currentUser;
                    if (user != null) {
                        user.updateProfile({
                            displayName: fullname
                        }).then(function() {
                            alert("Account Created Successfully !!\nPlease do verify your email..");
                            if (!user.emailVerified) {
                                // alert("your email is not verified\nLink has been sent on the given email");
                                user.sendEmailVerification().then(function() {
                                    // Email Verification sent!
                                    // [START_EXCLUDE]
                                    alert('Email Verification Sent!');
                                    Logout();
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
                        }).then(function() {
                            Logout();
                            window.location = "../../index.html";
                            console.log("Updated");
                        });

                    }
                },
                function(error) {
                    console.log("Some problem occurred while creating your account..\nPlease try again after some time");
                });
    }


};

function sendVerificationLink() {
    // alert("I am called");
    var email = document.querySelector("#loginemail").value;
    var pwd = document.querySelector("#loginpwd").value;
    console.log(email);
    console.log(pwd);

    if (email == "" || pwd == "") {
        alert("Please fill all the fields");
    } else {
        firebase.auth().signInWithEmailAndPassword(email, pwd)
            .then(function() {
                user = firebase.auth().currentUser;

                if (!user.emailVerified) {
                    // alert("your email is not verified\nLink has been sent on the given email");
                    user.sendEmailVerification().then(function() {
                        // Email Verification sent!
                        // [START_EXCLUDE]
                        alert('Email Verification Sent!');
                        Logout();
                        // [END_EXCLUDE]
                    }).catch(function(error) {
                        // Handle Errors here.
                        var errorCode = error.code;
                        var errorMessage = error.message;
                        console.log(errorCode);
                        console.log(errorMessage);
                        alert(errorMessage);
                        return;
                        // ...
                    }).then(function() {
                        Logout();
                        window.location = "../../index.html";
                        console.log("Updated");
                    });

                    return;
                } else {
                    alert("Your account is already verified!!")
                    history.back();
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
}

function reset() {
    var auth = firebase.auth();
    var email = document.querySelector("#loginemail").value;

    if (email == "") {
        alert("Please enter your email address");
    } else {
        auth.sendPasswordResetEmail(email).then(function() {
            console.log("email sent");
            alert("Email sent successfully!!\nCheck your mail");
            window.location = "../../index.html";
        }).catch(function(error) {
            // An error happened.
        });
    }
}