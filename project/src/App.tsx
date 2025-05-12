import React from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';

function AppContent() {
  const { isAuthenticated, isLoading } = useAuth();
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }
  
  return isAuthenticated ? <Dashboard /> : <Login />;
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;