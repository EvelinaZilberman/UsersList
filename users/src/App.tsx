import React from 'react';
import UserList from './featurs/UserList';

function App() {
  return (
    <div className="App">
      <UserList users={['max', 'alex', 'Thea', 'julia', 'rafe']}></UserList>
    </div>
  );
}

export default App;
