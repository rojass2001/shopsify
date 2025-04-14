"use client"
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDYsOqWKxCfd1KhhY-XBxHNcBT_S8g99oU",
  authDomain: "shopsifys.firebaseapp.com",
  projectId: "shopsifys",
  storageBucket: "shopsifys.firebasestorage.app",
  messagingSenderId: "288086654156",
  appId: "1:288086654156:web:7e8fc185ac2e8be2889669"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export {auth}