import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';
import { Deadline } from '../types/Deadline';
import { auth, db } from '../config/firebase.config';

export class FirestoreService {
  static deadlinesCol = collection(db, 'deadlines');

  public static async getDeadlines() {
    try {
      const data = await getDocs(query(collection(db, 'deadlines'), where('userId', '==', auth.currentUser?.uid || '')));
      console.log('ADANE');
      return data.docs.map(doc => doc.data() as Deadline);
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  public static async addDeadline(deadline: Deadline) {
    try {
      addDoc(collection(db, 'deadlines'), deadline);
    } catch (error) {
      console.error(error);
    }
  }
}
