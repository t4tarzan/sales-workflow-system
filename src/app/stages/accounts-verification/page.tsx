import Link from 'next/link';

const invoiceItems = [
  {
    id: 1,
    name: 'Laptop',
    description: 'Dell XPS 15, 16GB RAM, 512GB SSD',
    quantity: 5,
    unitPrice: 1499.00,
    total: 7495.00,
    status: 'Matched'
  },
  {
    id: 2,
    name: 'Monitor',
    description: '27\" 4K Monitor',
    quantity: 5,
    unitPrice: 399.00,
    total: 1995.00,
    status: 'Matched'
  }
];

const subtotal = invoiceItems.reduce((sum, item) => sum + item.total, 0);
const tax = subtotal * 0.0825; // 8.25% tax
const total = subtotal + tax;

const verificationChecks = [
  { id: 'check1', description: 'PO and Invoice quantities match', status: 'verified', verifiedBy: 'John D.', verifiedAt: '2023-06-21T10:15' },
  { id: 'check2', description: 'Unit prices match PO terms', status: 'verified', verifiedBy: 'John D.', verifiedAt: '2023-06-21T10:16' },
  { id: 'check3', description: 'Tax calculation is correct', status: 'pending', verifiedBy: null, verifiedAt: null },
  { id: 'check4', description: 'Vendor details are correct', status: 'pending', verifiedBy: null, verifiedAt: null },
  { id: 'check5', description: 'Supporting documents attached', status: 'pending', verifiedBy: null, verifiedAt: null },
];

export default function AccountsVerificationStage() {
  return (
    <div className="space-y-6">
      <div className="bg-white shadow rounded-lg p-6">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Accounts Verification</h1>
            <p className="text-gray-600 mt-1">
              Review and verify invoice details against PO and delivery
            </p>
          </div>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
            Under Review
          </span>
        </div>

        <div className="mt-6 border-t border-gray-200 pt-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Invoice Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <p className="text-sm font-medium text-gray-500">Invoice Number</p>
              <p className="mt-1 text-sm text-gray-900">INV-2023-001</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">PO Number</p>
              <p className="mt-1 text-sm text-gray-900">PO-2023-001</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Vendor</p>
              <p className="mt-1 text-sm text-gray-900">Tech Supplies Inc.</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Invoice Date</p>
              <p className="mt-1 text-sm text-gray-900">June 20, 2023</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Due Date</p>
              <p className="mt-1 text-sm text-gray-900">July 20, 2023</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Payment Terms</p>
              <p className="mt-1 text-sm text-gray-900">Net 30</p>
            </div>
          </div>
        </div>

        <div className="mt-6 border-t border-gray-200 pt-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Verification Checks</h2>
          <div className="space-y-4">
            {verificationChecks.map((check) => (
              <div key={check.id} className="flex items-start">
                <div className="flex-shrink-0 pt-0.5">
                  {check.status === 'verified' ? (
                    <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center">
                      <svg className="h-3.5 w-3.5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  ) : (
                    <div className="h-5 w-5 rounded-full bg-gray-200 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-gray-400" />
                    </div>
                  )}
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">{check.description}</p>
                  {check.status === 'verified' && (
                    <p className="text-xs text-gray-500 mt-1">
                      Verified by {check.verifiedBy} on {new Date(check.verifiedAt).toLocaleString()}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 border-t border-gray-200 pt-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Invoice Items</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">Item</th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Description</th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Qty</th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Unit Price</th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Total</th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {invoiceItems.map((item) => (
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
                      ${item.unitPrice.toFixed(2)}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      ${item.total.toFixed(2)}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        item.status === 'Matched' 
                          ? 'bg-green-100 text-green-800' 
                          : item.status === 'Mismatch'
                          ? 'bg-red-100 text-red-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
                <tr className="font-bold border-t border-gray-200">
                  <td colSpan={4} className="py-4 pl-4 pr-3 text-right text-sm text-gray-900">Subtotal</td>
                  <td className="px-3 py-4 text-sm text-gray-900">${subtotal.toFixed(2)}</td>
                  <td></td>
                </tr>
                <tr className="font-bold">
                  <td colSpan={4} className="py-4 pl-4 pr-3 text-right text-sm text-gray-900">Tax (8.25%)</td>
                  <td className="px-3 py-4 text-sm text-gray-900">${tax.toFixed(2)}</td>
                  <td></td>
                </tr>
                <tr className="font-bold border-t-2 border-gray-300">
                  <td colSpan={4} className="py-4 pl-4 pr-3 text-right text-sm text-gray-900">Total</td>
                  <td className="px-3 py-4 text-sm text-gray-900">${total.toFixed(2)}</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-6 border-t border-gray-200 pt-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Supporting Documents</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 hover:border-gray-400">
              <div className="flex-shrink-0">
                <svg className="h-10 w-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-gray-900">Invoice.pdf</p>
                <p className="truncate text-sm text-gray-500">245.5 KB</p>
              </div>
            </div>
            <div className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 hover:border-gray-400">
              <div className="flex-shrink-0">
                <svg className="h-10 w-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-gray-900">PO-2023-001.pdf</p>
                <p className="truncate text-sm text-gray-500">180.2 KB</p>
              </div>
            </div>
            <div className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 hover:border-gray-400">
              <div className="flex-shrink-0">
                <svg className="h-10 w-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-gray-900">delivery-proof.jpg</p>
                <p className="truncate text-sm text-gray-500">1.2 MB</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 border-t border-gray-200 pt-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Verification Notes</h2>
          <div>
            <label htmlFor="verification-notes" className="block text-sm font-medium text-gray-700">
              Add notes or comments
            </label>
            <div className="mt-1">
              <textarea
                id="verification-notes"
                name="verification-notes"
                rows={3}
                className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="Add any notes or comments about the verification..."
                defaultValue={''}
              />
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
              Approve Invoice
            </button>
            <button
              type="button"
              className="px-4 py-2 border border-red-300 rounded-md shadow-sm text-sm font-medium text-red-700 bg-white hover:bg-red-50"
            >
              Reject Invoice
            </button>
            <button
              type="button"
              className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
            >
              Request Clarification
            </button>
            <Link
              href="/stages/invoice-submission"
              className="ml-auto px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
            >
              View Previous Stage
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Verification History</h2>
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
                        Invoice submitted by <span className="font-medium text-gray-900">Vendor</span>
                      </p>
                    </div>
                    <div className="whitespace-nowrap text-right text-sm text-gray-500">
                      <time dateTime="2023-06-21T09:45">June 21, 2023 09:45 AM</time>
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
                        Waiting for accounts verification
                      </p>
                    </div>
                    <div className="whitespace-nowrap text-right text-sm text-gray-500">
                      <time dateTime="2023-06-21T09:50">June 21, 2023 09:50 AM</time>
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
