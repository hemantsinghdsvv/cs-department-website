import { auth } from "@/lib/firebase/config";
import { 
    signInWithEmailAndPassword, 
    signOut, 
    onAuthStateChanged, 
    User 
} from "firebase/auth";

export const AuthService = {
    login: async (email: string, pass: string) => {
        return await signInWithEmailAndPassword(auth, email, pass);
    },
    logout: async () => {
        return await signOut(auth);
    },
    getCurrentUser: () => {
        return new Promise<User | null>((resolve, reject) => {
             const unsubscribe = onAuthStateChanged(auth, (user) => {
                unsubscribe();
                resolve(user);
             }, reject);
        });
    }
};
