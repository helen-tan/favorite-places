import React from 'react';
import UsersList from '../components/UsersList';

const Users = () => {
  // dummy data
  const USERS = [{
    id: 1,
    name: 'Max Schwarz',
    image: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    places: 3
  },
  {
    id: 2,
    name: 'Jane Doe',
    image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    places: 3
  }
];

  return (
    <UsersList items={USERS}/>
  )
}

export default Users
