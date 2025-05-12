import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Bell, Menu, X } from 'lucide-react';

interface HeaderProps {
  toggleSidebar: () => void;
  isSidebarOpen: boolean;
}

export const Header: React.FC<HeaderProps> = ({ toggleSidebar, isSidebarOpen }) => {
  const { user } = useAuth();
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  if (!user) return null;

  const getHeaderColor = () => {
    switch (user.role) {
      case 'admin':
        return 'bg-white border-b border-gray-200 text-blue-900';
      case 'branchManager':
        return 'bg-white border-b border-gray-200 text-orange-800';
      case 'businessAgent':
        return 'bg-white border-b border-gray-200 text-teal-800';
      case 'client':
        return 'bg-white border-b border-gray-200 text-purple-800';
      default:
        return 'bg-white border-b border-gray-200 text-gray-900';
    }
  };

  const getRoleTitle = () => {
    switch (user.role) {
      case 'admin':
        return 'System Administrator';
      case 'branchManager':
        return 'Branch Manager';
      case 'businessAgent':
        return 'Business Agent';
      case 'client':
        return 'Customer';
      default:
        return 'User';
    }
  };

  const mockNotifications = [
    {
      id: '1',
      title: 'New Order Received',
      message: 'A new food order has been placed.',
      time: '5 mins ago',
    },
    {
      id: '2',
      title: 'Payment Successful',
      message: 'Your payment has been processed successfully.',
      time: '1 hour ago',
    },
    {
      id: '3',
      title: 'System Update',
      message: 'The system will be under maintenance tonight.',
      time: '2 hours ago',
    },
  ];

  return (
    <header className={`${getHeaderColor()} py-4 px-6 flex items-center justify-between`}>
      <div className="flex items-center">
        <button 
          className="lg:hidden mr-4 text-gray-600 hover:text-gray-900 focus:outline-none"
          onClick={toggleSidebar}
        >
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <h1 className="text-xl font-semibold hidden md:block">Welcome back, {user.name}</h1>
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="relative">
          <button 
            className="p-2 rounded-full hover:bg-gray-100 relative"
            onClick={() => setNotificationsOpen(!notificationsOpen)}
          >
            <Bell size={20} />
            <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
              3
            </span>
          </button>
          
          {notificationsOpen && (
            <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg overflow-hidden z-10">
              <div className="p-3 border-b border-gray-200">
                <h3 className="font-semibold">Notifications</h3>
              </div>
              <div className="max-h-80 overflow-y-auto">
                {mockNotifications.map((notification) => (
                  <div key={notification.id} className="p-3 border-b border-gray-100 hover:bg-gray-50 cursor-pointer">
                    <h4 className="font-medium text-sm">{notification.title}</h4>
                    <p className="text-xs text-gray-600 mt-1">{notification.message}</p>
                    <span className="text-xs text-gray-500 mt-1 block">{notification.time}</span>
                  </div>
                ))}
              </div>
              <div className="p-2 text-center border-t border-gray-200">
                <button className="text-sm text-blue-600 hover:text-blue-800">View all notifications</button>
              </div>
            </div>
          )}
        </div>
        
        <div className="flex items-center space-x-3">
          <div className="hidden md:block text-right">
            <p className="font-medium">{user.name}</p>
            <p className="text-xs text-gray-500">{getRoleTitle()}</p>
          </div>
          <div className="h-10 w-10 rounded-full overflow-hidden">
            <img 
              src={user.avatar || 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150'} 
              alt={user.name} 
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
};