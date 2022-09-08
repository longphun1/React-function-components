import { useState, useEffect } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

const App = () => {

  const [searchField, setSearchField] = useState(''); // pass in empty string at the start as searchField and use setSearchField as the updated variable
  const [ monsters, setMonsters ] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users') // fetching json date from url and populating it into the monsters array
    .then((response) => response.json())
    .then((users) => setMonsters(users));
  }, []); // pass in empty array as a dependency so it doesn't re-render

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase(); // getting and setting the lowercase version of the input box string
    setSearchField(searchFieldString);
  };

  const filteredMonsters = monsters.filter((monster) => { // Check the monsters array to see if it includes ... 
    return monster.name.toLocaleLowerCase().includes(searchField); // the searchField string and storing it into a variable
  });

  return (
    <div className="App">
      <h1 className='app-title'>MonsterDex</h1>
      {<SearchBox 
        className='search-box'
        onChangeHandler={onSearchChange}
        placeHolder='search monsters'
      />}
      <CardList monsters={filteredMonsters}/>  
    </div>
  );
};

export default App;
