// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjNdweJjdItecGNAg_b98aVt619JaRj0c",
  authDomain: "newsletterdesign-ced9e.firebaseapp.com",
  projectId: "newsletterdesign-ced9e",
  storageBucket: "newsletterdesign-ced9e.appspot.com",
  messagingSenderId: "181614447003",
  appId: "1:181614447003:web:019bce0a5844b60ed9f93e",
  measurementId: "G-J6XC28QCB3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const  getAnalytics = getAnalytics(app);

function clicked() {
}

let submitButton = document.getElementById("submit");

//Create Event Listener To Allow Form Submission
submitButton.addEventListener("click", (e) => {
  //Prevent Default Form Submission Behavior
  e.preventDefault();

  //Get Form Values
  let firstName = document.getElementById("fname").value;
  let lastName = document.getElementById("lname").value;
  let country = document.getElementById("country").value;

  firestore
    .collection("fomData")
    .get()
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        const fn = doc.data().fname;
        if (firstName === fn) {
          console.log("Already Exists");
        }

        // console.log("data", doc.data().fname);
      });
    });
  //Save Form Data To Firebase
  db.doc()
    .set({
      fname: firstName,
      lname: lastName,
      country: country,
    })
    .then(() => { })
    .catch((error) => {
      console.log(error);
    });

  //alert
  alert("Your Form Has Been Submitted Successfully");

  //clear form after submission
  function clearForm() {
    document.getElementById("clearFrom").reset();
  }
  clearForm()
});