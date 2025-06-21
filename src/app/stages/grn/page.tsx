'use client';

import React from 'react';
import Link from 'next/link';

interface ReceivedItem {
  id: number;
  name: string;
  description: string;
  orderedQty: number;
  receivedQty: number;
  condition: string;
  notes: string;
}

const receivedItems: ReceivedItem[] = [
  {
    id: 1,
    name: 'Laptop',
    description: 'Dell XPS 15, 16GB RAM, 512GB SSD',
    orderedQty: 5,
    receivedQty: 5,
    condition: 'Good',
    notes: ''
  },
  {
    id: 2,
    name: 'Monitor',
    description: '27\" 4K Monitor',
    orderedQty: 5,
    receivedQty: 5,
    condition: 'Good',
    notes: ''
  }
];

const GRNStage: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white shadow rounded-lg p-6">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Goods Receipt Note (GRN)</h1>
            <p className="text-gray-600 mt-1">
              Record and verify received goods against purchase order
            </p>
          </div>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
            In Progress
          </span>
        </div>

        <div className="mt-6 border-t border-gray-200 pt-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Delivery Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-medium text-gray-500">PO Number</p>
              <p className="mt-1 text-sm text-gray-900">PO-2023-001</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Vendor</p>
              <p className="mt-1 text-sm text-gray-900">Tech Supplies Inc.</p>
            </div>
          </div>
        </div>

        <div className="mt-6 border-t border-gray-200 pt-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Received Items</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">Item</th>
                  <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Description</th>
                  <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Ordered Qty</th>
                  <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Received Qty</th>
                  <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Condition</th>
                  <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {receivedItems.map((item) => (
                  <tr key={item.id}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900">
                      {item.name}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {item.description}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {item.orderedQty}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm">
                      <input
                        type="number"
                        min="0"
                        max={item.orderedQty}
                        defaultValue={item.receivedQty}
                        className="block w-20 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      />
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm">
                      <select
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                        defaultValue={item.condition}
                      >
                        <option>Good</option>
                        <option>Damaged</option>
                        <option>Partially Damaged</option>
                        <option>Wrong Item</option>
                      </select>
                    </td>
                    <td className="px-3 py-4 text-sm">
                      <input
                        type="text"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                        placeholder="Add notes..."
                        defaultValue={item.notes}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-6 border-t border-gray-200 pt-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Actions</h2>
          <div className="flex space-x-4">
            <button
              type="button"
              className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700"
            >
              Complete GRN
            </button>
            <button
              type="button"
              className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
            >
              Save Draft
            </button>
            <Link
              href="/stages/quality-check"
              className="ml-auto px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
            >
              Back to Previous Stage
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GRNStage;
