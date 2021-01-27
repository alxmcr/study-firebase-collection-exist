import React, { useState } from 'react'
import { createProductInCollection } from 'helpers/firestore'

function CreateProductForm({ rootCollection }) {
    const [name, setName] = useState("");

    const createProduct = (e) => {
        e.preventDefault();

        const token = localStorage.getItem('tcl18-token');
        const product = { name };

        console.log("Creating a product...", product);
        createProductInCollection(rootCollection, token, product);
    }

    return (
        <form>
            <label htmlFor="name">Item name:</label><br />
            <input id="name"
                type="text"
                placeholder="Enter the item name"
                onChange={(e) => setName(e.target.value)} />
            <br />
            <input type="submit" onClick={createProduct} />
        </form>
    )
}

export default CreateProductForm;