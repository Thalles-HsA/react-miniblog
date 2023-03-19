import { initializeApp } from "firebase/app";

import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC9hQBdSHVTLERBaihM8Klzkptmv1yxGp8",
    authDomain: "miniblog-73e54.firebaseapp.com",
    projectId: "miniblog-73e54",
    storageBucket: "miniblog-73e54.appspot.com",
    messagingSenderId: "259480934246",
    appId: "1:259480934246:web:03de5cdba18d89e5119aa7"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };