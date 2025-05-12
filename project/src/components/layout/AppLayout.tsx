import React, { useState } from 'react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { useAuth } from '../../context/AuthContext';

interface AppLayoutProps {
  children: React.ReactNode;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const { user } = useAuth();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  if (!user) return null;
  
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <div className={`fixed inset-y-0 left-0 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:static lg:inset-0 z-40 transition duration-300 ease-in-out`}>
        <Sidebar 
          activeItem="dashboard" 
          setActiveItem={() => {}} // This would be implemented with a router in a real app
        />
      </div>
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header 
          toggleSidebar={toggleSidebar}
          isSidebarOpen={isSidebarOpen}
        />
        
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
          {children}
        </main>
      </div>
    </div>
  );
};