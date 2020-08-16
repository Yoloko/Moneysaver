import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Page from "./pages/Page";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import React, { Component } from 'react'
import fire from './config/fire'
import Home from './components/Home'
import Login from './components/Login'


export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: {}
    }
  }

  componentWillMount(){
    this.authListener();
  }

    authListener(){
      fire.auth().onAuthStateChanged((user) => {
        if(user){
          this.setState({user})
        }else{
          this.setState({user: null})
        }
      })
    }
  
  render() {
    return (
      <div>
        {this.state.user ? <Home/> : <Login/>}
      </div>
    )
  }
}



// function App() {
//   return (
//     <Router>
//       <div>
//         <Nav />
//         <Switch>
//           <Route exact path={["/", "/books"]}>
//             <Page />
//           </Route>
//           <Route>
//             <NoMatch />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

