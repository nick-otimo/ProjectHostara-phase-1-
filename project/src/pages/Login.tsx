import React from 'react';
import { LoginForm } from '../components/auth/LoginForm';
import { Building2 } from 'lucide-react';

export const Login: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-50">
      {/* Left side - Logo and info */}
      <div className="md:w-1/2 bg-gradient-to-br from-blue-900 to-purple-900 text-white p-8 flex flex-col justify-center">
        <div className="max-w-md mx-auto w-full">
          <div className="flex items-center mb-6">
            <Building2 size={36} />
            <h1 className="text-3xl font-bold ml-2">Business Suite</h1>
          </div>
          <h2 className="text-2xl font-semibold mb-6">Manage your businesses with ease</h2>
          <p className="mb-8 text-blue-200">
            Access different dashboards based on your role. Whether you're an admin, branch manager, 
            business agent, or client, we've got you covered with tailored interfaces.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="p-4 bg-white bg-opacity-10 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Admin Portal</h3>
              <p className="text-sm text-blue-200">Complete control over all businesses and users.</p>
            </div>
            <div className="p-4 bg-white bg-opacity-10 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Branch Management</h3>
              <p className="text-sm text-blue-200">Manage hotels, restaurants, laundry, and textiles.</p>
            </div>
            <div className="p-4 bg-white bg-opacity-10 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Agent Portal</h3>
              <p className="text-sm text-blue-200">Oversee remote branches and operations.</p>
            </div>
            <div className="p-4 bg-white bg-opacity-10 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Customer Portal</h3>
              <p className="text-sm text-blue-200">Order food and track your orders easily.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Right side - Login form */}
      <div className="flex-1 flex items-center justify-center p-4 sm:p-8">
        <LoginForm />
      </div>
    </div>
  );
};