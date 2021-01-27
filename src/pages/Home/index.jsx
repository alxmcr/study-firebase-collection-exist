import CreateListForm from 'forms/CreateListForm';
import JoinListForm from 'forms/JoinListForm';
import React from 'react';

function Home() {
    return (
        <>
            <h1>Welcome to your<br /> Smart Shopping List</h1>
            <br />
            <CreateListForm />
            <br /><br />
            <span>--or--</span>
            <br />
            <JoinListForm />
        </>
    )
}

export default Home;