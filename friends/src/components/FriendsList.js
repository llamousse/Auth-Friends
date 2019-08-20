import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth.js';

class FriendsList extends React.Component {
    

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        axiosWithAuth()
            .post('http://localhost:5000/api/friends')
            .then(res => {
                console.log(res.data)
            })
            .catch(err => {
                console.log('Error loading friends: ', err.response);
            })
    };

    render() {
        return (
            <>
                <h1>Friends List</h1>
            </>
        );
    }

};

export default FriendsList;