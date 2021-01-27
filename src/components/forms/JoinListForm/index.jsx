import React, { useState } from 'react';
import { existCollectionById } from 'helpers/firestore'
import { useHistory } from 'react-router-dom'

function JoinListForm({ rootCollection }) {

    const [sharedToken, setSharedToken] = useState("");
    const [checking, setChecking] = useState(false);
    const [showErrorMessages, setShowErrorMessages] = useState(false);
    const history = useHistory();

    const joinToListByToken = async (e) => {
        e.preventDefault();

        setChecking(true);
        const existCollection = await existCollectionById(rootCollection, sharedToken);
        setChecking(false);

        if (existCollection) {
            setShowErrorMessages(false);
            // Localstorage
            localStorage.setItem("tcl18-token", sharedToken);
            // Redirect
            history.push("/list-view");
        } else {
            setShowErrorMessages(true);
        }
    }

    return (
        <section className="joinListSection">
            <p>Join an existing shopping list by entering a three word token</p>
            <br />
            <form>
                <label htmlFor="shareToken">Share token</label>
                <br />
                <input id="shareToken"
                    type="text"
                    placeholder="Enter a token"
                    onChange={(e) => setSharedToken(e.target.value)}
                    onKeyPress={() => setShowErrorMessages(false)} />
                <br />
                <input onClick={joinToListByToken}
                    type="submit"
                    value="Join an existing list" />
            </form>
            {checking && <p>Checking token...</p>}
            {(!checking && showErrorMessages) && <p>Invalid token. Try again!</p>}
        </section>
    )
}

export default JoinListForm;