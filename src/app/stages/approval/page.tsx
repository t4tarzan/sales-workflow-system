import Link from 'next/link';

export default function ApprovalStage() {
  return (
    <div className="space-y-6">
      <div className="bg-white shadow rounded-lg p-6">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">PMO/QSM Approval</h1>
            <p className="text-gray-600 mt-1">
              Approval by Project Management Office
            </p>
          </div>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
            In Progress
          </span>
        </div>

        <div className="mt-6 border-t border-gray-200 pt-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Request Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-medium text-gray-500">Request ID</p>
              <p className="mt-1 text-sm text-gray-900">REQ-2023-001</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Raised By</p>
              <p className="mt-1 text-sm text-gray-900">John Doe (QSE)</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Date</p>
              <p className="mt-1 text-sm text-gray-900">June 15, 2023</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Status</p>
              <p className="mt-1 text-sm text-gray-900">Pending Approval</p>
            </div>
          </div>
        </div>

        <div className="mt-6 border-t border-gray-200 pt-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Items for Approval</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">Item</th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Quantity</th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Unit</th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900">Laptop</td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">5</td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">Units</td>
                  <td className="px-3 py-4 text-sm text-gray-500">Dell XPS 15, 16GB RAM, 512GB SSD</td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900">Monitor</td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">5</td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">Units</td>
                  <td className="px-3 py-4 text-sm text-gray-500">27" 4K Monitor</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-6 border-t border-gray-200 pt-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Approval Actions</h2>
          <div className="flex space-x-4">
            <button
              type="button"
              className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700"
            >
              Approve
            </button>
            <button
              type="button"
              className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
            >
              Request Changes
            </button>
            <button
              type="button"
              className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700"
            >
              Reject
            </button>
            <Link
              href="/stages/indent"
              className="ml-auto px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
            >
              View Previous Stage
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Approval History</h2>
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
                        Request submitted by <span className="font-medium text-gray-900">John Doe</span>
                      </p>
                    </div>
                    <div className="whitespace-nowrap text-right text-sm text-gray-500">
                      <time dateTime="2023-06-15T10:30">June 15, 2023 10:30 AM</time>
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
                        Waiting for approval from <span className="font-medium text-gray-900">PMO/QSM</span>
                      </p>
                    </div>
                    <div className="whitespace-nowrap text-right text-sm text-gray-500">
                      <time dateTime="2023-06-15T10:35">June 15, 2023 10:35 AM</time>
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
