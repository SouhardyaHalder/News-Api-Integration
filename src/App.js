import React, { Component } from 'react'
import NavBar from './Components/NavBar'
import News from './Components/News'
import TechNews from './Components/TechNews';
import AppleNews from './Components/AppleNews';
import BusinessNews from './Components/BuisnessNews';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeSection: 'TechNews' // Initially set to 'TechNews'
    };
  }

  renderSection = () => {
    const { activeSection } = this.state;

    // Render the appropriate component based on the activeSection state
    switch (activeSection) {
      case 'TechNews':
        return <TechNews />;
      case 'AppleNews':
        return <AppleNews />;
      case 'BusinessNews':
        return <BusinessNews />;
      default:
        return null;
    }
  };
  setActiveSection = (section) => {
    // Set the active section based on the clicked heading
    this.setState({ activeSection: section });
  };
  render() {
    const { activeSection } = this.state;
    return (
      <div>
        <NavBar />

        <div className="container" style={{ display: 'flex', justifyContent: 'space-around' }}>
          <h2 style={{ cursor: 'pointer' }} onClick={() => this.setActiveSection('TechNews')}>TechNews</h2>
          <h2 style={{ cursor: 'pointer' }} onClick={() => this.setActiveSection('AppleNews')}>AppleNews</h2>
          <h2 style={{ cursor: 'pointer' }} onClick={() => this.setActiveSection('BusinessNews')}>BusinessNews</h2>
        </div>
        <div className="container">
        {this.renderSection()}
        </div>
      </div>

    )
  }
}
