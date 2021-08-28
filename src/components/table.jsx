import React from 'react';

const Table = ( {users, handleDelete} ) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Имя</th>
                    <th scope="col">Качества</th>
                    <th scope="col">Профессия</th>
                    <th scope="col">Встретился, раз</th>
                    <th scope="col">Оценка</th>
                </tr>
            </thead>
            <tbody>
                {users.map( ( user ) => { 
                    return <tr key={user._id}>
                        <td>{user.name}</td>
                        <td>
                            {user.qualities.map( (quality) => {
                                const classes = `badge mx-2 bg-${quality.color}`;
                                return <span key={quality._id} className={classes}>{quality.name}</span>})
                            }
                        </td>
                        <td>{user.profession.name}</td>
                        <td>{user.completedMeetings}</td>
                        <td>{user.rate}/5</td>
                        <td><button className="badge bg-danger" onClick={() => handleDelete(user._id)}>Delete</button></td>
                    </tr>
               })}                
            </tbody>
        </table>
    );
}

export default Table;