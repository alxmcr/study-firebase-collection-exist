import React, { useState, useEffect } from 'react';
import ProductList from 'components/sections/ProductList';
import ProductListEmpty from 'components/sections/ProductListEmpty';

function ListView() {
    const [products, setProducts] = useState([]);
    const [isEmpty, setIsEmpty] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const productsFirestore = [
            {
                id: 1,
                name: "laptop"
            },
            {
                id: 1,
                name: "cellphone"
            }
        ];
        setLoading(false);

        setProducts(productsFirestore);
        setIsEmpty(productsFirestore.length === 0)
    }, [])

    return (
        <>
            <h1>Smart Shopping List</h1>
            <br />
            <br />
            {isEmpty && <ProductListEmpty />}
            {(!isEmpty && !loading) && <ProductList products={products} />}
        </>
    )
}

export default ListView;