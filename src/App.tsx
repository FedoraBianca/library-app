import React from 'react';
import CustomTable from './components/CustomTable';
import UserForm from './components/UserForm';

function App() {
  return (
    <div className='App'>
      <h1>Dashboard</h1>
      <CustomTable />
      <UserForm />
    </div>
  );
}

export default App;
