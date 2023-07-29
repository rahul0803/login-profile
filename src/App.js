import React from 'react';
import { useSelector } from 'react-redux';
import Login from './Components/Login';
import Profile from './Components/Profile';

const App = () => {
  const user = useSelector((state) => state.user);

  return (
    <div>
      <h1>Redux Login and Profile Example</h1>
      {user ? <Profile /> : <Login />}
    </div>
  );
};

export default App;
