import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { saveUserDetails } from '../actions';

const Profile = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.user.id);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    fetch(`https://dummyjson.com/users/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        // Save user details in Redux state
        dispatch(saveUserDetails(data));
      });
  }, [dispatch, userId]);

  return (
    <div>
      <h1>Profile Page</h1>
      <p>Username: {user.username}</p>
      
    </div>
  );
};

export default Profile;
