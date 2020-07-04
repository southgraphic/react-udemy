import React from "react";
import { Route, Switch } from "react-router";
import "./styles.css";
import "./App.css";

import { auth } from "./Firebase/Firebase.utils";
import ShopPage from "./pages/shop/shop.component.jsx";
import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/Homepage.component";
import SignInSignUpPage from "./pages/sign-in-sign-up/sign-in-sign-up.component";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
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
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignInSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
