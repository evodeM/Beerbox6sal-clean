import { initializeDefaultData } from './services.js';

console.log('Initialiserer database...');
initializeDefaultData()
  .then(() => {
    console.log('Database er blevet initialiseret!');
  })
  .catch((error) => {
    console.error('Fejl ved initialisering af database:', error);
  });
