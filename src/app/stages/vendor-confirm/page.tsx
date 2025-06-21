import Link from 'next/link';

export default function VendorConfirmationStage() {
  return (
    <div className="space-y-6">
      <div className="bg-white shadow rounded-lg p-6">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Vendor Confirmation</h1>
            <p className="text-gray-600 mt-1">
              Vendor confirms order details and delivery timeline
            </p>
          </div>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
            Awaiting Confirmation
          </span>
        </div>

        <div className="mt-6 border-t border-gray-200 pt-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">PO Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-medium text-gray-500">PO Number</p>
              <p className="mt-1 text-sm text-gray-900">PO-2023-001</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Vendor</p>
              <p className="mt-1 text-sm text-gray-900">Tech Supplies Inc.</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">PO Date</p>
              <p className="mt-1 text-sm text-gray-900">June 15, 2023</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Status</p>
              <p className="mt-1 text-sm text-gray-900">Sent to Vendor</p>
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
                <tr className="font-bold border-t border-gray-200">
                  <td colSpan={3} className="py-4 pl-4 pr-3 text-right text-sm text-gray-900">Total</td>
                  <td className="px-3 py-4 text-sm text-gray-900">$10,272.93</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-6 border-t border-gray-200 pt-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Vendor Confirmation</h2>
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-yellow-700">
                  Waiting for vendor to confirm this order and provide an estimated delivery date.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-md font-medium text-gray-900 mb-2">Vendor Notes</h3>
              <div className="mt-1">
                <textarea
                  rows={4}
                  name="vendor-notes"
                  id="vendor-notes"
                  className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  placeholder="Add any notes or comments for the vendor..."
                  defaultValue=""
                />
              </div>
            </div>
            <div>
              <h3 className="text-md font-medium text-gray-900 mb-2">Delivery Information</h3>
              <div className="space-y-4">
                <div>
                  <label htmlFor="delivery-date" className="block text-sm font-medium text-gray-700">
                    Estimated Delivery Date
                  </label>
                  <div className="mt-1">
                    <input
                      type="date"
                      name="delivery-date"
                      id="delivery-date"
                      className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="tracking-number" className="block text-sm font-medium text-gray-700">
                    Tracking Number (if available)
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="tracking-number"
                      id="tracking-number"
                      className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      placeholder="Enter tracking number"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 border-t border-gray-200 pt-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Actions</h2>
          <div className="flex space-x-4">
            <button
              type="button"
              className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700"
            >
              Confirm Order
            </button>
            <button
              type="button"
              className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
            >
              Request Changes
            </button>
            <Link
              href="/stages/po"
              className="ml-auto px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
            >
              View Previous Stage
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Order Timeline</h2>
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
                        PO sent to <span className="font-medium text-gray-900">Tech Supplies Inc.</span>
                      </p>
                    </div>
                    <div className="whitespace-nowrap text-right text-sm text-gray-500">
                      <time dateTime="2023-06-15T12:00">June 15, 2023 12:00 PM</time>
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
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </div>
                  <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                    <div>
                      <p className="text-sm text-gray-500">
                        Waiting for vendor confirmation
                      </p>
                    </div>
                    <div className="whitespace-nowrap text-right text-sm text-gray-500">
                      <time dateTime="2023-06-15T12:05">June 15, 2023 12:05 PM</time>
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
