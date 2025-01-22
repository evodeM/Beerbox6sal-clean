import { collection, query, where, orderBy, onSnapshot, updateDoc, doc } from 'firebase/firestore';
import { db } from '../firebase/config';

class NotificationService {
  constructor() {
    this.listeners = new Set();
    this.unsubscribe = null;
  }

  async subscribeToNotifications(roomId, callback) {
    if (this.unsubscribe) {
      this.unsubscribe();
    }

    const notificationsRef = collection(db, 'notifications');
    const q = query(
      notificationsRef,
      where('roomId', '==', roomId),
      orderBy('timestamp', 'desc')
    );

    this.unsubscribe = onSnapshot(q, (snapshot) => {
      const notifications = [];
      snapshot.forEach((doc) => {
        notifications.push({
          id: doc.id,
          ...doc.data()
        });
      });
      callback(notifications);
    });

    return () => {
      if (this.unsubscribe) {
        this.unsubscribe();
      }
    };
  }

  async markAsRead(notificationId) {
    try {
      const notificationRef = doc(db, 'notifications', notificationId);
      await updateDoc(notificationRef, {
        read: true,
        readAt: new Date()
      });
    } catch (error) {
      console.error('Error marking notification as read:', error);
      throw error;
    }
  }

  async markAllAsRead(roomId) {
    try {
      const notificationsRef = collection(db, 'notifications');
      const q = query(
        notificationsRef,
        where('roomId', '==', roomId),
        where('read', '==', false)
      );
      
      const snapshot = await getDocs(q);
      const batch = writeBatch(db);
      
      snapshot.forEach((doc) => {
        batch.update(doc.ref, {
          read: true,
          readAt: new Date()
        });
      });
      
      await batch.commit();
    } catch (error) {
      console.error('Error marking all notifications as read:', error);
      throw error;
    }
  }

  getUnreadCount(notifications) {
    return notifications.filter(n => !n.read).length;
  }
}

export const notificationService = new NotificationService();
