import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Home extends Component {
  state = {
    problems: [ ]
  }

  componentDidMount() {
    axios.get('https://codeforces.com/api/user.status?handle=NoobCoder1998&from=1&count=10')
      .then((data) => {
        this.setState({
          problems: data.data.result
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    const { problems } = this.state;
    const List = problems.length ? (
      problems.map(problem => {
        return (
          <div className="post card" key={problem.id}>
            <div className="card-content">
              <Link to={'/' + problem.problem.name}>
              <div className="card-title">
                {problem.problem.name}
              </div>
              </Link>
              <p>{problem.contestId}</p>
            </div>
          </div>
        )
      })
    ) : (
      <div className="center">No Content!</div>
    );
    return (
      <div className="container">
        <h4 className="center">Home</h4>
        { List }
      </div>
    );
  }
}

export default Home;
