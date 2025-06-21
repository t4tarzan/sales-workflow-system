'use client';

import React from 'react';
import Link from 'next/link';
import DashboardLayout from './components/dashboard/DashboardLayout';
import StatCard from './components/dashboard/StatCard';
import RequestChart from './components/dashboard/RequestChart';
import StatusPieChart from './components/dashboard/StatusPieChart';

type WorkflowStage = {
  id: number;
  name: string;
  description: string;
  status: 'pending' | 'in-progress' | 'completed';
  path: string;
};

const workflowStages: WorkflowStage[] = [
  {
    id: 1,
    name: 'Indent Raised',
    description: 'Initial request created by QSE/Admin',
    status: 'completed',
    path: '/stages/indent',
  },
  {
    id: 2,
    name: 'PMO/QSM Approval',
    description: 'Approval by Project Management Office',
    status: 'in-progress',
    path: '/stages/approval',
  },
  {
    id: 3,
    name: 'Purchase Order',
    description: 'Creation of purchase order',
    status: 'pending',
    path: '/stages/po',
  },
  {
    id: 4,
    name: 'Vendor Confirmation',
    description: 'Vendor confirms order details',
    status: 'pending',
    path: '/stages/vendor-confirm',
  },
  {
    id: 5,
    name: 'Quality Check',
    description: 'Quality control inspection',
    status: 'pending',
    path: '/stages/quality-check',
  },
  {
    id: 6,
    name: 'Goods Receipt Note',
    description: 'Documentation of received goods',
    status: 'pending',
    path: '/stages/grn',
  },
  {
    id: 7,
    name: 'Invoice Submission',
    description: 'Vendor submits invoice',
    status: 'pending',
    path: '/stages/invoice-submission',
  },
  {
    id: 8,
    name: 'Accounts Verification',
    description: 'Finance verifies invoice',
    status: 'pending',
    path: '/stages/accounts-verification',
  },
  {
    id: 9,
    name: 'Payment Processing',
    description: 'Finance department processes payment',
    status: 'pending',
    path: '/stages/payment-processing',
  },
  {
    id: 10,
    name: 'Document Archiving',
    description: 'Final documentation and records',
    status: 'pending',
    path: '/stages/document-archiving',
  },
];

// Mock data for charts
const statusData = [
  { name: 'Completed', value: 89 },
  { name: 'In Progress', value: 15 },
  { name: 'Pending', value: 24 },
  { name: 'On Hold', value: 8 },
  { name: 'Rejected', value: 12 },
];

const monthlyData = [
  { name: 'Jan', requests: 65 },
  { name: 'Feb', requests: 59 },
  { name: 'Mar', requests: 80 },
  { name: 'Apr', requests: 81 },
  { name: 'May', requests: 76 },
  { name: 'Jun', requests: 55 },
  { name: 'Jul', requests: 40 },
];

const stagePerformanceData = workflowStages.map(stage => ({
  name: stage.name,
  'Avg. Days': Math.floor(Math.random() * 10) + 1,
  'Total Requests': Math.floor(Math.random() * 50) + 10,
}));

export default function Home() {
  return (
    <DashboardLayout 
      title="Sales Workflow Dashboard"
      description="Overview of your sales workflow and performance"
    >
      {/* Overview Tab */}
      <div data-tab="overview" className="space-y-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Total Requests"
            value={128}
            icon={
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            }
            change="12%"
            changeType="increase"
          />
          <StatCard
            title="Pending Approval"
            value={24}
            icon={
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
            change="5%"
            changeType="decrease"
          />
          <StatCard
            title="In Progress"
            value={15}
            icon={
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            }
            change="8%"
            changeType="increase"
          />
          <StatCard
            title="Completed"
            value={89}
            icon={
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            }
            change="15%"
            changeType="increase"
          />
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <RequestChart 
              data={monthlyData} 
              type="line" 
              dataKeys={['requests']} 
              title="Monthly Requests"
              height={300}
            />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <StatusPieChart 
              data={statusData} 
              title="Request Status"
              height={300}
            />
          </div>
        </div>

        {/* Stage Performance */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <RequestChart 
            data={stagePerformanceData} 
            type="bar" 
            dataKeys={['Total Requests', 'Avg. Days']} 
            title="Stage Performance"
            height={400}
          />
        </div>

        {/* Workflow Stages */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Workflow Stages</h2>
          <div className="space-y-4">
            {workflowStages.map((stage) => (
              <Link key={stage.id} href={stage.path}>
                <div 
                  className={`p-4 rounded-lg border ${
                    stage.status === 'completed' 
                      ? 'bg-green-50 border-green-200' 
                      : stage.status === 'in-progress'
                      ? 'bg-blue-50 border-blue-200'
                      : 'bg-gray-50 border-gray-200'
                  } hover:shadow-md transition-shadow`}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">{stage.name}</h3>
                      <p className="text-sm text-gray-600">{stage.description}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      stage.status === 'completed' 
                        ? 'bg-green-100 text-green-800' 
                        : stage.status === 'in-progress'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {stage.status.replace('-', ' ')}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Quick Actions</h2>
          <div className="flex flex-wrap gap-4">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
              New Request
            </button>
            <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors">
              Generate Report
            </button>
            <Link href="/requests">
              <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors">
                View All Requests
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Reports Tab */}
      <div data-tab="reports" className="space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Reports</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Monthly Performance Report', icon: '📊', date: 'Jun 21, 2023' },
              { title: 'Vendor Performance Analysis', icon: '🏭', date: 'Jun 18, 2023' },
              { title: 'Process Bottlenecks', icon: '⏱️', date: 'Jun 15, 2023' },
              { title: 'Approval Times Report', icon: '⏰', date: 'Jun 10, 2023' },
              { title: 'Quality Metrics', icon: '✅', date: 'Jun 5, 2023' },
              { title: 'Financial Summary', icon: '💰', date: 'Jun 1, 2023' },
            ].map((report, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">{report.icon}</div>
                <h3 className="font-medium text-gray-900 mb-1">{report.title}</h3>
                <p className="text-sm text-gray-500">Last updated: {report.date}</p>
                <div className="mt-3 flex justify-between items-center">
                  <span className="text-xs px-2 py-1 bg-blue-50 text-blue-700 rounded-full">PDF</span>
                  <button className="text-sm text-blue-600 hover:text-blue-800">Download</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Analytics Tab */}
      <div data-tab="analytics" className="space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Analytics Dashboard</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Request Distribution</h3>
              <div className="h-64">
                <StatusPieChart 
                  data={statusData} 
                  height={250}
                  innerRadius="40%"
                  outerRadius="70%"
                  showLabel={false}
                />
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Monthly Trend</h3>
              <div className="h-64">
                <RequestChart 
                  data={monthlyData} 
                  type="line" 
                  dataKeys={['requests']} 
                  height={250}
                />
              </div>
            </div>
            <div className="lg:col-span-2 bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Stage Performance</h3>
              <div className="h-96">
                <RequestChart 
                  data={stagePerformanceData} 
                  type="bar" 
                  dataKeys={['Total Requests', 'Avg. Days']} 
                  height={400}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
