import React, { Component, Fragment } from 'react';
import { Route, Switch, withRouter  } from "react-router-dom";
import Header from './containers/Header';
import Imitationgram from './containers/Imitationgram';
import Signin from './components/Imitation/User/signin';
import Signup from './components/Imitation/User/signup';
import Searching from './containers/Searching';
import SoundBox from "./containers/SoundBox";
import DjYoutube from "./containers/DjYoutube";
import ChatApp from "./components/ChatApp/ChatApp";
import UserPage from "./components/ChatApp/user-page";
import NewUserPage from "./components/ChatApp/add-user";
import SingleMovie from "./components/Single/SingleMovie";
import SingleBook from "./components/Single/SingleBook";
import CV from "./containers/CV";
import PrivateRoute from "./components/Imitation/PrivateRoute";
import Dashboard from "./components/Imitation/Dashboard/";
import EditUser from "./components/Imitation/User/edit-user/";



class App extends Component {
    render() {
        return (

            <div className="App">
              <Route exact path="/" component={CV}/>
              <Route path="/kaamelott" component={SoundBox} />
              <Route path="/imitationgram" component={Imitationgram} />
              <Route path="/signin" component={Signin} />
              <Route path="/signup" component={Signup} />
              <Route path="/search-app" component={Searching} />
              <Route path="/movie/:id"  component={SingleMovie} />
              <Route path="/book/:id"  component={SingleBook} />
              <Route path="/dj-youtube"  component={DjYoutube} />
              <Route path="/chat-app" component={ChatApp} />
              <Route path="/chat-app/user/:id"  component={UserPage} />
              <Route path="/chat-app/user/new" component={NewUserPage} />
              <Switch>
                <PrivateRoute exact path="/dashboard/" component={Dashboard} />
                <PrivateRoute  path="/dashboard/edit/:id" component={EditUser} />
              </Switch>
        </div>
        );
    }
}

export default withRouter(App);