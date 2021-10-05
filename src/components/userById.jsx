import React from "react";
import { useHistory } from "react-router-dom";
import Quality from "./quality";
import PropTypes from "prop-types";

const UserById = ({ selectedUser, }) => {
    const history = useHistory();
    const handleReturn = () => {
        history.replace("/users");
    };

    return (
        <div className="m-4">
            <p>{selectedUser.name}</p>
            <p><Quality qualities={selectedUser.qualities} /></p>
            <p>{selectedUser.profession.name}</p>
            <p>{selectedUser.completedMeetings}</p>
            <p>{selectedUser.rate}/5</p>
            <button onClick={() => handleReturn()} className="btn btn-secondary m-2">Все пользователи</button>
        </div>
    );
};

UserById.propTypes = {
    selectedUser: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
};

export default UserById;
