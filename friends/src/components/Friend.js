import React from 'react';

const Friend = props => {
    return (
        <div>
            <p>{props.friend.name} <span>{props.friend.age}</span></p>
            <p>{props.friend.email}</p>
        </div>
    );
};

export default Friend;