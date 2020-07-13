import React from "react";
import { Route, Switch, Redirect } from "react-router";
import "./styles.css";
import "./App.css";

import { auth, createUserProfileDocument } from "./Firebase/Firebase.utils";
import ShopPage from "./pages/shop/shop.component.jsx";
import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/Homepage.component";
import SignInSignUpPage from "./pages/sign-in-sign-up/sign-in-sign-up.component";
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';

class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // this.setState({ currentUser: user });

      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
      
        userRef.onSnapshot(snapShot => {

          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            });
        });
      }
        setCurrentUser(userAuth);
      // createUserProfileDocument(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      // <div className="App">
      //   <HomePage />
      // </div>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/signin" 
          render={() => this.props.currentUser ? 
          (
          <Redirect to='/' />
          ) : (
          <SignInSignUpPage/>
            )
          } 
          />

        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
  //dispatching the object

})

export default connect(mapStateToProps, mapDispatchToProps)(App);
