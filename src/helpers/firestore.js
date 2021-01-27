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

const getProductsByToken = async (rootCollection, token) => {
    const productsRef = db.collection(rootCollection).doc(token).collection("products");

    const productsByTokenList = [];

    try {
        const querySnapshot = await productsRef.get();
        const subCollectionProducts = querySnapshot.docs;

        subCollectionProducts.forEach(product => {
            const infoProduct = {
                id: product.id,
                ...product.data()
            }
            productsByTokenList.push(infoProduct)
        });

    } catch (e) {
        console.error(e);
    }
    return productsByTokenList;
}

export { createCollectionByToken, createProductInCollection, existCollectionById, getProductsByToken }