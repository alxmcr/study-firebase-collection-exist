import CreateListForm from 'components/forms/CreateListForm';
import JoinListForm from 'components/forms/JoinListForm';
import React from 'react';

function Home() {
    return (
        <>
            <h1>Welcome to your<br /> Smart Shopping List</h1>
            <br />
            <CreateListForm rootCollection="tokens_v3" />
            <br /><br />
            <span>--or--</span>
            <br />
            <JoinListForm />
        </>
    )
}

export default Home;