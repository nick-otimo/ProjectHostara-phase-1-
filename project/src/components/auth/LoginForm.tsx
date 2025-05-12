import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Button } from '../ui/Button';
import { LockKeyhole, Mail, AlertCircle, UserPlus, ArrowLeft } from 'lucide-react';

export const LoginForm: React.FC = () => {
  const { login, register, isLoading } = useAuth();
  const [isRegistering, setIsRegistering] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState<'admin' | 'branchManager' | 'businessAgent' | 'client'>('client');
  const [error, setError] = useState('');
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    try {
      if (isRegistering) {
        await register(email, password, name, role);
      } else {
        await login(email, password);
      }
    } catch (err) {
      setError(isRegistering ? 'Registration failed. Please try again.' : 'Invalid email or password. Please try again.');
    }
  };
  
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md mx-auto">
      <div className="text-center mb-8">
        {isRegistering ? (
          <>
            <h1 className="text-2xl font-bold text-gray-800">Create Account</h1>
            <p className="text-gray-600 mt-2">Join our business management platform</p>
          </>
        ) : (
          <>
            <h1 className="text-2xl font-bold text-gray-800">Welcome Back</h1>
            <p className="text-gray-600 mt-2">Sign in to access your dashboard</p>
          </>
        )}
      </div>
      
      {error && (
        <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-md flex items-center">
          <AlertCircle size={18} className="mr-2" />
          <span>{error}</span>
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {isRegistering && (
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              placeholder="John Doe"
              required
            />
          </div>
        )}
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Mail size={18} className="text-gray-400" />
            </div>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              placeholder="you@example.com"
              required
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <LockKeyhole size={18} className="text-gray-400" />
            </div>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              placeholder="••••••••"
              required
            />
          </div>
        </div>
        
        {isRegistering && (
          <div>
            <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
              Account Type
            </label>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value as any)}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              required
            >
              <option value="client">Customer</option>
              <option value="branchManager">Branch Manager</option>
              <option value="businessAgent">Business Agent</option>
              <option value="admin">Administrator</option>
            </select>
          </div>
        )}
        
        {!isRegistering && (
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember_me"
                name="remember_me"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-700">
                Remember me
              </label>
            </div>
            
            <div className="text-sm">
              <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                Forgot password?
              </a>
            </div>
          </div>
        )}
        
        <Button type="submit" fullWidth isLoading={isLoading}>
          {isRegistering ? 'Create Account' : 'Sign In'}
        </Button>
      </form>
      
      <div className="mt-6 text-center">
        <button
          type="button"
          onClick={() => setIsRegistering(!isRegistering)}
          className="inline-flex items-center text-sm text-blue-600 hover:text-blue-500"
        >
          {isRegistering ? (
            <>
              <ArrowLeft size={16} className="mr-1" />
              Back to Sign In
            </>
          ) : (
            <>
              <UserPlus size={16} className="mr-1" />
              Create New Account
            </>
          )}
        </button>
      </div>
    </div>
  );
};