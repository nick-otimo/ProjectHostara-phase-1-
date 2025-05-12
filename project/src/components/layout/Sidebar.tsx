import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { 
  Home, 
  Users, 
  Building2, 
  Hotel, 
  Utensils,
  Shirt, 
  DollarSign, 
  Settings, 
  LogOut, 
  ShoppingBag,
  Bell,
  BarChart3,
  ExternalLink
} from 'lucide-react';

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label, isActive, onClick }) => {
  return (
    <div
      className={`flex items-center space-x-3 px-4 py-3 rounded-lg cursor-pointer transition-all duration-200 ${
        isActive ? 'bg-opacity-10 bg-white text-white font-medium' : 'text-gray-300 hover:bg-white hover:bg-opacity-5'
      }`}
      onClick={onClick}
    >
      <div className="text-lg">{icon}</div>
      <span>{label}</span>
    </div>
  );
};

interface SidebarProps {
  activeItem: string;
  setActiveItem: (item: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeItem, setActiveItem }) => {
  const { user, logout } = useAuth();

  if (!user) return null;

  const getBackgroundColor = () => {
    switch (user.role) {
      case 'admin':
        return 'bg-blue-900';
      case 'branchManager':
        return 'bg-orange-800';
      case 'businessAgent':
        return 'bg-teal-800';
      case 'client':
        return 'bg-purple-800';
      default:
        return 'bg-gray-900';
    }
  };

  const renderMenuItems = () => {
    const commonItems = [
      { id: 'dashboard', label: 'Dashboard', icon: <Home size={20} /> },
      { id: 'settings', label: 'Settings', icon: <Settings size={20} /> },
    ];

    const roleSpecificItems = {
      admin: [
        { id: 'users', label: 'Users', icon: <Users size={20} /> },
        { id: 'businesses', label: 'Businesses', icon: <Building2 size={20} /> },
        { id: 'finances', label: 'Finances', icon: <DollarSign size={20} /> },
        { id: 'reports', label: 'Reports', icon: <BarChart3 size={20} /> },
      ],
      branchManager: [
        { id: 'hotel', label: 'OBite Hotel', icon: <Hotel size={20} /> },
        { id: 'restaurant', label: 'Tushibe Restaurant', icon: <Utensils size={20} /> },
        { id: 'laundry', label: 'KM Laundry', icon: <Shirt size={20} /> },
        { id: 'textile', label: 'Kiwanja Textiles', icon: <Shirt size={20} /> },
        { id: 'orders', label: 'Orders', icon: <ShoppingBag size={20} /> },
      ],
      businessAgent: [
        { id: 'branches', label: 'Branches', icon: <Building2 size={20} /> },
        { id: 'performance', label: 'Performance', icon: <BarChart3 size={20} /> },
        { id: 'remoteAccess', label: 'Remote Access', icon: <ExternalLink size={20} /> },
      ],
      client: [
        { id: 'menu', label: 'Food Menu', icon: <Utensils size={20} /> },
        { id: 'myOrders', label: 'My Orders', icon: <ShoppingBag size={20} /> },
        { id: 'notifications', label: 'Notifications', icon: <Bell size={20} /> },
      ],
    };

    const items = [...commonItems, ...(roleSpecificItems[user.role] || [])];

    return items.map((item) => (
      <SidebarItem
        key={item.id}
        icon={item.icon}
        label={item.label}
        isActive={activeItem === item.id}
        onClick={() => setActiveItem(item.id)}
      />
    ));
  };

  return (
    <div className={`${getBackgroundColor()} text-white w-64 min-h-screen flex flex-col`}>
      <div className="p-6">
        <h1 className="text-xl font-bold">Business Suite</h1>
        <p className="text-sm opacity-75 mt-1">{user.role === 'admin' ? 'Admin Portal' : user.role === 'branchManager' ? 'Branch Management' : user.role === 'businessAgent' ? 'Agent Portal' : 'Customer Portal'}</p>
      </div>

      <div className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        {renderMenuItems()}
      </div>

      <div className="p-4 border-t border-gray-700">
        <div className="flex items-center space-x-3 px-3 py-3 rounded-lg cursor-pointer text-gray-300 hover:bg-white hover:bg-opacity-5" onClick={logout}>
          <LogOut size={20} />
          <span>Logout</span>
        </div>
      </div>
    </div>
  );
};