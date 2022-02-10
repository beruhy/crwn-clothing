import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import { HomePage } from './pages/homepage/homepage.component';


const HatsPage = (props) => {
  console.log(props)
  return (
  <div>
    <Link to="/">Home</Link>
    <h1>Hat  {props.match.params.hatId}</h1>
  </div>
)};

function App() {
  return (
    <div>
      <Switch>
        <Route path="/shop/hats" exact component={HatsPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  
  );
}

export default App;
