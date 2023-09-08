import './App.css';
import Card from './components/Card';
import SearchBar from './components/SearchBar';
import SearchUser from './api';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState([]);

  const handleSubmit = async (term) => {
    const result = await SearchUser(term);

    setUser(result);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <Card user={user} />
    </div>
  );
}

export default App;
