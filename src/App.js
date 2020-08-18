import React from 'react';
import jwtDecode from 'jwt-decode'
import { BrowserRouter, Route, Switch,Redirect } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import Account from './components/Account'
import Blog from './components/Blog'
import './App.css';
import './assests/styles/styles.css'
import BlogPost from './components/BlogPost';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    try {
      const jwt = localStorage.getItem('token')
      const user = jwtDecode(jwt)
      this.setState({ user })

    } catch (error) {

    }
  }
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar user={this.state.user} />
          <Switch>
            <Route exact path='/' component={Home} />
            <Redirect from='/home' to='/'/>
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/account' component={Account}/>
            <Route exact path='/blog' component={Blog} />
            <Route exact path='/blogpost/:id' component={BlogPost} />

          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}



export default App;
