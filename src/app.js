import React, {useState} from 'react';
import Users from './components/users';
import SearchStatus from './components/searchStatus';
import api from './api';

function App() {
    const [users, setUsers] = useState(api.users.fetchAll());
    const [userStatus, setStatus] = useState('chosen');

    const handleDelete = (userId) => {
        const indexOfUser = users.findIndex( (user) => user._id === userId);
        const newUsers = [...users.slice(0, indexOfUser), ...users.slice(indexOfUser + 1)];
        setUsers(newUsers);
    }; 

    const handleToogleBookMark = (id) => {
        userStatus === 'not chosen' ? setStatus('chosen') : setStatus('not chosen'); 

        const user = users.find( (user) => user._id === id );
        user.status && user.status === 'chosen' ? user.status = 'not chosen' : user.status = 'chosen';
    };

    return (
        <div>
            <SearchStatus number={users.length}/>
            {users.length > 0 && <Users 
                users = {users}
                handleDelete = {handleDelete}
                handleToogleBookMark = {handleToogleBookMark}
            />}
        </div>
    );
}

export default App;
