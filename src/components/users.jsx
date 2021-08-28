import React, {useState} from 'react';
import api from '../api';
import Table from './table';
import Slogan from './slogan';

const Users = () => {
  
    let [users, setUsers] = useState(api.users.fetchAll());
    const usersLength = users.length;

    const handleDelete = (userId) => {
        const indexOfUser = users.findIndex( (user) => user._id === userId);
        users = [...users.slice(0, indexOfUser), ...users.slice(indexOfUser + 1)];
        setUsers(users);
    };

    return (
        <React.Fragment>     
            <Slogan number={usersLength}/> 
            {users.length > 0 && <Table users={users} handleDelete={handleDelete}/>}
        </React.Fragment>
    );
}

export default Users;