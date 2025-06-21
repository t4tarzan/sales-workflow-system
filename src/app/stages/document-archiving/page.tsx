import Link from 'next/link';

const documentCategories = [
  {
    id: 'purchase-orders',
    name: 'Purchase Orders',
    documents: [
      { id: 'po-1', name: 'PO-2023-001.pdf', type: 'pdf', size: '245 KB', uploaded: '2023-06-15T10:30', status: 'Archived' },
    ]
  },
  {
    id: 'invoices',
    name: 'Invoices',
    documents: [
      { id: 'inv-1', name: 'INV-2023-001.pdf', type: 'pdf', size: '180 KB', uploaded: '2023-06-21T09:45', status: 'Archived' },
    ]
  },
  {
    id: 'delivery-documents',
    name: 'Delivery Documents',
    documents: [
      { id: 'grn-1', name: 'GRN-2023-001.pdf', type: 'pdf', size: '320 KB', uploaded: '2023-06-20T14:30', status: 'Archived' },
      { id: 'photo-1', name: 'delivery-proof-1.jpg', type: 'image', size: '1.2 MB', uploaded: '2023-06-20T14:35', status: 'Archived' },
    ]
  },
  {
    id: 'quality-reports',
    name: 'Quality Reports',
    documents: [
      { id: 'qc-1', name: 'QC-Report-2023-001.pdf', type: 'pdf', size: '420 KB', uploaded: '2023-06-19T11:20', status: 'Archived' },
      { id: 'photo-2', name: 'qc-photo-1.jpg', type: 'image', size: '980 KB', uploaded: '2023-06-19T11:25', status: 'Archived' },
    ]
  },
  {
    id: 'payment-documents',
    name: 'Payment Documents',
    documents: [
      { id: 'payment-1', name: 'Payment-Receipt-001.pdf', type: 'pdf', size: '150 KB', uploaded: '2023-06-22T09:15', status: 'Archived' },
      { id: 'bank-1', name: 'Bank-Transfer-Proof.pdf', type: 'pdf', size: '210 KB', uploaded: '2023-06-22T09:20', status: 'Archived' },
    ]
  },
  {
    id: 'correspondence',
    name: 'Correspondence',
    documents: [
      { id: 'email-1', name: 'Vendor-Communication-1.pdf', type: 'pdf', size: '85 KB', uploaded: '2023-06-16T14:10', status: 'Archived' },
      { id: 'email-2', name: 'Internal-Approval-1.pdf', type: 'pdf', size: '110 KB', uploaded: '2023-06-16T15:30', status: 'Archived' },
    ]
  }
];

export default function DocumentArchivingStage() {
  return (
    <div className="space-y-6">
      <div className="bg-white shadow rounded-lg p-6">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Document Archiving</h1>
            <p className="text-gray-600 mt-1">
              View and manage all documents related to this purchase order
            </p>
          </div>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
            Completed
          </span>
        </div>

        <div className="mt-6 border-t border-gray-200 pt-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Order Summary</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <p className="text-sm font-medium text-gray-500">PO Number</p>
              <p className="mt-1 text-sm text-gray-900">PO-2023-001</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Vendor</p>
              <p className="mt-1 text-sm text-gray-900">Tech Supplies Inc.</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Order Date</p>
              <p className="mt-1 text-sm text-gray-900">June 15, 2023</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Total Amount</p>
              <p className="mt-1 text-sm text-gray-900">$10,272.93</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Status</p>
              <p className="mt-1 text-sm text-gray-900">Completed</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Archived By</p>
              <p className="mt-1 text-sm text-gray-900">Jane Smith (Admin)</p>
            </div>
          </div>
        </div>

        <div className="mt-6 border-t border-gray-200 pt-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium text-gray-900">Archived Documents</h2>
            <div className="flex space-x-3
">
              <button
                type="button"
                className="inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <svg className="-ml-0.5 mr-1.5 h-4 w-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Download All
              </button>
              <button
                type="button"
                className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <svg className="-ml-0.5 mr-1.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Upload Document
              </button>
            </div>
          </div>

          <div className="space-y-8">
            {documentCategories.map((category) => (
              <div key={category.id} className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                  <h3 className="text-sm font-medium text-gray-900">{category.name}</h3>
                </div>
                <div className="bg-white divide-y divide-gray-200">
                  {category.documents.map((doc) => (
                    <div key={doc.id} className="px-4 py-3 flex items-center justify-between hover:bg-gray-50">
                      <div className="flex items-center min-w-0">
                        {doc.type === 'pdf' ? (
                          <svg className="flex-shrink-0 h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                          </svg>
                        ) : (
                          <svg className="flex-shrink-0 h-5 w-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                          </svg>
                        )}
                        <div className="ml-3 min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate">{doc.name}</p>
                          <p className="text-xs text-gray-500">{doc.size} • {new Date(doc.uploaded).toLocaleString()}</p>
                        </div>
                      </div>
                      <div className="ml-4 flex-shrink-0 flex space-x-3">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          doc.status === 'Archived' 
                            ? 'bg-green-100 text-green-800' 
                            : doc.status === 'Pending'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {doc.status}
                        </span>
                        <button
                          type="button"
                          className="text-blue-600 hover:text-blue-900 text-sm font-medium"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          className="text-gray-600 hover:text-gray-900 text-sm font-medium"
                        >
                          Download
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 border-t border-gray-200 pt-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Audit Trail</h2>
          <div className="bg-gray-50 p-4 rounded-lg">
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
                            All documents archived and verified by <span className="font-medium text-gray-900">Jane Smith</span>
                          </p>
                        </div>
                        <div className="whitespace-nowrap text-right text-sm text-gray-500">
                          <time dateTime="2023-06-22T15:30">June 22, 2023 03:30 PM</time>
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
                            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                            <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                          </svg>
                        </span>
                      </div>
                      <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                        <div>
                          <p className="text-sm text-gray-500">
                            Payment processed and documents received
                          </p>
                        </div>
                        <div className="whitespace-nowrap text-right text-sm text-gray-500">
                          <time dateTime="2023-06-22T10:15">June 22, 2023 10:15 AM</time>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-6 border-t border-gray-200 pt-6">
          <div className="flex justify-between">
            <Link
              href="/stages/payment-processing"
              className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
            >
              View Previous Stage
            </Link>
            <div className="space-x-3">
              <button
                type="button"
                className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700"
              >
                Mark as Complete
              </button>
              <button
                type="button"
                className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
              >
                Export All Documents
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
