// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, GithubAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAcLBB658IwOtVw_9eQXrGCeexjEJZnxjU",
    authDomain: "tikone_hospital.firebaseapp.com",
    databaseURL: "https://Moms-canteen-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "tikone-hospital-interview-product",
    storageBucket: "tikone-hospital-product.appspot.com",
    messagingSenderId: "243356658973",
    appId: "1:243356658973:web:ab1e8bb14300041ccb45f4",
    measurementId: "G-YYJK8NGW22"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider)
        .then((result) => {
            const user = result.user;
            console.log(user);
            return user;
        })
        .catch((error) => {
            console.log(error);
            throw error;
        });
};

const signInWithGithub = () => {
    return signInWithPopup(auth, githubProvider)
        .then((result) => {
            const user = result.user;
            console.log(user);
            return user;
        })
        .catch((error) => {
            console.log(error);
            throw error;
        });
};

export { auth, signInWithGoogle, signInWithGithub };
