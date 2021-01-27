import CreateProductForm from 'components/forms/CreateProductForm';
import React from 'react';

function AddItem() {
    return (
        <>
            <CreateProductForm rootCollection="tokens_v4" />
        </>
    )
}

export default AddItem;