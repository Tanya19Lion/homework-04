import React from 'react';

const Quality = ({qualities}) => {
    return (
        <>
         {qualities.map( (quality) => {
            const classes = `badge mx-2 bg-${quality.color}`;
            return <span key={quality._id} className={classes}>{quality.name}</span>
        })}
        </>
    )
};

export default Quality;
