import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Pages/Home';
import { protocolManager } from './Rest/ProtocolManager';
import { Component } from 'react';
import { useState } from 'react';



export default class App extends Component {
  constructor(props) { //App.js holds state
    super(props);
    this.state = {
      users: [],
    }
  }

  async componentDidMount() { //WHY DID NO ONE TELL ME IF YOU CALL A FUNCTION THAT WAITS YOU HAVE TO WAIT FOR IT WHEN YOU CALL IT
    try {
      let users = await (protocolManager.get(''));
      this.setState({ users: users });
      console.log("this.state.users within App.js ComponentDidMount == ", this.state.users);
    } catch (e) {
      console.log("error calling protocolManager.get() ", e);
    }
  }



  render() {
    console.log("this.state.users when App.js is rendered", this.state.users);
    return (
      <Home users={this.state.users} />
    );
  }
}

/*
React & Bootstrap Based Wix Clone | Working Title: "Build-It Bootstrap"


Key Components:


    Navbar ( Navbar . js )
    Page Server ( App . js )
    REST Manager ( ProtocolManager . js )
    Home Page ( Home . js )
    Site Editor Page ( UserSiteEditor . js )
    Site Preview Page ( UserSiteViewer . js ) | { Also Allows other users to view an author's site }
    Title Block ( UserSiteTitle . js )
    Text Block ( UserSiteText . js )
    Image ( UserSiteImage . js ) | {adjustable sizing}
    Site Button / Link ( UserSiteButton . js )
    Form Alert Container ( FormAlertContainer . js )
    Page Search Bar ( SearchBar . js ) | { On Main site, only searches through the properties of a site, Site Name, Site Author, Etc | On User Sites, searches things on that user's site }
    Page Search Page ( SearchResultsPage . js ) | { Similar to above, shows results and properties for Sites if on Main Site | On User Sites, able to search by the properties on user's site }


Also Needs:


    DB or API housing WebPages + Info ( UserSites . json )



Future Ideas:


    Log In Editing { Not with Username and Password info, but with an email and author ID }



*/

//Gushers, also known as late stage fruit roll up