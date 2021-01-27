import { db } from 'lib/firebase'

const existCollectionById = async (rootCollection, token) => {
    const collectionRefByToken = db.collection(rootCollection || ' ')
                                    .where("token", "==", token || ' ');
    try {
        const querySnapshot = await collectionRefByToken.get();
        return !querySnapshot.empty;
    } catch (e) {
        console.error(e);
    }
};

export { existCollectionById }