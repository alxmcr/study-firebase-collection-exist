import { db } from 'lib/firebase'

const createProductInCollection = (rootCollection, token, product) => {
    // // Add a new document in collection "cities"
    db.collection(rootCollection).doc(token).collection("products").doc().set({
        name: "Los Angeles",
        state: "CA",
        country: "USA"
    })
        .then(function () {
            console.log("Document successfully written!");
        })
        .catch(function (error) {
            console.error("Error writing document: ", error);
        });
};

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

export { existCollectionById, createProductInCollection }