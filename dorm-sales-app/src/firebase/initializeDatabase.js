import { db } from './config.js';
import { collection, doc, setDoc, addDoc, serverTimestamp } from 'firebase/firestore';

const initializeDatabase = async () => {
    try {
        // Initialize Products Collection
        const products = [
            { id: 'beer', name: 'Beer', price: 7 },
            { id: 'soda', name: 'Soda', price: 5 },
            { id: 'snacks', name: 'Snacks', price: 10 },
            { id: 'water', name: 'Water', price: 3 }
        ];

        for (const product of products) {
            await setDoc(doc(db, 'products', product.id), {
                name: product.name,
                price: product.price
            });
        }

        // Initialize Rooms (601-628)
        for (let roomNum = 601; roomNum <= 628; roomNum++) {
            await setDoc(doc(db, 'rooms', roomNum.toString()), {
                occupantName: '',
                balance: 0,
                lastPurchase: {
                    productName: '',
                    amount: 0,
                    timestamp: serverTimestamp()
                }
            });
        }

        // Initialize Admin Config
        await setDoc(doc(db, 'adminConfig', 'general'), {
            mobilePayPhoneNumber: '12345678',  // Default number, should be changed by admin
            adminPassword: 'admin123'          // Default password, should be changed immediately
        });

        // Initialize Purchases Collection with a sample purchase
        const purchasesRef = collection(db, 'purchases');
        await addDoc(purchasesRef, {
            roomId: '601',
            productId: 'beer',
            productName: 'Beer',
            amount: 7,
            timestamp: serverTimestamp()
        });

        console.log('Database initialized successfully!');
    } catch (error) {
        console.error('Error initializing database:', error);
    }
};

export const resetDatabase = async () => {
    try {
        // Reset all room balances to 0
        for (let roomNum = 601; roomNum <= 628; roomNum++) {
            await setDoc(doc(db, 'rooms', roomNum.toString()), {
                occupantName: '',  // Keep existing occupant name
                balance: 0,
                lastPurchase: {
                    productName: '',
                    amount: 0,
                    timestamp: serverTimestamp()
                }
            }, { merge: true });
        }
        console.log('Database reset successfully!');
    } catch (error) {
        console.error('Error resetting database:', error);
    }
};

export default initializeDatabase;
