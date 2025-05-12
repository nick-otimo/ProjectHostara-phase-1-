import React, { useState } from 'react';
import { StatCard } from './StatsCard';
import { Card } from '../ui/Card';
import { ShoppingBag, Clock, Utensils, CreditCard } from 'lucide-react';
import { Button } from '../ui/Button';

export const ClientDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'menu' | 'orders'>('menu');
  
  // Mock data for client dashboard
  const menuItems = [
    { id: 1, name: 'Grilled Chicken Salad', price: 12.99, category: 'Salads', image: 'https://images.pexels.com/photos/5718071/pexels-photo-5718071.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { id: 2, name: 'Classic Burger', price: 14.99, category: 'Main Course', image: 'https://images.pexels.com/photos/3219547/pexels-photo-3219547.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { id: 3, name: 'Pasta Carbonara', price: 13.99, category: 'Pasta', image: 'https://images.pexels.com/photos/1527603/pexels-photo-1527603.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { id: 4, name: 'Fish & Chips', price: 15.99, category: 'Main Course', image: 'https://images.pexels.com/photos/4194635/pexels-photo-4194635.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { id: 5, name: 'Chocolate Cake', price: 6.99, category: 'Desserts', image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { id: 6, name: 'Fresh Juice', price: 4.99, category: 'Drinks', image: 'https://images.pexels.com/photos/1536868/pexels-photo-1536868.jpeg?auto=compress&cs=tinysrgb&w=300' },
  ];
  
  const orderHistory = [
    { id: 1, items: ['Classic Burger', 'Fresh Juice'], total: 19.98, status: 'completed', date: '2025-03-17' },
    { id: 2, items: ['Pasta Carbonara', 'Chocolate Cake'], total: 20.98, status: 'completed', date: '2025-03-15' },
    { id: 3, items: ['Grilled Chicken Salad', 'Fish & Chips'], total: 28.98, status: 'processing', date: '2025-03-18' },
  ];
  
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Welcome to Tushibe Restaurant</h2>
        <p className="text-gray-600">Browse our menu and order delicious food online.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Active Orders"
          value="1"
          icon={<ShoppingBag size={24} />}
          color="purple"
        />
        <StatCard
          title="Orders History"
          value="3"
          icon={<Clock size={24} />}
          color="blue"
        />
        <StatCard
          title="Favorite Items"
          value="2"
          icon={<Utensils size={24} />}
          color="orange"
        />
        <StatCard
          title="Total Spent"
          value="$69.94"
          icon={<CreditCard size={24} />}
          color="green"
        />
      </div>
      
      <div className="flex border-b mb-6">
        <button
          className={`py-3 px-6 ${
            activeTab === 'menu'
              ? 'border-b-2 border-purple-600 text-purple-600 font-medium'
              : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => setActiveTab('menu')}
        >
          Food Menu
        </button>
        <button
          className={`py-3 px-6 ${
            activeTab === 'orders'
              ? 'border-b-2 border-purple-600 text-purple-600 font-medium'
              : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => setActiveTab('orders')}
        >
          My Orders
        </button>
      </div>
      
      {activeTab === 'menu' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-medium text-lg">{item.name}</h3>
                  <span className="font-semibold text-purple-600">${item.price}</span>
                </div>
                <span className="inline-block px-2 py-1 rounded text-xs bg-gray-100 text-gray-700 mb-3">
                  {item.category}
                </span>
                <Button fullWidth>Add to Order</Button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <Card title="Order History">
          <div className="space-y-4">
            {orderHistory.map((order) => (
              <div key={order.id} className="p-4 border rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-medium">Order #{order.id}</h4>
                    <p className="text-sm text-gray-500">{order.date}</p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    order.status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                  }`}>
                    {order.status}
                  </span>
                </div>
                <div className="py-2">
                  <p className="text-sm text-gray-700 mb-1">Items:</p>
                  <ul className="list-disc list-inside text-sm text-gray-600 ml-2">
                    {order.items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-between items-center border-t pt-2 mt-2">
                  <span className="font-medium">Total: ${order.total}</span>
                  <Button size="sm" variant={order.status === 'completed' ? 'outline' : 'primary'}>
                    {order.status === 'completed' ? 'View Details' : 'Track Order'}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Card>
      )}
    </div>
  );
};