import React from 'react';
import './App.css';
import { NavLink, BrowserRouter, Switch, Route } from "react-router-dom";
import Posts from "./containers/Home/Posts";
import  CreatingPost  from "./components/CreatingPost/CreatingPost";
import About  from "./containers/About/About";
import Add from "./containers/Add/Add";
import  Contacts  from "./containers/Contacts/Contacts";
import PostDetails from "./containers/Home/PostDetails";
import Post from './components/Post/Post';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return(
    <div className="App">
      <BrowserRouter>
          <div>
            <Nav />
            <Switch>
              <Route  path="/" exact component={Post}/>
              <Route  path="/posts" exact component={Posts} />
              <Route  path="/posts/add" exact component={CreatingPost} />
              <Route  path="/posts/:id" exact component={PostDetails} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contacts" component={Contacts} />
            </Switch>
          </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

class Nav extends React.Component {
  render() {
    return(
      <nav className="text-left ml-3">
        <div><NavLink to="/posts">Posts</NavLink></div>
        <div><NavLink to="/posts/add">Creacte new Post</NavLink></div>
        <div><NavLink to="/about">Aboute</NavLink></div>
        <div><NavLink to="/contacts">Contacts</NavLink></div>
      </nav>
    );
  }
}
