import React from "react";
import PropTypes from "prop-types";

const BookMark = ({ id, userStatus, handleToogleBookMark, }) => {
    let classes = "bi bi-bookmark";

    if (userStatus === "chosen") {
        classes += "-fill";
    }

    return (
        <button onClick={() => handleToogleBookMark(id)}>
            <i className={classes}></i>
        </button>
    );
};

BookMark.propTypes = {
    id: PropTypes.string.isRequired,
    userStatus: PropTypes.bool,
    handleToogleBookMark: PropTypes.func.isRequired,
};

export default BookMark;
