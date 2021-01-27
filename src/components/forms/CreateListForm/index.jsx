import React from 'react';
import getToken from 'lib/tokens';
import { useHistory } from 'react-router-dom';

function CreateListForm() {

    const history = useHistory();

    const createNewList = (e) => {
        e.preventDefault();
        console.log("Create new list...");
        const tokenRandom = getToken();
        // Localstorage
        localStorage.setItem("tcl18-token", tokenRandom);
        // Redirect
        history.push("/list-view");
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