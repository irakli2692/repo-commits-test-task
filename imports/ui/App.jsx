import React from 'react';
import { Meteor } from "meteor/meteor";
import Commit from "./Commit"

class App extends React.Component  {
  constructor (props) {
    super(props);

    this.state = {
      commits: []
    };
  }

  componentDidMount() {
    this.getCommits();
  }
  
  getCommits() {
    Meteor.call('commits.getList', (error, newCommits) => {
      if (error) return;

      this.setState({
        commits: newCommits
      });
    });
  }

  render() {
    return (
      <div>
        {this.state.commits.map(commit => <Commit commit={commit} key={commit.sha}/>)}
      </div>
    );
  }
}

export default App;
