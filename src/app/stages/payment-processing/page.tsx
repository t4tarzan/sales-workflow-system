import Link from 'next/link';

const paymentDetails = {
  invoiceNumber: 'INV-2023-001',
  poNumber: 'PO-2023-001',
  vendor: 'Tech Supplies Inc.',
  invoiceDate: 'June 20, 2023',
  dueDate: 'July 20, 2023',
  paymentTerms: 'Net 30',
  status: 'Approved',
  approvedBy: 'John D.',
  approvedAt: '2023-06-21T11:30',
  subtotal: 9490.00,
  tax: 782.93,
  total: 10272.93,
  paymentMethod: 'Bank Transfer',
  bankAccount: '**** 4567',
  paymentStatus: 'Scheduled'
};

const paymentSchedule = [
  {
    id: 1,
    amount: 5136.47,
    dueDate: '2023-07-20',
    status: 'Scheduled',
    paymentMethod: 'Bank Transfer',
    reference: 'PYMT-2023-001-1'
  },
  {
    id: 2,
    amount: 5136.46,
    dueDate: '2023-08-20',
    status: 'Pending',
    paymentMethod: 'Bank Transfer',
    reference: 'PYMT-2023-001-2'
  }
];

export default function PaymentProcessingStage() {
  return (
    <div className="space-y-6">
      <div className="bg-white shadow rounded-lg p-6">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Payment Processing</h1>
            <p className="text-gray-600 mt-1">
              Manage and track payment processing for approved invoices
            </p>
          </div>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
            Payment Scheduled
          </span>
        </div>

        <div className="mt-6 border-t border-gray-200 pt-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Payment Summary</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm font-medium text-gray-500">Total Amount</p>
              <p className="mt-1 text-2xl font-semibold text-gray-900">${paymentDetails.total.toLocaleString('en-US', { minimumFractionDigits: 2 })}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm font-medium text-gray-500">Payment Status</p>
              <p className="mt-1 text-2xl font-semibold text-gray-900">{paymentDetails.paymentStatus}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm font-medium text-gray-500">Payment Method</p>
              <p className="mt-1 text-2xl font-semibold text-gray-900">{paymentDetails.paymentMethod}</p>
            </div>
          </div>
        </div>

        <div className="mt-6 border-t border-gray-200 pt-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Payment Schedule</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">Reference</th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Amount</th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Due Date</th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Status</th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Method</th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                    <span className="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {paymentSchedule.map((payment) => (
                  <tr key={payment.id}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900">
                      {payment.reference}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      ${payment.amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {new Date(payment.dueDate).toLocaleDateString()}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        payment.status === 'Completed' 
                          ? 'bg-green-100 text-green-800' 
                          : payment.status === 'Scheduled'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {payment.status}
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {payment.paymentMethod}
                    </td>
                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                      {payment.status === 'Scheduled' && (
                        <button
                          type="button"
                          className="text-blue-600 hover:text-blue-900 mr-4"
                        >
                          Process
                        </button>
                      )}
                      <button
                        type="button"
                        className="text-gray-600 hover:text-gray-900"
                      >
                        View
                      </button>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-6 border-t border-gray-200 pt-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Payment Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-medium text-gray-500">Invoice Number</p>
              <p className="mt-1 text-sm text-gray-900">{paymentDetails.invoiceNumber}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">PO Number</p>
              <p className="mt-1 text-sm text-gray-900">{paymentDetails.poNumber}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Vendor</p>
              <p className="mt-1 text-sm text-gray-900">{paymentDetails.vendor}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Invoice Date</p>
              <p className="mt-1 text-sm text-gray-900">{paymentDetails.invoiceDate}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Due Date</p>
              <p className="mt-1 text-sm text-gray-900">{paymentDetails.dueDate}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Payment Terms</p>
              <p className="mt-1 text-sm text-gray-900">{paymentDetails.paymentTerms}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Bank Account</p>
              <p className="mt-1 text-sm text-gray-900">{paymentDetails.bankAccount}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Approved By</p>
              <p className="mt-1 text-sm text-gray-900">
                {paymentDetails.approvedBy} on {new Date(paymentDetails.approvedAt).toLocaleString()}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 border-t border-gray-200 pt-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Payment Actions</h2>
          <div className="flex space-x-4">
            <button
              type="button"
              className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
            >
              Process Payment
            </button>
            <button
              type="button"
              className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
            >
              Schedule Payment
            </button>
            <button
              type="button"
              className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
            >
              Export for Bank
            </button>
            <button
              type="button"
              className="px-4 py-2 border border-red-300 rounded-md shadow-sm text-sm font-medium text-red-700 bg-white hover:bg-red-50"
            >
              Cancel Payment
            </button>
            <Link
              href="/stages/accounts-verification"
              className="ml-auto px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
            >
              View Previous Stage
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Payment History</h2>
        <div className="flow-root">
          <ul role="list" className="-mb-8">
            <li>
              <div className="relative pb-8">
                <span className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
                <div className="relative flex space-x-3">
                  <div>
                    <span className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center ring-8 ring-white">
                      <svg className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </div>
                  <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                    <div>
                      <p className="text-sm text-gray-500">
                        Invoice approved by <span className="font-medium text-gray-900">John D.</span>
                      </p>
                      <p className="text-sm text-gray-500">
                        Amount: <span className="font-medium text-gray-900">$10,272.93</span>
                      </p>
                    </div>
                    <div className="whitespace-nowrap text-right text-sm text-gray-500">
                      <time dateTime="2023-06-21T11:30">June 21, 2023 11:30 AM</time>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="relative pb-8">
                <div className="relative flex space-x-3">
                  <div>
                    <span className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center ring-8 ring-white">
                      <svg className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                        <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </div>
                  <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                    <div>
                      <p className="text-sm text-gray-500">
                        Payment scheduled in 2 installments
                      </p>
                      <p className="text-sm text-gray-500">
                        First payment of <span className="font-medium text-gray-900">$5,136.47</span> scheduled for <span className="font-medium text-gray-900">July 20, 2023</span>
                      </p>
                    </div>
                    <div className="whitespace-nowrap text-right text-sm text-gray-500">
                      <time dateTime="2023-06-21T11:45">June 21, 2023 11:45 AM</time>
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
