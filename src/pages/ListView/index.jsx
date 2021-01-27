import React, { useEffect } from 'react';
import { db } from 'lib/firebase'

const getProductsByToken = async (rootCollection, token) => {
    const productsRef = db.collection(rootCollection).doc(token).collection("products");

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
    return productsByTokenList;
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