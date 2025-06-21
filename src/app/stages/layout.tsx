import Link from 'next/link';

export default function StagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-6">
        <nav className="flex" aria-label="Breadcrumb">
          <ol role="list" className="flex items-center space-x-4">
            <li>
              <div className="flex">
                <Link href="/" className="text-sm font-medium text-gray-500 hover:text-gray-700">
                  Dashboard
                </Link>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <svg
                  className="h-5 w-5 flex-shrink-0 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                    clipRule="evenodd"
                  />
                </svg>
                <Link href="/stages" className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">
                  Workflow Stages
                </Link>
              </div>
            </li>
          </ol>
        </nav>
      </div>
      {children}
    </div>
  );
}
