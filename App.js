import React, { Component } from 'react';
import { Route, Switch, withRouter  } from "react-router-dom";
import Imitationgram from './containers/Imitationgram';
import Signin from './components/Imitation/User/signin';
import Signup from './components/Imitation/User/signup';
import Searching from './containers/Searching';
import SoundBox from "./containers/SoundBox";
import DjYoutube from "./containers/DjYoutube";
import UserPage from "./components/Imitation/User/user-page";
import SingleMovie from "./components/Single/SingleMovie";
import SingleBook from "./components/Single/SingleBook";
import CV from "./containers/CV";
import PrivateRoute from "./components/Imitation/PrivateRoute";
import Dashboard from "./components/Imitation/Dashboard/";
import EditUser from "./components/Imitation/User/edit-user/";
import AddImage from './components/Imitation/Image/add-image';
import EditImage from './components/Imitation/Image/edit-image-page';


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
              <Route path="/user/:id"  component={UserPage} />
              <Switch>
                <PrivateRoute path="/dashboard" component={Dashboard} />
                <PrivateRoute path="/edit/:id" component={EditUser} />
                <PrivateRoute path="/add" component={AddImage} /> 
                <PrivateRoute path="/edit-image/:id" component={EditImage} /> 
              </Switch>
        </div>
        );
    }
}

export default withRouter(App);