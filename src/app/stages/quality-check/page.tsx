import Link from 'next/link';

const qualityCheckItems = [
  {
    id: 1,
    name: 'Laptop',
    description: 'Dell XPS 15, 16GB RAM, 512GB SSD',
    quantity: 5,
    passed: null,
    notes: ''
  },
  {
    id: 2,
    name: 'Monitor',
    description: '27\" 4K Monitor',
    quantity: 5,
    passed: null,
    notes: ''
  }
];

export default function QualityCheckStage() {
  return (
    <div className="space-y-6">
      <div className="bg-white shadow rounded-lg p-6">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Quality Control Check</h1>
            <p className="text-gray-600 mt-1">
              Inspection and verification of delivered items
            </p>
          </div>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
            In Progress
          </span>
        </div>

        <div className="mt-6 border-t border-gray-200 pt-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Delivery Details</h2>
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
              <p className="text-sm font-medium text-gray-500">Delivery Date</p>
              <p className="mt-1 text-sm text-gray-900">June 20, 2023</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Status</p>
              <p className="mt-1 text-sm text-gray-900">Awaiting QC</p>
            </div>
          </div>
        </div>

        <div className="mt-6 border-t border-gray-200 pt-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Quality Control Checklist</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">Item</th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Description</th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Quantity</th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Status</th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {qualityCheckItems.map((item) => (
                  <tr key={item.id}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900">
                      {item.name}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {item.description}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {item.quantity}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      <select
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                        defaultValue=""
                      >
                        <option value="">Select status</option>
                        <option value="passed">Passed</option>
                        <option value="failed">Failed</option>
                        <option value="partial">Partially Accepted</option>
                      </select>
                    </td>
                    <td className="px-3 py-4 text-sm text-gray-500">
                      <input
                        type="text"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                        placeholder="Add notes..."
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-6 border-t border-gray-200 pt-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">QC Photos</h2>
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
            <div className="space-y-1 text-center">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 48 48"
                aria-hidden="true"
              >
                <path
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="flex text-sm text-gray-600">
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                >
                  <span>Upload photos</span>
                  <input id="file-upload" name="file-upload" type="file" className="sr-only" multiple />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>
        </div>

        <div className="mt-6 border-t border-gray-200 pt-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">QC Summary</h2>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label htmlFor="qc-notes" className="block text-sm font-medium text-gray-700">
                Inspection Notes
              </label>
              <div className="mt-1">
                <textarea
                  id="qc-notes"
                  name="qc-notes"
                  rows={3}
                  className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  placeholder="Add any additional notes or observations from the quality check..."
                  defaultValue={''}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Overall Status</label>
              <div className="mt-1 space-y-2">
                <div className="flex items-center">
                  <input
                    id="qc-passed"
                    name="qc-status"
                    type="radio"
                    className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300"
                  />
                  <label htmlFor="qc-passed" className="ml-3 block text-sm font-medium text-gray-700">
                    Passed - All items meet quality standards
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="qc-partial"
                    name="qc-status"
                    type="radio"
                    className="h-4 w-4 text-yellow-500 focus:ring-yellow-500 border-gray-300"
                  />
                  <label htmlFor="qc-partial" className="ml-3 block text-sm font-medium text-gray-700">
                    Partially Accepted - Some items accepted with exceptions
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="qc-failed"
                    name="qc-status"
                    type="radio"
                    className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300"
                  />
                  <label htmlFor="qc-failed" className="ml-3 block text-sm font-medium text-gray-700">
                    Failed - Items do not meet quality standards
                  </label>
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
              Complete QC
            </button>
            <button
              type="button"
              className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
            >
              Save Draft
            </button>
            <button
              type="button"
              className="px-4 py-2 border border-red-300 rounded-md shadow-sm text-sm font-medium text-red-700 bg-white hover:bg-red-50"
            >
              Flag Issues
            </button>
            <Link
              href="/stages/vendor-confirm"
              className="ml-auto px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
            >
              View Previous Stage
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">QC History</h2>
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
                        Delivery received from <span className="font-medium text-gray-900">Tech Supplies Inc.</span>
                      </p>
                    </div>
                    <div className="whitespace-nowrap text-right text-sm text-gray-500">
                      <time dateTime="2023-06-20T09:30">June 20, 2023 09:30 AM</time>
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
                        Awaiting quality control inspection
                      </p>
                    </div>
                    <div className="whitespace-nowrap text-right text-sm text-gray-500">
                      <time dateTime="2023-06-20T09:35">June 20, 2023 09:35 AM</time>
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
