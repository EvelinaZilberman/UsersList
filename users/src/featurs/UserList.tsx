import React from 'react';
import './UserList.css';

interface Props{
    users: string[];
}

const UserList: React.FC<Props> = ({users}) => {
    const listItems = users.map(user => <li>{user}</li>);
    return(
        <div className='users'>
            <ul className='usersList'>
                <li>{listItems}</li>
            </ul>
        </div>
    )
}

export default UserList;