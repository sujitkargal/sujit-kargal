 
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js";
import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-database.js";

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAqU8zjSVJW2ZQwtqmH1pblJi9abuwEi20",
    authDomain: "sujit-portfolio.firebaseapp.com",
    databaseURL: "https://sujit-portfolio-default-rtdb.firebaseio.com",
    projectId: "sujit-portfolio",
    storageBucket: "sujit-portfolio.appspot.com",
    messagingSenderId: "499609286187",
    appId: "1:499609286187:web:11496e60a3a5a0a2d89c6e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const contactFormRef = ref(database, 'contactform');

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('form').addEventListener("submit", submitForm);
});

function submitForm(e) {
    e.preventDefault();

    const name = getElementVal('name');
    const email = getElementVal('email');
    const message = getElementVal('textarea');

    const newContactRef = push(contactFormRef);
    
    // Save data to Firebase
    set(newContactRef, {
        name: name,
        email: email,
        message: message
    }).then(() => {
        // Clear the form fields
        document.getElementById('form').reset();

        // Show success SweetAlert
        swal({
            title: "Success!",
            text: "Your message has been sent!",
            icon: "success",
            button: "OK",
        });
    }).catch((error) => {
        console.error('Error saving data: ', error);
        // Show error SweetAlert
        swal({
            title: "Error!",
            text: "There was a problem sending your message.",
            icon: "error",
            button: "Try Again",
        });
    });
}

const getElementVal = (id) => {
    return document.getElementById(id).value; // Use 'value' (lowercase)
};

// Add event listener for form submission
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('form').addEventListener("submit", submitForm);
});



