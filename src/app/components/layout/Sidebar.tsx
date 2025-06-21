'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navigation = [
  { name: 'Dashboard', href: '/' },
  { name: 'Indent Raised', href: '/stages/indent' },
  { name: 'PMO/QSM Approval', href: '/stages/approval' },
  { name: 'Purchase Order', href: '/stages/po' },
  { name: 'Vendor Confirmation', href: '/stages/vendor-confirm' },
  { name: 'Quality Check', href: '/stages/quality-check' },
  { name: 'Goods Receipt Note', href: '/stages/grn' },
  { name: 'Invoice Submission', href: '/stages/invoice-submission' },
  { name: 'Accounts Verification', href: '/stages/accounts-verification' },
  { name: 'Payment Processing', href: '/stages/payment-processing' },
  { name: 'Document Archiving', href: '/stages/document-archiving' },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="hidden md:flex md:flex-shrink-0">
      <div className="flex flex-col w-64 bg-gray-800">
        <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
          <div className="flex items-center flex-shrink-0 px-4">
            <h2 className="text-white text-xl font-semibold">Workflow</h2>
          </div>
          <nav className="mt-5 flex-1 px-2 space-y-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                    isActive
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  );
}
