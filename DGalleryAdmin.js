document.getElementById("signUp").addEventListener("click", signUp)
document.getElementById("signIn").addEventListener("click", signIn)
document.getElementById("signOut").addEventListener("click", signOut)

firebase.auth().onAuthStateChanged(firebaseUser => {
    console.log("onauth!")
    if (firebaseUser) {
        document.getElementById("signOut").classList.remove("hidden")
        document.getElementById("signup").classList.add("hidden")

    } else {
        document.getElementById("signOut").classList.add("hidden")
        document.getElementById("signup").classList.remove("hidden")

    }
})

function signIn() {
    var email = document.getElementById("emailin").value
    console.log(email)
    var pass = document.getElementById("pass").value

    firebase.auth().signInWithEmailAndPassword(email, pass).then(function () {
        console.log("adentro")
        email.value = ""
        pass.value = ""
    }).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode + errorMessage)

    });
}

function signUp() {
    var email = document.getElementById("email").value
    console.log(email)
    var email2 = document.getElementById("email2").value
    var pass = document.getElementById("pass").value
    if (email === email2 && pass != "") {
        firebase.auth().createUserWithEmailAndPassword(email, pass).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode + errorMessage)

        });

    }

}
function signOut() {
    console.log("ffff")
    firebase.auth().signOut().then(function () {
        // Sign-out successful.
    }).catch(function (error) {
        // An error happened.
    });

}








