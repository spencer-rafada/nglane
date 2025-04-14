// app/account/page.tsx
'use client';

import { useSession } from 'next-auth/react';
import Link from 'next/link';

export default function AccountPage() {
  const { data: session } = useSession();

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">My Account</h1>
      
      {/* Contact Information */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
        <div className="space-y-3">
          <div>
            <p className="font-medium">First Name</p>
            <p className="text-gray-600">{session?.user?.name?.split(' ')[0] || 'Not provided'}</p>
          </div>
          <div>
            <p className="font-medium">Last Name</p>
            <p className="text-gray-600">{session?.user?.name?.split(' ')[1] || 'Not provided'}</p>
          </div>
          <div>
            <p className="font-medium">Email</p>
            <p className="text-gray-600">{session?.user?.email || 'Not provided'}</p>
          </div>
        </div>
      </section>

      {/* Preferences */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Preferences</h2>
        <div>
          <p className="font-medium mb-2">What styles are you interested in?</p>
          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="rounded" />
              <span>Women</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="rounded" />
              <span>Men</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="rounded" />
              <span>Both</span>
            </label>
          </div>
        </div>
      </section>

      {/* Shipping Information */}
      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Shipping Information</h2>
          <Link 
            href="/account/addresses/new" 
            className="text-primary hover:underline flex items-center"
          >
            <span>+</span> Add New Address
          </Link>
        </div>
        
        <div className="border rounded-lg p-4 text-center">
          <p className="text-gray-500">No active shipping addresses</p>
        </div>
      </section>
    </div>
  );
}