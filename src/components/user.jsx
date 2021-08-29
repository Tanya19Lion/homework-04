import React from 'react';
import BookMark from './bookmark';
import Quality from './quality';

const User = ({users, handleDelete, ...rest}) => {
    return (
        <>
        {users.map( ( user ) => { 
            return <tr key={user._id}>
                <td>{user.name}</td>
                <td>
                    <Quality qualities = {user.qualities}/>
                </td>
                <td>{user.profession.name}</td>
                <td>{user.completedMeetings}</td>
                <td>{user.rate}/5</td>
                <td><BookMark id={user._id} userStatus={user.status} {...rest}/></td>
                <td><button className="badge bg-danger" onClick={() => handleDelete(user._id)}>Delete</button></td>
            </tr>   
            })}     
        </>
    )
};

export default User;