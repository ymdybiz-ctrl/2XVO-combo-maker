// firebase/firebase-init.js
// Firebase 初期化
const firebaseConfig = {
  apiKey: "AIzaSyCHrqubxlCglYv8tH9DhDxji5n4DNV17v4",
  authDomain: "xko-combo-maker.firebaseapp.com",
  projectId: "xko-combo-maker",
  storageBucket: "xko-combo-maker.firebasestorage.app",
  messagingSenderId: "547184848898",
  appId: "1:547184848898:web:29ba9ad0ce9e9184a7b71b",
  measurementId: "G-S42GVQPG6K"
};


// 初期化
firebase.initializeApp(firebaseConfig);

// Firestore 参照用
const db = firebase.firestore();
