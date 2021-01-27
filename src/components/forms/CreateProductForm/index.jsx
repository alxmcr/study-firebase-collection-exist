import React, { useState } from 'react'
import { createProductInCollection } from 'helpers/firestore'

function CreateProductForm({ rootCollection }) {
    const [name, setName] = useState("");
    const [nextPurchase, setNextPurchase] = useState("");

    const createProduct = (e) => {
        e.preventDefault();
        const token = localStorage.getItem('tcl18-token');
        const product = { name, nextPurchase, lastPurchasedDate: null, };
        createProductInCollection(rootCollection, token, product);
    }

    return (
        <form>
            <label htmlFor="name">Item name:</label><br />
            <input id="name"
                type="text"
                placeholder="Enter the item name"
                autoComplete="off"
                required="required"
                name="item"
                onChange={(e) => setName(e.target.value)} />
            <br />
            <div>
                <label>How soon will you buy this again?</label>
                <br />
                <input
                    onChange={(e) => setNextPurchase(e.target.value)}
                    type="radio"
                    required="required"
                    name="nextPurchase"
                    value={7}
                />
                Soon
                <br />
                <input
                    onChange={(e) => setNextPurchase(e.target.value)}
                    type="radio"
                    required="required"
                    name="nextPurchase"
                    value={14}
                />
                Kind Of Soon
                <br />
                <input
                    onChange={(e) => setNextPurchase(e.target.value)}
                    type="radio"
                    required="required"
                    name="nextPurchase"
                    value={30}
                />
                Not Soon
                <br />
            </div>
            <br />
            <input type="submit" onClick={createProduct} />
        </form>
    )
}

export default CreateProductForm;