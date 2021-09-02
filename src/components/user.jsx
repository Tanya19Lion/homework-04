import React from "react";
import BookMark from "./bookmark";
import Quality from "./quality";
import PropTypes from "prop-types";

const User = ({ users, handleDelete, ...rest }) => {
    return (
        <>
            {users.map((user) => {
                return (
                    <tr key={user._id}>
                        <td>{user.name}</td>
                        <td>
                            <Quality qualities={user.qualities} />
                        </td>
                        <td>{user.profession.name}</td>
                        <td>{user.completedMeetings}</td>
                        <td>{user.rate}/5</td>
                        <td>
                            <BookMark
                                id={user._id}
                                userStatus={user.status}
                                {...rest}
                            />
                        </td>
                        <td>
                            <button
                                className="badge bg-danger"
                                onClick={() => handleDelete(user._id)}
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                );
            })}
        </>
    );
};

User.propTypes = {
    users: PropTypes.array.isRequired,
    rest: PropTypes.array,
    handleDelete: PropTypes.func.isRequired,
    qualities: PropTypes.array,
};

export default User;
