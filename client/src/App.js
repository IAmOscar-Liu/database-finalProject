import React ,{ useState }from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import {Button, ButtonToolbar, Table} from 'react-bootstrap';
// import axios from 'axios';
import Header from './components/Header';
import Scroll from './components/Scroll';
import Grid from './components/Grid';
import Nav from './components/Nav';
import User from './components/User';
import Layout from './components/Layout';
import Cover from './components/Cover';
import About from './pages/About';
import Cart from './pages/Cart';
import SignIn from './pages/SignIn';
import History from './pages/History';
import Favorites from './pages/Favorites';
import { MovieProvider } from './components/MovieContext';

function App() {
  
  const [isUserOpen, toggleIsUserOpen] = useState(false);
  // const [isUserIpGot, toggleIsUserIpGot] = useState(false);

  // if(!isUserIpGot){
  //   console.log('fetching user ip');
  //   toggleIsUserIpGot(true);
  //   setTimeout(() => handleGetUserIp(), 200);
  // }

  // const handleGetUserIp = async () => {
  //   try{
  //     const result = await axios.get('/get_user_ip');
      
  //     const data = result.data;
  //     console.log(data.ip);
  //   }catch(err){
  //       console.log(err);
  //   }
  // }

  return (
    <div className='app'>
      <MovieProvider>
        <Router> 
          <Cover />
          <Header>
            <Nav toggleIsUserOpen={()=>toggleIsUserOpen(prev=>!prev)} />
          </Header>
          <Layout isUserOpen={isUserOpen}>
            <Switch>
              <Route exact path="/">
                <div>
                  <Scroll /> 
                  <Grid/>
                </div>
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/cart">
                <Cart />
              </Route>
              <Route path="/signin">
                <SignIn />
              </Route>
              <Route path="/history">
                <History />
              </Route>
              <Route path="/favorites">
                <Favorites />
              </Route>
            </Switch>
            <User />
          </Layout>
        </Router>  
      </MovieProvider>
    </div>    
  );
}

export default App;
