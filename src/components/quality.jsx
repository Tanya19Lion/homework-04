import React from "react";
import PropTypes from "prop-types";

const Quality = ({ qualities, }) => {
    return (
        <>
            {qualities.map((quality) => {
                const classes = `badge mx-2 bg-${quality.color}`;
                return (
                    <span key={quality._id} className={classes}>
                        {quality.name}
                    </span>
                );
            })}
        </>
    );
};

Quality.propTypes = {
    qualities: PropTypes.array.isRequired,
};

export default Quality;
