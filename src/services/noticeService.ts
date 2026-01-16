import { db } from "@/lib/firebase/config";
import { Notice } from "@/types";
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

const COLLECTION_NAME = "notices";

export const NoticeService = {
    getAll: async (): Promise<Notice[]> => {
        // Sort by pinned status (true first) then by date (descending)
        const q = query(collection(db, COLLECTION_NAME), orderBy("date", "desc"));
        const snapshot = await getDocs(q);
        const notices = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Notice));
        
        return notices.sort((a, b) => {
            if (a.isPinned === b.isPinned) return 0;
            return a.isPinned ? -1 : 1;
        });
    },
    add: async (data: Notice) => {
        return await addDoc(collection(db, COLLECTION_NAME), data);
    },
    update: async (id: string, data: Partial<Notice>) => {
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
