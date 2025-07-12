// Replace with your actual Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyBo8PGp2jCVPAMFfTHtnKtpIs3H6aPGS00",
    authDomain: "eplq-complete.firebaseapp.com",
    projectId: "eplq-complete",
    storageBucket: "eplq-complete.firebasestorage.app",
    messagingSenderId: "72337645510",
    appId: "1:72337645510:web:b0a1bf03408065f0151cc7",
    measurementId: "G-17JRF0ZWL4"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();