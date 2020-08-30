import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Page from "../pages/Page";
import NoMatch from "../pages/NoMatch";
import Nav from "./Nav";
import React, { Component } from 'react'
import fire from '../config/fire'
import Home from './Home'
import Login from './Login'

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
        // console.log(this.state.user.uid)
      })
    }
  
  render() {
    return (
      <div>
        {this.state.user ? <Home userId={this.state.user}/> : <Login/>}
        {console.log(this.state.user)}
      </div>
    )
  }
}

// export const AuthProvider = ({ children }: any) => {
// useEffect(() => {
//   firebase.auth().onAuthStateChanged((user: any) => {
//     setUser(user);
//     setLoadingAuthState(false);
//  });
// }, []);
// return (
//   <AuthContext.Provider
//    value={{
//         user,
//         authenticated: user !== null,
//         setUser,
//         loadingAuthState
//   }}>
//     {children} 
//  </AuthContext.Provider>
// );
// }























// export default function App() {
//   return (
//     <Router>
//       <div>
//         {/* <Nav /> */}
//         <Switch>
//           <Route exact path={["/", "/savings"]}>
//             <Home />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

