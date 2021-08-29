import React from 'react';

const SearchStatus = ({number}) => {
    let text = '';
    let classes = 'badge mb-3 mt-3 bg-'; 

    let devidedNumber = [...number+''].map(n=>+n);
    let lastNumber = devidedNumber[devidedNumber.length-1];
    let secondNumber = devidedNumber[devidedNumber.length-2];
 
    if (number === 0) {
        classes += 'danger';
        text = 'Никто не тусанет с тобой сегодня';
    } else if (number === 1) {
        classes += 'primary';
        text = `${number} человек тусанeт с тобой сегодня`;
    } else if ([2, 3, 4].includes(lastNumber) && secondNumber > 1) {
        classes += 'primary';
        text = `${number} человекa тусанут с тобой сегодня`;      
    } else if ([2, 3, 4].includes(lastNumber) && secondNumber === 1) {
        classes += 'primary';
        text = `${number} человек тусанут с тобой сегодня`;      
    }  else if ( [2, 3, 4].includes(lastNumber)) {
        classes += 'primary';
        text = `${number} человекa тусанут с тобой сегодня`;  
    }  else {
        classes += 'primary';
        text = `${number} человек тусанут с тобой сегодня`;    
    }

    return <h1 className={classes} style={{fontSize: '40px'}}>{text}</h1>
};

export default SearchStatus;