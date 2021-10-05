import React from "react";
import User from "./user";
import PropTypes from "prop-types";

const UserTable = ({ users, onSort, currentSort, onToggleBookMark, ...rest }) => {
    // const handleSort = (item) => {
    //     if (currentSort.iter === item) {
    //         onSort({ ...currentSort, order: currentSort.order === "asc" ? "desc" : "asc", });
    //     } else {
    //         onSort({ iter: item, order: "asc", });
    //     }
    // };
    const handleSort = (item) => {
        if (currentSort.iter === item) {
            onSort({ ...currentSort, order: currentSort.order === "asc" ? "desc" : "asc", class: currentSort.class === "bi bi-caret-down-fill" ? "bi bi-caret-up-fill" : "bi bi-caret-down-fill", });
        } else {
            onSort({ iter: item, order: "asc", class: "bi bi-caret-down-fill", });
        }
    };

    return (
        <table className="table">
            <thead>
                <tr>
                    <th className={currentSort.iter === "name" ? currentSort.class : undefined} onClick={() => handleSort("name")}scope="col">Имя</th>
                    <th scope="col">Качества</th>
                    <th className={currentSort.iter === "profession.name" ? currentSort.class : undefined} onClick={() => handleSort("profession.name")} scope="col">Профессия</th>
                    <th className={currentSort.iter === "completedMeetings" ? currentSort.class : undefined} onClick={() => handleSort("completedMeetings")} scope="col">Встретился, раз</th>
                    <th className={currentSort.iter === "rate" ? currentSort.class : undefined} onClick={() => handleSort("rate")} scope="col">Оценка</th>
                    <th className={currentSort.iter === "bookmart" ? currentSort.class : undefined} onClick={() => handleSort("bookmark")} scope="col">Избранное</th>
                    <th />
                </tr>
            </thead>
            <tbody>
                <User users={users} onToggleBookMark={onToggleBookMark} {...rest} />
            </tbody>
        </table>
    );
};

UserTable.propTypes = {
    users: PropTypes.array.isRequired,
    user: PropTypes.object.isRequired,
    handleSort: PropTypes.func,
    onSort: PropTypes.func.isRequired,
    currentSort: PropTypes.object.isRequired,
    // selectedSort: PropTypes.object.isRequired,
    onToggleBookMark: PropTypes.func.isRequired,
    // onDelete: PropTypes.func.isRequired
};

export default UserTable;
