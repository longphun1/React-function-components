import { Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

class App extends Component {
  constructor() { // constructor gets called first
    super();

    this.state = { // setting monsters state to a empty array and searchField to a empty string
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users') // fetching json date from url and populating it into the monsters array
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users}
          }
        )  
      );
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase(); // getting and setting the lowercase version of the input box string
    this.setState(() => {
      return { searchField }
    })
  };

  render() {

    const { monsters, searchField } = this.state; // cast the state into variables
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => { // Check the monsters array to see if it includes ... 
      return monster.name.toLocaleLowerCase().includes(searchField); // the searchField string and storing it into a variable
    });

    return (
      <div className="App">
        <h1 className='app-title'>MonsterDex</h1>
        <SearchBox 
          className='search-box'
          onChangeHandler={onSearchChange}
          placeHolder='search monsters'
        />
        <CardList monsters={filteredMonsters}/>  
      </div>
    );
  }
}

export default App;
