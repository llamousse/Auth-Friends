import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth.js';
import Friend from './Friend.js';

function FriendsList() {

    const [friends, setFriends] = useState([]);

    useEffect(() => {
        axiosWithAuth()
        .post('http://localhost:5000/api/friends')
        .then(res => {
            console.log(res.data);
            setFriends(res.data);
        })
        .catch(err => {
            console.log('Error loading friends: ', err.response);
        })
    }, [])

    return (
        <div>
            <h1>Friends List</h1>
            {friends && friends.map(friend => 
                <Friend friend={friend} />
            )}
        </div>
    );
    

};

export default FriendsList;