import { initializeApp} from 'firebase/app'

const firebaseConfig={ 


}

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
var firebase = require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/firestore");

const app = initializeApp(firebaseConfig);