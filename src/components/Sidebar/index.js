import React, { Component } from 'react';
import './index.css';

class Sidebar extends Component {
  render() {
    const { activePage, onPageChange } = this.props;

    const menuItems = [
      'Dashboard', 'Inventory', 'Order', 'Returns', 'Customers',
      'Shipping', 'Channel', 'Integrations', 'Calculators', 'Reports', 'Account'
    ];

    return (
      <div className="sidebar">
        <h1 className='website-heading'>AdaptNxt</h1>
        <ul className="sidebar-menu">
          {menuItems.map(item => (
            <li
              key={item}
              className={`sidebar-item ${activePage === item ? 'active' : ''}`}
              onClick={() => onPageChange(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Sidebar;
