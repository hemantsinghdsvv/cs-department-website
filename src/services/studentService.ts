import { db } from "@/lib/firebase/config";
import { Student } from "@/types";
import { 
    collection, 
    getDocs, 
    addDoc, 
    updateDoc, 
    deleteDoc, 
    doc, 
    query, 
    orderBy,
    writeBatch
} from "firebase/firestore";

const COLLECTION_NAME = "students";

export const StudentService = {
    getAll: async (): Promise<Student[]> => {
        const q = query(collection(db, COLLECTION_NAME), orderBy("rollNo", "asc"));
        const snapshot = await getDocs(q);
        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Student));
    },
    add: async (data: Student) => {
        return await addDoc(collection(db, COLLECTION_NAME), data);
    },
    update: async (id: string, data: Partial<Student>) => {
        const docRef = doc(db, COLLECTION_NAME, id);
        return await updateDoc(docRef, data);
    },
    delete: async (id: string) => {
        const docRef = doc(db, COLLECTION_NAME, id);
        return await deleteDoc(docRef);
    },
    deleteAll: async () => {
        const batch = writeBatch(db);
        const q = query(collection(db, COLLECTION_NAME));
        const snapshot = await getDocs(q);
        
        snapshot.docs.forEach((doc) => {
            batch.delete(doc.ref);
        });

        await batch.commit();
    }
};
