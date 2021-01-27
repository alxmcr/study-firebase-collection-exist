import React from 'react';

function CreateListForm() {

    const createNewList = (e) => {
        e.preventDefault();
        console.log("Create new list...");
    }

    return (
        <form>
            <input onClick={createNewList}
                type="submit"
                value="Create a new List" />
        </form>
    )
}

export default CreateListForm;