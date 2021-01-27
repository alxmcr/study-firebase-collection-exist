import React, { useState, useEffect } from 'react';
// import ProductList from 'components/sections/ProductList';
// import ProductListEmpty from 'components/sections/ProductListEmpty';
// import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from 'lib/firebase'

const getProductsByToken = async (rootCollection, token) => {
    const productsRef = db.collection("tokens_v4").doc(token).collection("products");

    const productsByTokenList = [];

    try {
        const querySnapshot = await productsRef.get();
        const subCollectionProducts = querySnapshot.docs;
        console.log("querySnapshot", querySnapshot);
        console.log("subCollectionProducts", subCollectionProducts);

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

    // console.log("productsByTokenList", productsByTokenList);

    return productsByTokenList;


    // productsRef.get().then(function (doc) {
    //     const products = doc.docs;
    //     console.log("products", products);

    //     products.forEach(product => console.log(product.data()))

    //     if (doc.exists) {
    //         console.log("Document data:", doc.data());
    //     } else {
    //         // doc.data() will be undefined in this case
    //         console.log("No such document!");
    //     }
    // }).catch(function (error) {
    //     console.log("Error getting document:", error);
    // });
}

function ListView() {
    // const [isEmpty, setIsEmpty] = useState(false);
    const token = localStorage.getItem("tcl18-token");


    const initialize = async () => {
        const productsFirestore = await getProductsByToken("tokens_v4", token);
        console.log("productsFirestore", productsFirestore);
    }

    useEffect(() => {
        initialize();
    }, [])

    return (
        <>
            <h1>Smart Shopping List</h1>
            <br />
            <br />
            {/* <ProductListEmpty />
            <ProductList products={products} /> */}
            {/* 
            {isEmpty && <ProductListEmpty />}
            {(!isEmpty && !loading) && <ProductList products={products} />} */}
        </>
    )
}

export default ListView;