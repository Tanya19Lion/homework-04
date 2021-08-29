import React from 'react';

const BookMark = ({id, userStatus, handleToogleBookMark}) => {
    let classes = 'bi bi-bookmark';    

    if (userStatus === 'chosen') {
        classes+='-fill';
    } 

    return (
        <button onClick={() => handleToogleBookMark(id)}><i className={classes}></i></button>
    )
};

export default BookMark;
