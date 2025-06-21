'use client';

import React, { ReactNode, useState } from 'react';

interface DashboardLayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  className?: string;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  children,
  title = 'Dashboard',
  description,
  className = ''
}) => {
  const [timeRange, setTimeRange] = useState('month');
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className={className}>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
          {description && <p className="text-gray-600">{description}</p>}
        </div>
        <div className="mt-4 md:mt-0 flex space-x-2">
          <select 
            className="text-sm border border-gray-300 rounded-md px-3 py-2 bg-white"
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
          >
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="quarter">This Quarter</option>
            <option value="year">This Year</option>
          </select>
          <div className="inline-flex rounded-md shadow-sm">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
                activeTab === 'overview'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('reports')}
              className={`px-4 py-2 text-sm font-medium ${
                activeTab === 'reports'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              Reports
            </button>
            <button
              onClick={() => setActiveTab('analytics')}
              className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
                activeTab === 'analytics'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              Analytics
            </button>
          </div>
        </div>
      </div>
      
      {React.Children.map(children, (child) => {
        if (React.isValidElement<{ 'data-tab'?: string }>(child) && child.props['data-tab'] === activeTab) {
          return child;
        }
        return null;
      })}
    </div>
  );
};

export default DashboardLayout;
