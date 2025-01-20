importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyDgVwDyD1mDBl-J_C6kGvMPsgS7DkNvibg",
  authDomain: "fridge6sal-5b0f6.firebaseapp.com",
  projectId: "fridge6sal-5b0f6",
  storageBucket: "fridge6sal-5b0f6.firebasestorage.app",
  messagingSenderId: "757651497587",
  appId: "1:757651497587:web:43bbd10fad974cad7ec006"
});

const messaging = firebase.messaging();

// Handle background messages
messaging.onBackgroundMessage((payload) => {
  console.log('Received background message:', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/icon-192x192.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
