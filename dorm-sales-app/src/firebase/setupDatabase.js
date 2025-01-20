import { initializeDefaultData } from './services.js';

console.log('Starting database initialization...');

initializeDefaultData()
    .then(() => {
        console.log('Database initialized successfully!');
        process.exit(0);
    })
    .catch((error) => {
        console.error('Error initializing database:', error);
        process.exit(1);
    });
