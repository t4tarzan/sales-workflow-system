import Link from 'next/link';

export default function PurchaseOrderStage() {
  return (
    <div className="space-y-6">
      <div className="bg-white shadow rounded-lg p-6">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Purchase Order</h1>
            <p className="text-gray-600 mt-1">
              Creation and management of purchase orders
            </p>
          </div>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
            Pending
          </span>
        </div>

        <div className="mt-6 border-t border-gray-200 pt-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">PO Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-medium text-gray-500">PO Number</p>
              <p className="mt-1 text-sm text-gray-900">PO-2023-001 (Draft)</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Vendor</p>
              <p className="mt-1 text-sm text-gray-900">Tech Supplies Inc.</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Request ID</p>
              <p className="mt-1 text-sm text-gray-900">REQ-2023-001</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Status</p>
              <p className="mt-1 text-sm text-gray-900">Draft</p>
            </div>
          </div>
        </div>

        <div className="mt-6 border-t border-gray-200 pt-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Order Items</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">Item</th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Quantity</th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Unit Price</th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Total</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900">Dell XPS 15, 16GB RAM, 512GB SSD</td>
                  <td className="px-3 py-4 text-sm text-gray-500">5</td>
                  <td className="px-3 py-4 text-sm text-gray-500">$1,499.00</td>
                  <td className="px-3 py-4 text-sm font-medium text-gray-900">$7,495.00</td>
                </tr>
                <tr>
                  <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900">27" 4K Monitor</td>
                  <td className="px-3 py-4 text-sm text-gray-500">5</td>
                  <td className="px-3 py-4 text-sm text-gray-500">$399.00</td>
                  <td className="px-3 py-4 text-sm font-medium text-gray-900">$1,995.00</td>
                </tr>
                <tr className="font-medium">
                  <td colSpan={3} className="py-4 pl-4 pr-3 text-right text-sm text-gray-500">Subtotal</td>
                  <td className="px-3 py-4 text-sm text-gray-900">$9,490.00</td>
                </tr>
                <tr className="font-medium">
                  <td colSpan={3} className="py-4 pl-4 pr-3 text-right text-sm text-gray-500">Tax (8.25%)</td>
                  <td className="px-3 py-4 text-sm text-gray-900">$782.93</td>
                </tr>
                <tr className="font-bold border-t border-gray-200">
                  <td colSpan={3} className="py-4 pl-4 pr-3 text-right text-sm text-gray-900">Total</td>
                  <td className="px-3 py-4 text-sm text-gray-900">$10,272.93</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-6 border-t border-gray-200 pt-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Vendor Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-medium text-gray-500">Vendor Name</p>
              <p className="mt-1 text-sm text-gray-900">Tech Supplies Inc.</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Contact Person</p>
              <p className="mt-1 text-sm text-gray-900">Sarah Johnson</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Email</p>
              <p className="mt-1 text-sm text-gray-900">sarah.johnson@techsupplies.com</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Phone</p>
              <p className="mt-1 text-sm text-gray-900">(555) 123-4567</p>
            </div>
          </div>
        </div>

        <div className="mt-6 border-t border-gray-200 pt-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Actions</h2>
          <div className="flex space-x-4">
            <button
              type="button"
              className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
            >
              Generate PO
            </button>
            <button
              type="button"
              className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
            >
              Edit PO
            </button>
            <button
              type="button"
              className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700"
            >
              Send to Vendor
            </button>
            <Link
              href="/stages/approval"
              className="ml-auto px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
            >
              View Previous Stage
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">PO History</h2>
        <div className="flow-root">
          <ul role="list" className="-mb-8">
            <li>
              <div className="relative pb-8">
                <span className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
                <div className="relative flex space-x-3">
                  <div>
                    <span className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center ring-8 ring-white">
                      <svg className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </div>
                  <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                    <div>
                      <p className="text-sm text-gray-500">
                        Request approved by <span className="font-medium text-gray-900">Alex Morgan (PMO)</span>
                      </p>
                    </div>
                    <div className="whitespace-nowrap text-right text-sm text-gray-500">
                      <time dateTime="2023-06-15T11:15">June 15, 2023 11:15 AM</time>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="relative pb-8">
                <div className="relative flex space-x-3">
                  <div>
                    <span className="h-8 w-8 rounded-full bg-yellow-400 flex items-center justify-center ring-8 ring-white">
                      <svg className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </div>
                  <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                    <div>
                      <p className="text-sm text-gray-500">
                        PO drafted by <span className="font-medium text-gray-900">Procurement Team</span>
                      </p>
                    </div>
                    <div className="whitespace-nowrap text-right text-sm text-gray-500">
                      <time dateTime="2023-06-15T11:30">June 15, 2023 11:30 AM</time>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
