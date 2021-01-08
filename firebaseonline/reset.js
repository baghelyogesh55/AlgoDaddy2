document.addEventListener('DOMContentLoaded', function() {
    // TODO: Implement getParameterByName()

    // Get the action to complete.
    var mode = getParameterByName('mode');
    // Get the one-time code from the query parameter.
    var actionCode = getParameterByName('oobCode');
    // (Optional) Get the continue URL from the query parameter if available.
    var continueUrl = getParameterByName('continueUrl');
    // (Optional) Get the language code if available.
    var lang = getParameterByName('lang') || 'en';

    // Configure the Firebase SDK.
    // This is the minimum configuration required for the API to be used.
    var config = {
        apiKey: "AIzaSyBhuDSvKy4ImuhyJUHYSuVDZPp94UnKRIA",
        authDomain: "algodaddy2.firebaseapp.com",
        databaseURL: "https://algodaddy2.firebaseio.com",
        projectId: "algodaddy2",
        storageBucket: "algodaddy2.appspot.com",
        messagingSenderId: "1044916362292",
        appId: "1:1044916362292:web:bfca5b6111bb1d7d6cfe61"
    };
    var app = firebase.initializeApp(config);
    var auth = app.auth();

    // Handle the user management action.
    switch (mode) {
        case 'resetPassword':
            // Display reset password handler and UI.
            handleResetPassword(auth, actionCode, continueUrl, lang);
            break;
        case 'recoverEmail':
            // Display email recovery handler and UI.
            handleRecoverEmail(auth, actionCode, lang);
            break;
        case 'verifyEmail':
            // Display email verification handler and UI.
            handleVerifyEmail(auth, actionCode, continueUrl, lang);
            break;
        default:
            // Error: invalid mode.
    }
}, false);