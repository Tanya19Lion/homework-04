import React, { useState, useEffect } from "react";
import api from "../api";
import SearchStatus from "./searchStatus";
import UserById from "./userById";
import UserTable from "./userTable";
import Pagination from "./pagination";
import GroupList from "./groupList";

import { paginate } from "../utils/paginate";
import PropTypes from "prop-types";
import _ from "lodash";

const Users = ({ match, }) => {
    const [users, setUsers] = useState();
    const [selectedUser, setSelectedUser] = useState();
    const [userStatus, setStatus] = useState("chosen");
    const [currentPage, setCurrentPage] = useState(1);
    const [professions, setProfessions] = useState();
    const [selectedProf, setSelectedProf] = useState();
    const [sortBy, setSortBy] = useState({ iter: "name", order: "asc", class: "bi bi-caret-down-fill", });
    const pageSize = 8;
    const id = match.params.userId;

    useEffect(() => { api.users.fetchAll().then((data) => setUsers(data)); }, []);
    useEffect(() => { api.users.getById(id).then((data) => setSelectedUser(data)); }, [id]);
    useEffect(() => { api.professions.fetchAll().then((data) => setProfessions(data)); }, []);
    useEffect(() => {
        setCurrentPage(1);
    }, [selectedProf]);

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    const handleProfessionSelect = (item) => {
        setSelectedProf(item);
    };

    const handleSort = (item) => {
        setSortBy(item);
    };

    const handleDelete = (userId) => {
        const indexOfUser = users.findIndex((user) => user._id === userId);
        const newUsers = [
            ...users.slice(0, indexOfUser),
            ...users.slice(indexOfUser + 1)
        ];
        setUsers(newUsers);
    };

    const handleToogleBookMark = (id) => {
        userStatus === "not chosen"
            ? setStatus("chosen")
            : setStatus("not chosen");

        const user = users.find((user) => user._id === id);
        user.status && user.status === "chosen"
            ? (user.status = "not chosen")
            : (user.status = "chosen");
    };
    if (users) {
        const filteredUsers = selectedProf
            ? users.filter((user) => _.isEqual(user.profession, selectedProf))
            : users;

        const count = filteredUsers.length;
        const sortedUsers = _.orderBy(filteredUsers, [sortBy.iter], [sortBy.order]);

        const cropUsers = paginate(sortedUsers, currentPage, pageSize);

        const clearFilter = () => { setSelectedProf(); };

        return (
            <>
                {selectedUser
                    ? <UserById selectedUser={selectedUser}/>
                    : <div className="d-flex">
                        {professions && (
                            <div className="d-flex flex-column flex-shrink-0 p-3">
                                <GroupList
                                    items={professions}
                                    onItemSelect={handleProfessionSelect}
                                    selectedItem={selectedProf}
                                />
                                <button
                                    className="btn btn-secondary mt-2"
                                    onClick={clearFilter}
                                >
                                    Очистить фильтр
                                </button>
                            </div>
                        )}
                        <div className="d-flex flex-column">
                            <SearchStatus number={count} />
                            {count > 0 && <UserTable users={cropUsers} onSort={handleSort} currentSort={sortBy} handleDelete={handleDelete} onToggleBookMark={handleToogleBookMark}/>}
                            <div className="d-flex justify-content-center">
                                <Pagination
                                    itemsCount={count}
                                    pageSize={pageSize}
                                    currentPage={currentPage}
                                    onPageChange={handlePageChange}
                                />
                            </div>
                        </div>
                    </div>
                }
            </>
        );
    }
    return "loading...";
};

Users.propTypes = {
    users: PropTypes.array.isRequired,
    rest: PropTypes.array,
    handleDelete: PropTypes.func.isRequired,
    onToggleBookMark: PropTypes.func,
    match: PropTypes.object,
};

export default Users;
