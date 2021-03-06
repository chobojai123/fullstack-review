import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: []
    }
    this.getRepos = this.getRepos.bind(this);
    this.search = this.search.bind(this);
  }

  componentDidMount() {
    this.getRepos();
  }

  getRepos() {
      $.ajax({
      url: "/repos",
      type: "GET",
      success: (results) => {
        this.setState({
          repos: results
        })
      },
      error: (err) => {
        console.log(err);    
      }
    });
  }

  search (term) {
    console.log(`${term} was searched`);
    // TODO
    $.ajax({
      url: "/repos",
      type: "POST",
      contentType: "text/plain",
      data: term,
      success: (results) => {
        this.getRepos();
      },
      error: (err) => {
        console.log(err);    
      }
    });
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <Search onSearch={this.search.bind(this)}/>
      <RepoList repos={this.state.repos}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));