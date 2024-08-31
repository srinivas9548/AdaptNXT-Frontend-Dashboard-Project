import {Component} from 'react';

import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';

import './App.css';

class App extends Component {
  state = {
    activePage: 'Dashboard'
  };

  handlePageChange = (page) => {
    this.setState({ activePage: page });
  };

  renderPage = () => {
    const { activePage } = this.state;
    switch (activePage) {
      case 'Dashboard':
        return <Dashboard />;
      // Add more cases for other pages if needed
      default:
        return <Dashboard />;
    }
  };

  render() {
    const { activePage } = this.state;

    return (
      <div className="App">
        <Sidebar activePage={activePage} onPageChange={this.handlePageChange} />
        <div className="content">
          {this.renderPage()}
        </div>
      </div>
    );
  }
}

export default App;
