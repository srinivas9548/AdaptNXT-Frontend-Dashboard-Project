import React, { Component } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, Label } from 'recharts';
import './index.css';
import { AiOutlineExclamationCircle } from "react-icons/ai";

class Dashboard extends Component {
  state = {
    data: [
      { "date": "2024-01-01", "sales": 2400, "orders": 2400 },
      { "date": "2024-01-02", "sales": 1398, "orders": 2210 },
      { "date": "2024-01-03", "sales": 9800, "orders": 2290 },
      { "date": "2024-01-04", "sales": 3908, "orders": 2000 },
      { "date": "2024-01-05", "sales": 4800, "orders": 2181 },
      { "date": "2024-01-06", "sales": 3800, "orders": 2500 },
      { "date": "2024-01-07", "sales": 4300, "orders": 2100 }
    ],
    pieData: [
      { name: 'WooCommerce', value: 400 },
      { name: 'Shopify', value: 300 }
    ],
    colors: ['#299696', '#e8611e']
  };

  renderCustomLabel = ({ percent }) => {
    return `${(percent * 100).toFixed(0)}%`;
  };

  render() {
    const { data, pieData, colors } = this.state;
    const total = pieData.reduce((acc, item) => acc + item.value, 0);

    return (
      <div className='dashboard-container'>
        <div className='dashboard-header'>
          <h1 className='dashboard-heading'>Dashboard</h1>
        </div>
        <div className='dashboard-barchart-piechart-container'>
          <div className="dashboard-barchart-content">
            <div className='dashboard-sub-header'>
              <h2 className="dashboard-title">Sales vs Orders</h2>
              <AiOutlineExclamationCircle size={20} />
            </div>
            <div className="chart-container">
              <ResponsiveContainer width="100%" height={400}>
                <LineChart
                  data={data}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="sales" stroke="#299696" />
                  <Line type="monotone" dataKey="orders" stroke="#e8611e" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className='dashboard-piechart-content'>
            <div className='dashboard-sub-header'>
              <h2 className="dashboard-title">Portion of Sales</h2>
              <AiOutlineExclamationCircle size={20} />
            </div>
            <div className="chart-container">
              <ResponsiveContainer width="100%" height={400}>
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                    label={this.renderCustomLabel}
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                    ))}
                    <Label value={`Total: ${total}`} position="center" fill='black' />
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
