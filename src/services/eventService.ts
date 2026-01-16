import { db } from "@/lib/firebase/config";
import { Event } from "@/types";
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

const COLLECTION_NAME = "events";

export const EventService = {
    getAll: async (): Promise<Event[]> => {
        const q = query(collection(db, COLLECTION_NAME), orderBy("startDate", "asc"));
        const snapshot = await getDocs(q);
        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Event));
    },
    add: async (data: Event) => {
        return await addDoc(collection(db, COLLECTION_NAME), data);
    },
    update: async (id: string, data: Partial<Event>) => {
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
