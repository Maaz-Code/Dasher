const auth = firebase.auth();

const whenSignedIn = document.getElementById('whenSignedIn');
const whenSignedOut = document.getElementById('whenSignedOut');

const signInbtn = document.getElementById('signInbtn');
const signOutbtn = document.getElementById('signOutbtn');

const userDetails = document.getElementById('userDetails');
const yourGames = document.getElementById('yourGames');
const filler = document.getElementById('filler');
const symbol = document.getElementById('symbol');
const yourLinks = document.getElementById('yourLinks');

const provider = new firebase.auth.GoogleAuthProvider();
signInbtn.onclick = () => auth.signInWithPopup(provider);
signOutbtn.onclick = () => auth.signOut();

auth.onAuthStateChanged (user => {
    if (user) {
        symbol.hidden = true;
        filler.hidden = true;
        yourGames.hidden = false;
        yourLinks.hidden = false;
        whenSignedIn.hidden = false;
        whenSignedOut.hidden = true;
        userDetails.innerHTML = `<h1>${user.displayName}</h1> <p>${user.email}</p>`;
    } 
    else {
        symbol.hidden = false;
        filler.hidden = false;
        yourGames.hidden = true;
        yourLinks.hidden = true;
        whenSignedIn.hidden = true;
        whenSignedOut.hidden = false;
        userDetails.innerHTML = '<h1>Profile</h1> <br>';
    }
});