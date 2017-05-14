import React, { Component } from 'react';

import {TrackList} from './spotify/TrackList'
import {search} from './spotify/api'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      results: [],
    };
  }

  componentDidMount() {
    this.updateResults(this.state.query);
  }

  queryChanged(event) {
    const query = event.target.value;
    this.setState({query});
    this.updateResults(query);
  }

  async updateResults(query) {
    if (query) {
      const data = await search(query);
      const results = data.tracks.items;
      
      this.setState(
        (state) => state.query === query ? {results} : {}
      );
    } else {
      this.setState({results: []});
    }
  }

  render() {
    return (
      <div>
        <header>
          <input 
            type="text" 
            placeholder="Search" 
            value={this.state.query}
            onChange={this.queryChanged.bind(this)}
          />
        </header>
        <TrackList tracks={this.state.results}/>
      </div>
    );
  }
}

export default App;
