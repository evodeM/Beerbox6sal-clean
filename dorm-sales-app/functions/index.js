const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.sendPushNotification = functions.https.onRequest(async (req, res) => {
  // Enable CORS
  res.set('Access-Control-Allow-Origin', '*');
  
  if (req.method === 'OPTIONS') {
    res.set('Access-Control-Allow-Methods', 'POST');
    res.set('Access-Control-Allow-Headers', 'Content-Type');
    res.status(204).send('');
    return;
  }

  try {
    const { tokens, title, body, data } = req.body;

    if (!tokens || !tokens.length || !title || !body) {
      res.status(400).send('Missing required fields');
      return;
    }

    const message = {
      notification: {
        title,
        body,
      },
      data: data || {},
      tokens: tokens
    };

    const response = await admin.messaging().sendMulticast(message);
    
    console.log('Successfully sent messages:', response);
    res.status(200).json({ success: true, response });
  } catch (error) {
    console.error('Error sending notification:', error);
    res.status(500).send(error.message);
  }
});
