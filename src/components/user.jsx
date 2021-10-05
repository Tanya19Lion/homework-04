import React from "react";
import { Link } from "react-router-dom";
import BookMark from "./bookmark";
import Quality from "./quality";
import PropTypes from "prop-types";

const User = ({ users, handleDelete, onToggleBookMark, ...rest }) => {
    return (
        <>
            {users.map((user) => {
                return (
                    <tr key={user._id}>
                        <td><Link to={"/users/" + user._id}>{user.name}</Link></td>
                        <td>
                            <Quality qualities={user.qualities} />
                        </td>
                        <td>{user.profession.name}</td>
                        <td>{user.completedMeetings}</td>
                        <td>{user.rate}/5</td>
                        <td>
                            <BookMark handleToogleBookMark={onToggleBookMark}
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
    onToggleBookMark: PropTypes.func,
};

export default User;
