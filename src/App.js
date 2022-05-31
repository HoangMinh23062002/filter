import React, { useState } from 'react';

import './filter.css'


const USERS = [
    { id: 1, name: 'Tú', age: 20 },
    { id: 2, name: 'Lum Lum', age: 19 },
    { id: 3, name: 'Thị Phượng', age: 21 },
    { id: 4, name: 'Zũ', age: 20 },
    { id: 5, name: 'Tờ rí', age: 21 },
    { id: 6, name: 'Ngài', age: 20 },
    { id: 7, name: 'Hứ', age: 19 },
    { id: 8, name: 'Điệu', age: 20 },
    // Hoàng Tuấn Minh nèg
];

function Filter() {
    // the value of the search field 
    const [name, setName] = useState('');

    // the search result
    const [foundUsers, setFoundUsers] = useState(USERS);

    const filter = (e) => {
        const keyword = e.target.value;

        if (keyword !== '') {
            const results = USERS.filter((user) => {
                return user.name.toLowerCase().startsWith(keyword.toLowerCase());
                // Use the toLowerCase() method to make it case-insensitive
            });
            setFoundUsers(results);
        } else {
            setFoundUsers(USERS);
            // If the text field is empty, show all users
        }

        setName(keyword);
    };

    return (
        <div className="container">
            <input
                type="text"
                value={name}
                onChange={filter}
                className="input"
                placeholder="Search..."
            />

            <div className="user-list">
                {foundUsers && foundUsers.length > 0 ? (
                    foundUsers.map((user) => (
                        <li key={user.id} className="user">
                            <span className="user-id">{user.id}</span>
                            <span className="user-name">{user.name}</span>
                            <span className="user-age">{user.age} year old</span>
                        </li>
                    ))
                ) : (
                    <h1>No results found!</h1>
                )}
            </div>
        </div>
    );
}

export default Filter;