import { db } from 'lib/firebase'

const createCollectionByToken = (rootCollection, token) => {
    db.collection(rootCollection).doc(token).set({})
        .then(function () {
            console.log("Create collection successfully!");
        })
        .catch(function (error) {
            console.error("Error create collection: ", error);
        });
}

const createProductInCollection = (rootCollection, token, product) => {
    // // Add a new document in collection "cities"
    db.collection(rootCollection).doc(token).collection("products").doc().set(product)
        .then(function () {
            console.log("Document successfully written!");
        })
        .catch(function (error) {
            console.error("Error writing document: ", error);
        });
};

const existCollectionById = async (rootCollection, token) => {
    const collectionRefByToken = db.collection(rootCollection || ' ');
    try {
        const querySnapshot = await collectionRefByToken.get();

        if (!querySnapshot.empty) {
            const { docs } = querySnapshot;
            const docsByToken = docs.filter(doc => doc.id === token);
            return docsByToken.length > 0;
        }
        return false;
    } catch (e) {
        console.error(e);
    }
};

export { createCollectionByToken, createProductInCollection, existCollectionById }