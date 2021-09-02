import React from "react";
import PropTypes from "prop-types";

const SearchStatus = ({ number, }) => {
    const renderPhrase = (number) => {
        if (number > 4 && number < 15) return "человек тусанeт с тобой сегодня";

        const lastOne = Number(number.toString().slice(-1));
        if ([2, 3, 4].indexOf(lastOne) >= 0) {
            return "человекa тусанут с тобой сегодня";
        }
        if (lastOne === 1) return "человек тусанeт с тобой сегодня";
    };

    return (
        <h1 className={"badge bg-" + (number > 0 ? "primary" : "danger")}>
            {number > 0
                ? `${number} ${renderPhrase(number)} `
                : "Никто не тусанет с тобой сегодня"}
        </h1>
    );
};

SearchStatus.propTypes = {
    number: PropTypes.number.isRequired,
};

export default SearchStatus;

// let text = '';
// let classes = 'badge mb-3 mt-3 bg-';

// let devidedNumber = [...number+''].map(n=>+n);
// let lastNumber = devidedNumber[devidedNumber.length-1];
// let secondNumber = devidedNumber[devidedNumber.length-2];

// if (number === 0) {
//     classes += 'danger';
//     text = 'Никто не тусанет с тобой сегодня';
// } else if (number === 1) {
//     classes += 'primary';
//     text = `${number} человек тусанeт с тобой сегодня`;
// } else if ([2, 3, 4].includes(lastNumber) && secondNumber > 1) {
//     classes += 'primary';
//     text = `${number} человекa тусанут с тобой сегодня`;
// } else if ([2, 3, 4].includes(lastNumber) && secondNumber === 1) {
//     classes += 'primary';
//     text = `${number} человек тусанут с тобой сегодня`;
// }  else if ( [2, 3, 4].includes(lastNumber)) {
//     classes += 'primary';
//     text = `${number} человекa тусанут с тобой сегодня`;
// }  else {
//     classes += 'primary';
//     text = `${number} человек тусанут с тобой сегодня`;
// }

// return <h1 className={classes} style={{fontSize: '40px'}}>{text}</h1>
