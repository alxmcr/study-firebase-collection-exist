import React, { useState, useEffect } from 'react';
import { getProductsByToken } from 'helpers/firestore'
import ProductList from 'components/sections/ProductList';
import ProductListEmpty from 'components/sections/ProductListEmpty';

function ListView() {
    const [products, setProducts] = useState([]);
    const [isEmpty, setIsEmpty] = useState(true);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function initialize() {
            const token = localStorage.getItem("tcl18-token");
            setLoading(true);
            const productsFirestore = await getProductsByToken("tokens_v4", token);
            setLoading(false);
            setProducts(productsFirestore);
            setIsEmpty(productsFirestore.length === 0)
        }
        initialize();
    }, [])

    return (
        <>
            <h1>Smart Shopping List</h1>
            <br />
            <br />
            {loading && <p>Loading products...</p>}
            {(isEmpty && !loading) && <ProductListEmpty />}
            {(!isEmpty && !loading) && <ProductList products={products} />}
        </>
    )
}

export default ListView;