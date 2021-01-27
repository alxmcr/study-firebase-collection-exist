import React from 'react';

function ProductListEmpty() {
    const goToAddItemView = () => {
        console.log("Redirect to... /add-item")
    }

    return (
        <section>
            <p>Your shopping list is currently empty.</p>
            <br />
            <br />
            <input onClick={goToAddItemView}
                type="button"
                value="Add item" />
        </section>
    )
}

export default ProductListEmpty;