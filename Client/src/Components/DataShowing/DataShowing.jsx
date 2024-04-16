import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function DataShowing() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/getdata')
            .then(response => setUsers(response.data))
            .catch(error => console.log(error));
    }, []);

    return (
        <div>
            <table border={2}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Created By</th>
                        <th>Created On</th>
                        <th>Content</th>
                        <th>DeadLine</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr>
                            <td>{user.Title}</td>
                            <td>{user.created_By}</td>
                            <td>{user.createdOn}</td>
                            <td>{user.content}</td>
                            <td>{user.DeadLine}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
