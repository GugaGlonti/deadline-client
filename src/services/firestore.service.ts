import { collection, getDocs, query, where } from 'firebase/firestore';
import { Deadline } from '../types/Deadline';
import { auth, db } from '../config/firebase.config';

export class FirestoreService {
  public static async getCollection(col: string, callBack: React.Dispatch<React.SetStateAction<Deadline[]>>) {
    try {
      const data = await getDocs(query(collection(db, col), where('userId', '==', auth.currentUser?.uid || '')));
      const deadlines = data.docs.map(doc => doc.data() as Deadline);
      callBack(deadlines);
    } catch (error) {
      console.error(error);
      return [];
    }
  }
}
