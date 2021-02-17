import { useState, useEffect } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

function App() {
  // eslint-disable-next-line no-useless-constructor

  const [monsters, setMonster] = useState([]);
  const [searchField, setSearchField] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((monsters) => {
        setMonster(monsters);
      });
  }, []);

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  // eslint-disable-next-line array-callback-return
  const filteredMonsters = monsters.filter((monsters) =>
    monsters.name.toLowerCase().includes(searchField.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Monster Rolodex</h1>
      <SearchBox placeHolder="Search Monsters" handleChange={handleChange} />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

export default App;
