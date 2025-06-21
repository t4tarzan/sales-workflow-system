'use client';

import React from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface ChartData {
  name: string;
  [key: string]: string | number;
}

interface RequestChartProps {
  data: ChartData[];
  type?: 'bar' | 'line';
  dataKeys: string[];
  colors?: string[];
  height?: number;
  title?: string;
}

const defaultColors = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6'];

const RequestChart: React.FC<RequestChartProps> = ({
  data,
  type = 'bar',
  dataKeys,
  colors = defaultColors,
  height = 300,
  title
}) => {
  const ChartComponent = type === 'bar' ? BarChart : LineChart;
  
  return (
    <div className="w-full h-full">
      {title && <h3 className="text-lg font-medium text-gray-900 mb-4">{title}</h3>}
      <div style={{ width: '100%', height }}>
        <ResponsiveContainer width="100%" height="100%">
          <ChartComponent data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            {dataKeys.map((key, index) => (
              type === 'bar' ? (
                <Bar 
                  key={key}
                  dataKey={key}
                  fill={colors[index % colors.length]}
                  name={key}
                />
              ) : (
                <Line 
                  key={key}
                  type="monotone"
                  dataKey={key}
                  stroke={colors[index % colors.length]}
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  name={key}
                />
              )
            ))}
          </ChartComponent>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RequestChart;
