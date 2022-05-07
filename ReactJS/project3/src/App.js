import {useState} from 'react';
import InputCard from './Components/InputCard';
import UserList from './Components/UserList';

function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = (user) => {
    setUsers((prevUsers) => {
      return [user, ...prevUsers]
    });
  };
  return (
    <div>
      <InputCard onAddUser={addUserHandler}/>
      <UserList users={users}/>
    </div>
  );
}

export default App;
