import Link from 'next/link';

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
    name: 'Payment Processing',
    description: 'Finance department processes payment',
    status: 'pending',
    path: '/stages/payment',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Welcome Section */}
        <div className="bg-white shadow rounded-lg p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome to Sales Workflow System</h1>
          <p className="text-gray-600">
            Track and manage your sales workflow in one place. View the status of your requests and take necessary actions.
          </p>
        </div>

        {/* Workflow Stages */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Workflow Stages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {workflowStages.map((stage) => (
              <Link
                key={stage.id}
                href={stage.path}
                className={`p-4 rounded-lg border ${
                  stage.status === 'completed'
                    ? 'border-green-200 bg-green-50'
                    : stage.status === 'in-progress'
                    ? 'border-blue-200 bg-blue-50'
                    : 'border-gray-200 bg-gray-50'
                } hover:shadow-md transition-shadow`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-gray-900">{stage.name}</h3>
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      stage.status === 'completed'
                        ? 'bg-green-100 text-green-800'
                        : stage.status === 'in-progress'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {stage.status}
                  </span>
                </div>
                <p className="mt-1 text-sm text-gray-500">{stage.description}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/requests/new"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Create New Request
            </Link>
            <Link
              href="/requests"
              className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
            >
              View All Requests
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
