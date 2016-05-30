import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = {query:''};
  }

  render () {
    return (
      <div className='search-bar'>
        <input
        value={this.state.query}
        onChange={event=>this.onSearch(event.target.value)} />
      </div>
      );
      }
  onSearch(query){
      this.setState({query});
      this.props.onSearch(query);
  }
}
export default SearchBar;
