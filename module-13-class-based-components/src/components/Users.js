import { Component, useState } from 'react';
import User from './User';

import classes from './Users.module.css';

const DUMMY_USERS = [
  { id: 'u1', name: 'Siddharth' },
  { id: 'u2', name: 'Harshad' },
  { id: 'u3', name: 'Aniruddha' },
];

class Users extends Component {
  constructor() {
    super(); // when you use a constructor for your class you use keyword 'super'
    // your state in class based component will always be an OBJECT and also that property has to be named as 'state'
    this.state = {
      showUsers: true,
      moreState: 'Test'
      // nested: {},
      // data: []
    };
  }

  toggleUsersHandler() {
    // 'setState' is a special method provided by react and it also always takes in OBJECT
    // this.setState({showUsers: false}); // if you only change 1 state then your second state will be kept as it is
    // OR
    this.setState((curState) => {
      return { showUsers: !curState.showUsers }
    });
  }

  render() {
    // can add helper constants in render method
    const usersList = (
      <ul>
        {DUMMY_USERS.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}> {/* bind: sometimes we this keyword dosen't work while handling events i.e. dosen't refer to the class context, so the reason to explicitly reference the context we use bind keyword */}
          {this.state.showUsers ? 'Hide' : 'Show'} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}

/* const Users = () => {
  const [showUsers, setShowUsers] = useState(true);

  const toggleUsersHandler = () => {
    setShowUsers((curState) => !curState);
  };

  const usersList = (
    <ul>
      {DUMMY_USERS.map((user) => (
        <User key={user.id} name={user.name} />
      ))}
    </ul>
  );

  return (
    <div className={classes.users}>
      <button onClick={toggleUsersHandler}>
        {showUsers ? 'Hide' : 'Show'} Users
      </button>
      {showUsers && usersList}
    </div>
  );
}; */

export default Users;
