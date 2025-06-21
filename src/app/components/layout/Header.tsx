import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Sales Workflow System</h1>
        <nav className="flex space-x-4">
          <span className="text-gray-700">Welcome, Demo User</span>
          <button className="text-blue-600 hover:text-blue-800">Logout</button>
        </nav>
      </div>
    </header>
  );
}
