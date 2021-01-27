import ProductCard from 'components/cards/ProductCard';
import React from 'react';

function ProductList({ products }) {

    return (
        <section>
            {
                products.map((product, index) => {
                    return (
                        <ProductCard key={index}
                            product={product} />
                    )
                })
            }
        </section>
    )
}

export default ProductList;