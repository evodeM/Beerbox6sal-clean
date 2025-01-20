# Dorm Sales App

A real-time sales tracking application for dorm residents. Built with React and Firebase.

## Live Demo
Visit the live application at: https://evodem.github.io/Beerbox6sal-clean/

## Features

- Real-time purchase tracking
- Room-based balance management
- Product catalog (Beer, Soda, Snacks, Water)
- Instant balance updates
- Offline capability
- Clean and modern UI
- Mobile-responsive design

## Firebase Setup

The app uses Firebase Firestore for real-time data storage. The database structure is:

- `rooms/`: Collection of rooms (601-628)
  - `occupantName`: String
  - `balance`: Number
  - `lastPurchase`: Object
    - `productName`: String
    - `amount`: Number
    - `timestamp`: Timestamp

- `products/`: Collection of available products
  - `name`: String
  - `price`: Number

- `purchases/`: Collection of all purchases
  - `roomId`: String
  - `productId`: String
  - `productName`: String
  - `amount`: Number
  - `timestamp`: Timestamp

## Development Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Open http://localhost:5173/

## Deployment

The app is deployed using GitHub Pages. To deploy new changes:

1. Make your changes and commit them
2. Run the deployment command:
   ```bash
   npm run deploy
   ```
3. The changes will be live in a few minutes at https://evodem.github.io/Beerbox6sal-clean/

## Firebase Configuration

1. Create a Firebase project
2. Enable Firestore database
3. Set up security rules in Firebase Console:
   ```javascript
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /{document=**} {
         allow read, write: if true;
       }
     }
   }
   ```

## Version History

### v1.0.0 - Initial Release
- Basic room management
- Product catalog
- Purchase tracking

### v1.1.0 - Real-time Updates
- Added real-time database connection
- Fixed Firebase permissions
- Added purchase logging
- Improved error handling

### v1.2.0 - UI Improvements & GitHub Pages
- Removed balance display from grid view
- Added crown indicator for highest balance
- Deployed to GitHub Pages
- Fixed routing for production deployment
