const auth = firebase.auth();

const whenSignedIn = document.getElementById('whenSignedIn');
const whenSignedOut = document.getElementById('whenSignedOut');

const signInbtn = document.getElementById('signInbtn');
const signOutbtn = document.getElementById('signOutbtn');

const userDetails = document.getElementById('userDetails');

const provider = new firebase.auth.GoogleAuthProvider();
signInbtn.onclick = () => auth.signInWithPopup(provider);
signOutbtn.onclick = () => auth.signOut();

auth.onAuthStateChanged (user => {
    if (user) {
        whenSignedIn.hidden = false;
        whenSignedOut.hidden = true;
        userDetails.innerHTML = `<h3>${user.displayName}</h3>`;
    } 
    else {
        whenSignedIn.hidden = true;
        whenSignedOut.hidden = false;
        userDetails.innerHTML = '';
    }
});