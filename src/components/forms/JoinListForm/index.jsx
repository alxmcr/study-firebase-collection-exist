import React from 'react';
import './JoinListForm.css'

function CreateListForm() {

    const createNewList = (e) => {
        e.preventDefault();
        console.log("Joining to list...");
    }

    return (
        <section className="joinListSection">
            <p>Join an existing shopping list by entering a three word token</p>
            <br />
            <form>
                <label htmlFor="shareToken">Share token</label>
                <br />
                <input id="shareToken" type="text" placeholder="Enter a token" />
                <br />
                <input onClick={createNewList}
                    type="submit"
                    value="Join an existing list" />
            </form>
            <br />
        </section>
    )
}

export default CreateListForm;