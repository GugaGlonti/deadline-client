import { githubAuthProvider, googleAuthProvider } from './../config/firebase.config';
import { User, createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword, updateEmail, updatePassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../config/firebase.config';

export class AuthService {
  public static async signinWithEmailAndPassword(email: string, password: string): Promise<void> {
    await createUserWithEmailAndPassword(auth, email, password);
  }

  public static async loginWithEmailAndPassword(email: string, password: string): Promise<void> {
    await signInWithEmailAndPassword(auth, email, password);
  }

  public static async signinWithGoogle(): Promise<void> {
    await signInWithPopup(auth, googleAuthProvider);
  }

  public static async signinWithGithub(): Promise<void> {
    await signInWithPopup(auth, githubAuthProvider);
  }

  public static getUser(): User | null {
    return auth.currentUser;
  }

  public static async logout(): Promise<void> {
    await signOut(auth);
  }

  /** FUNCTIONS FOR FUTURE IMPLEMENTATIONS */

  public static async getCurrentUser(): Promise<User | null> {
    return await new Promise((resolve, reject) => {
      const unsubscribe = auth.onAuthStateChanged(user => {
        unsubscribe();
        resolve(user);
      }, reject);
    });
  }

  public static async resetPassword(email: string): Promise<void> {
    await sendPasswordResetEmail(auth, email);
  }

  public static async updatePassword(password: string): Promise<void> {
    await updatePassword(auth.currentUser!, password);
  }

  public static async updateEmail(email: string): Promise<void> {
    await updateEmail(auth.currentUser!, email);
  }
}
