import React from 'react';
import { useHistory } from 'react-router-dom'

function ProductListEmpty() {
    const history = useHistory();
    const goToAddItemView = () => {
        history.push("/add-item");
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