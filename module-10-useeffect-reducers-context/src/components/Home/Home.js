import React from 'react';
import Button from '../UI/Button/Button';

import Card from '../UI/Card/Card';
import classes from './Home.module.css';

const Home = (props) => {
  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <Button onClick={props.onLogout}>Logout</Button> {/* can use context api here but not need to because this is the child component of the component which defines logout functionality i.e. App.js */}
    </Card>
  );
};

export default Home;
