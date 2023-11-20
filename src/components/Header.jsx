import './Header.css';
import React from 'react';

export default function Header() {
    return (
        <div className='Header'>
           <h1>{new Date().toDateString()} </h1>
        </div>
    );
}

