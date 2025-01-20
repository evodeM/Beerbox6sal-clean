# Beerbox6sal - Room Purchase System

A React-based web application for managing room purchases and inventory in a dormitory setting.

## Project Overview

This application provides a tablet-optimized interface for:
- Viewing available rooms in a grid layout
- Managing room purchases
- Tracking purchase history
- Real-time balance updates

## Prerequisites

- Node.js (v16 or higher)
- npm (v8 or higher)
- Firebase account with Firestore database

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/evodeM/Beerbox6sal-clean.git
   cd Beerbox6sal-clean
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Firebase Setup**
   - Create a new Firebase project at [Firebase Console](https://console.firebase.google.com)
   - Enable Firestore Database
   - Create a service account and download the serviceAccount.json
   - Place serviceAccount.json in the project root
   - Copy the Firebase configuration:
     ```javascript
     // src/firebase/config.js
     export const firebaseConfig = {
       apiKey: "your-api-key",
       authDomain: "your-auth-domain",
       projectId: "your-project-id",
       storageBucket: "your-storage-bucket",
       messagingSenderId: "your-messaging-sender-id",
       appId: "your-app-id"
     };
     ```

4. **Environment Setup**
   - Create a .env file in the root directory
   - Add your Firebase configuration:
     ```
     VITE_FIREBASE_API_KEY=your-api-key
     VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
     VITE_FIREBASE_PROJECT_ID=your-project-id
     VITE_FIREBASE_STORAGE_BUCKET=your-storage-bucket
     VITE_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
     VITE_FIREBASE_APP_ID=your-app-id
     ```

5. **Start Development Server**
   ```bash
   npm run dev
   ```
   Access the application at http://localhost:5173/Beerbox6sal/

## Project Structure

```
src/
├── components/
│   └── tablet/
│       ├── RoomGrid.jsx      # Grid view of all rooms
│       ├── RoomPurchase.jsx  # Purchase interface for individual rooms
│       └── TabletLayout.jsx  # Main layout component
├── firebase/
│   ├── config.js            # Firebase configuration
│   └── services.js          # Firebase service functions
├── hooks/
│   └── useFirestore.js      # Custom hook for Firestore operations
└── App.jsx                  # Main application component
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Troubleshooting

1. **Firebase Connection Issues**
   - Verify your serviceAccount.json is correctly placed
   - Check Firebase configuration in config.js
   - Ensure Firestore rules allow read/write access

2. **Build Issues**
   - Clear npm cache: `npm cache clean --force`
   - Delete node_modules and reinstall: `rm -rf node_modules && npm install`

## Contributing

1. Create a new branch for your feature
2. Make your changes
3. Submit a pull request

## License

MIT License - See LICENSE file for details
