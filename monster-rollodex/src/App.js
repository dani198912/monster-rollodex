import React, { Component } from 'react';
import {CardList} from './components/card-list/cardlist.component'
import { SearchBar } from './components/searchbar/searchbar.component'
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
    // this.handleChange = this.handleChange.bind(this);
  }

componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => this.setState({monsters : users}))
}

handleChange= (e) => {//Arrow functions automaticcaly to set when it is defined, when sees the this keyword and it is binds to the place is defined
  // in this case to the App function. This way we dont need to define in the constructor the function to bind it to app function.
  this.setState({searchField: e.target.value})
}

render() {
    const { monsters, searchField } = this.state;
    //The upper line is equivalent to the next 2 lines - shorter and easier to read
    // const monsters = this.state.monsters;
    // const searchField = this.state.searchField;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )

  return (
    <div className = "App">
      
      <SearchBar 
        placeholder='Search monsters'
        handleChange = {this.handleChange}// in object you insert a function
      /> 
      
      <CardList monsters = {filteredMonsters}
      />
    </div>
  );
  }
}

export default App;
