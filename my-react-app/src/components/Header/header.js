import React from 'react';
import './header.css';

export default function Header() {
    return (
        <>
        <div className='headerContainer'>
            <h1 id='headerText'>TODO LIST:</h1>
            <h2 id='headerDate'>{new Date().toLocaleDateString()}</h2>
        </div>
        </>
    );
}
