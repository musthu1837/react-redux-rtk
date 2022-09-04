import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, fetchByUserId } from '../core/store/reducers/usersSlice';

const UsersViewComponent = () => {

  // local state
  // const [value, setValue] = useState('');


  // To trigger action to the reducer
  const dispatch = useDispatch();

  // To select/consume global state 
  // it is like map state to props
  const users = useSelector(state => state.users.users);
  const loading = useSelector(state => state.users.loading);
  const search = useSelector(state => state.users.search);

  // works like willmount and didmmount
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const onChange = (e) => {
    dispatch(fetchByUserId(e.target.value));
    // setValue(e.target.value);
  }

  if (loading) {
    return <div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  }

  return <div className="container">
    <p>Total {users.length} results found.</p>
    <input onChange={onChange} value={search}/>
    {/* <input onChange={onChange} value={value}/> */}
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">User Name</th>
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
        </tr>
      </thead>
      <tbody>
        {
          users.map((user, index) => {
            return (<tr key={index}>
              <td>{ user.name }</td>
              <td>{ user.username }</td>
              <td>{ user.email }</td>
              <td>{ user.phone }</td>
            </tr>)
          })
        }
      </tbody>
    </table>
  </div>
}

export const UsersView = UsersViewComponent;