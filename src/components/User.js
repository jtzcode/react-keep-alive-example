import React, { useState } from 'react';

const User = () => {
    const [ name, setName ] = useState('Eggy');
    return (
        <div className="user">
            <h2>{name}</h2>
            <input value={name} type="text" onChange={ (e) => setName(e.target.value)}/>
        </div>
    );
};

export default User;