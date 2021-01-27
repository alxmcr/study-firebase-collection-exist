import React, { useState } from 'react';

function JoinListForm({ rootCollection }) {

    const [sharedToken, setSharedToken] = useState(" ");

    const joinToListByToken = (e) => {
        e.preventDefault();
        console.log("rootCollection", rootCollection);
        console.log("Joining to list by token", sharedToken);
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
                    onChange={(e) => setSharedToken(e.target.value)} />
                <br />
                <input onClick={joinToListByToken}
                    type="submit"
                    value="Join an existing list" />
            </form>
        </section>
    )
}

export default JoinListForm;