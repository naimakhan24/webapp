// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/7.6.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.6.1/firebase-messaging.js');

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaxf4HlNhXAwnZqdoSR4aD_p3I470qaD8",
  authDomain: "chatapp-59067.firebaseapp.com",
  projectId: "chatapp-59067",
  storageBucket: "chatapp-59067.appspot.com",
  messagingSenderId: "977157519238",
  appId: "1:977157519238:web:38bb661fde527822305e07"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    const notificationTitle = 'You have new message';
    const notificationOptions = {
        body: payload.data.message,
        icon: payload.data.icon
    };

    return self.registration.showNotification(notificationTitle,
        notificationOptions);
});



