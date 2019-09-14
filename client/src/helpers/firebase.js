import * as firebase from 'firebase';
const config = {
    apiKey: "AIzaSyAwsqAyJBRP2CYJ0ja2VryKfXfXJiBgr2Y",
    authDomain: "dancetime.firebaseapp.com",
    databaseURL: "https://dancetime.firebaseio.com",
    projectId: "dancetime",
    storageBucket: "dancetime.appspot.com",
    messagingSenderId: "880738924601",
    appId: "1:880738924601:web:e01654deb803614f1435e8"
};
firebase.initializeApp(config);
const databaseRef = firebase.database().ref();
export const leaderboards = databaseRef.child("leaderboards");
