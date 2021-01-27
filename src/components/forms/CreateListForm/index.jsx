import React from 'react';
import getToken from 'lib/tokens';
import { useHistory } from 'react-router-dom';
import { db } from 'lib/firebase'

function CreateListForm({ rootCollection }) {

    const history = useHistory();

    const createCollectionByToken = (token) => {
        db.collection(rootCollection).doc(token).set({ token })
            .then(function () {
                console.log("Create collection successfully!");
            })
            .catch(function (error) {
                console.error("Error create collection: ", error);
            });
    }

    const createNewList = (e) => {
        e.preventDefault();
        console.log("Create new list...");
        const tokenRandom = getToken();
        // Localstorage
        localStorage.setItem("tcl18-token", tokenRandom);
        // Firestore
        createCollectionByToken(tokenRandom)
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