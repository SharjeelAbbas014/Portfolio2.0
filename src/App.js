import React, {useState} from 'react';
import './App.css';
import Name from './components/Name/name'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Projects from './components/Projects/Projects'
import NavBarContents from './components/NavBarContents/navBarContents'

function App() {
  const [isNav,setIsNav] = useState(false);
  const navClick =()=>{
    if(isNav === false){
      console.log(isNav)
      setIsNav(true);
    }
    else{
      console.log(isNav)
      setIsNav(false);
    }
  }
  const navBallClick = ()=>{
    if(!isNav){
      navClick();
    }
  }
  return (
    <div className="App">
      <Router>
      {isNav?<NavBarContents setIsNav={setIsNav}></NavBarContents>:null}
      <Link className="mainLogo" to='/'><img src="https://cdn.icon-icons.com/icons2/2248/PNG/512/home_circle_icon_137496.png"/></Link>
      <Switch>
          <Route path='/projects' component={Projects} />
          <Route path='/' exact component={Name} />
        </Switch>
      <div id="hero"></div>
      
      <div onClick={navBallClick} className="nav">
        <div onClick={navClick} id="bars">
        <div className="bar" id={isNav?"bar1":""}></div>
        <div className="bar" id={isNav?"bar2":""}></div>
        <div className="bar" id={isNav?"bar3":""}></div>
        </div>
        <div className={!isNav?"displayNone":"popUp"}></div>
      </div>
      </Router>

    </div>
  );
}

export default App;
