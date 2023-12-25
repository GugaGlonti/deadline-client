import { auth, db } from '../config/firebase.config';
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';

import { Deadline } from '../types/Deadline';

import ErrorHandler from '../common/ErrorHandler';

export class FirestoreService {
  public static async getDeadlines() {
    return ErrorHandler.run(async () => {
      const ref = collection(db, 'deadlines');
      const constraint = where('userId', '==', auth.currentUser?.uid || '');
      const data = await getDocs(query(ref, constraint));
      return data.docs.map(doc => doc.data() as Deadline);
    }, []);
  }

  public static async addDeadline(deadline: Deadline) {
    ErrorHandler.wrap(() => addDoc(collection(db, 'deadlines'), deadline));
  }
}
