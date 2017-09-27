import React, { Component } from 'react';

// state is a plain javascript object that exists on any class based component
class SearchBar extends Component {
  // constructor method to initialize state. must be on a class component not functional, always first function called
  constructor(props){
    // calling the parent method of class component
    super(props);

    // initializing state by assiging it to a plain object using this.state, only place we construct state in this way
    this.state = { term: '' };
  }


  render() {
    // using setState method here to record the value of the input to the state
    return (
      <div className="search-bar">
        <input
        // by setting this inputs value to state.term its being made into a controlled component, its value is set by state. when the setState method is called it is re-rendering this component, at which point the value is then updated.
        value = { this.state.term }
        onChange={e => this.onInputChange(e.target.value)} />
      </div>
    );
  }

  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
  }


}

export default SearchBar;
