import React from 'react';
//import Counter from './Counter';

const Card=({name,userName,email,phone})=>{
    return (
        <div className="card-container">
            <p>{name}</p>
    <p>{userName}</p>
    <p>{email}</p>
    <p>{phone}</p>
    
        </div>
    );
};

export default Card;