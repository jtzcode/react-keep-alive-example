import React, { useState } from 'react';

const Home = () => {
    const [ title, setTitle ] = useState('Home');
    return (
        <div className="home">
            <h2>{ title }</h2>
            <button onClick={() => setTitle("Click to home page")}>Go Home</button>
        </div>
    );
};

export default Home;