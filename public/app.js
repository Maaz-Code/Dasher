const auth = firebase.auth();

const whenSignedIn = document.getElementById('whenSignedIn');
const whenSignedOut = document.getElementById('whenSignedOut');

const signInbtn = document.getElementById('signInbtn');
const signOutbtn = document.getElementById('signOutbtn');

const userDetails = document.getElementById('userDetails');
const yourGames = document.getElementById('yourGames');
const filler = document.getElementById('filler');

const provider = new firebase.auth.GoogleAuthProvider();
signInbtn.onclick = () => auth.signInWithPopup(provider);
signOutbtn.onclick = () => auth.signOut();

auth.onAuthStateChanged (user => {
    if (user) {
        filler.hidden = true;
        yourGames.hidden = false;
        whenSignedIn.hidden = false;
        whenSignedOut.hidden = true;
        userDetails.innerHTML = `<h1>${user.displayName}</h1> <p>${user.email}</p>`;
    } 
    else {
        filler.hidden = false;
        yourGames.hidden = true;
        whenSignedIn.hidden = true;
        whenSignedOut.hidden = false;
        userDetails.innerHTML = '<h1>Profile</h1> <br>';
    }
});