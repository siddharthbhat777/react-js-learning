import React from 'react';
import './Card.css';

const Card = (propsSubs) => {
    const classes = 'card ' + propsSubs.className; // so as to allow other classes to append it, video number 40 udemy
    return (
        <div className={classes}>{propsSubs.children}</div>
    )
};

export default Card