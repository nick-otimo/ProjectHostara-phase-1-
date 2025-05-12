import React, { useState } from 'react';
import { StatCard } from './StatsCard';
import { Card } from '../ui/Card';
import { Hotel, Utensils, Shirt, ShoppingBag, Users, Clock } from 'lucide-react';
import { Button } from '../ui/Button';

export const BranchManagerDashboard: React.FC = () => {
  const [activeBusiness, setActiveBusiness] = useState<'hotel' | 'restaurant' | 'laundry' | 'textile'>('hotel');
  
  // Mock data for branch manager dashboard
  const businesses = {
    hotel: {
      name: 'OBite Hotel',
      stats: [
        { title: 'Room Occupancy', value: '78%', trend: { value: 5.2, isPositive: true }, icon: <Hotel size={24} />, color: 'blue' },
        { title: 'Average Stay', value: '2.3 days', trend: { value: 0.2, isPositive: true }, icon: <Clock size={24} />, color: 'teal' },
        { title: 'Monthly Revenue', value: '$12,500', trend: { value: 8.7, isPositive: true }, icon: <ShoppingBag size={24} />, color: 'green' },
        { title: 'Staff', value: '24', icon: <Users size={24} />, color: 'purple' },
      ],
      activities: [
        { id: 1, action: 'Room 203 checked out', time: '10 min ago' },
        { id: 2, action: 'New booking received', time: '1 hour ago' },
        { id: 3, action: 'Maintenance requested', time: '3 hours ago' },
        { id: 4, action: 'Room 105 checked in', time: '5 hours ago' },
      ],
    },
    restaurant: {
      name: 'Tushibe Restaurant',
      stats: [
        { title: 'Daily Orders', value: '86', trend: { value: 12.3, isPositive: true }, icon: <Utensils size={24} />, color: 'orange' },
        { title: 'Average Order', value: '$24', trend: { value: 3.5, isPositive: true }, icon: <ShoppingBag size={24} />, color: 'blue' },
        { title: 'Monthly Revenue', value: '$8,750', trend: { value: 5.1, isPositive: true }, icon: <ShoppingBag size={24} />, color: 'green' },
        { title: 'Staff', value: '18', icon: <Users size={24} />, color: 'purple' },
      ],
      activities: [
        { id: 1, action: 'New delivery order', time: '5 min ago' },
        { id: 2, action: 'Kitchen inventory updated', time: '2 hours ago' },
        { id: 3, action: 'Menu item added', time: '1 day ago' },
        { id: 4, action: 'Table reservation', time: '1 day ago' },
      ],
    },
    laundry: {
      name: 'KM Laundry',
      stats: [
        { title: 'Orders Today', value: '34', trend: { value: 2.1, isPositive: false }, icon: <Shirt size={24} />, color: 'blue' },
        { title: 'Processing Time', value: '48min', trend: { value: 4.3, isPositive: true }, icon: <Clock size={24} />, color: 'green' },
        { title: 'Monthly Revenue', value: '$3,200', trend: { value: 1.2, isPositive: false }, icon: <ShoppingBag size={24} />, color: 'red' },
        { title: 'Staff', value: '12', icon: <Users size={24} />, color: 'purple' },
      ],
      activities: [
        { id: 1, action: 'New laundry order', time: '30 min ago' },
        { id: 2, action: 'Order #45 completed', time: '1 hour ago' },
        { id: 3, action: 'Equipment maintenance', time: '5 hours ago' },
        { id: 4, action: 'Supply restock', time: '1 day ago' },
      ],
    },
    textile: {
      name: 'Kiwanja Textiles',
      stats: [
        { title: 'Orders Today', value: '12', trend: { value: 8.4, isPositive: true }, icon: <Shirt size={24} />, color: 'purple' },
        { title: 'Production Rate', value: '95%', trend: { value: 2.1, isPositive: true }, icon: <Clock size={24} />, color: 'green' },
        { title: 'Monthly Revenue', value: '$5,800', trend: { value: 7.3, isPositive: true }, icon: <ShoppingBag size={24} />, color: 'blue' },
        { title: 'Staff', value: '15', icon: <Users size={24} />, color: 'teal' },
      ],
      activities: [
        { id: 1, action: 'New custom order', time: '2 hours ago' },
        { id: 2, action: 'Fabric delivery received', time: '4 hours ago' },
        { id: 3, action: 'Production milestone', time: '1 day ago' },
        { id: 4, action: 'Quality control check', time: '2 days ago' },
      ],
    },
  };
  
  const currentBusiness = businesses[activeBusiness];
  
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Branch Manager Dashboard</h2>
        <p className="text-gray-600">Manage all your business operations from this central dashboard.</p>
      </div>
      
      <div className="flex flex-wrap gap-2 mb-6">
        <Button 
          variant={activeBusiness === 'hotel' ? 'primary' : 'outline'} 
          onClick={() => setActiveBusiness('hotel')}
          leftIcon={<Hotel size={16} />}
        >
          OBite Hotel
        </Button>
        <Button 
          variant={activeBusiness === 'restaurant' ? 'primary' : 'outline'} 
          onClick={() => setActiveBusiness('restaurant')}
          leftIcon={<Utensils size={16} />}
        >
          Tushibe Restaurant
        </Button>
        <Button 
          variant={activeBusiness === 'laundry' ? 'primary' : 'outline'} 
          onClick={() => setActiveBusiness('laundry')}
          leftIcon={<Shirt size={16} />}
        >
          KM Laundry
        </Button>
        <Button 
          variant={activeBusiness === 'textile' ? 'primary' : 'outline'} 
          onClick={() => setActiveBusiness('textile')}
          leftIcon={<Shirt size={16} />}
        >
          Kiwanja Textiles
        </Button>
      </div>
      
      <div>
        <h3 className="text-xl font-semibold mb-4">{currentBusiness.name} Overview</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {currentBusiness.stats.map((stat, index) => (
            <StatCard
              key={index}
              title={stat.title}
              value={stat.value}
              icon={stat.icon}
              trend={stat.trend}
              color={stat.color}
            />
          ))}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card title="Pending Tasks">
            <div className="space-y-3">
              {[
                { id: 1, task: 'Review staff schedule', priority: 'high' },
                { id: 2, task: 'Approve inventory orders', priority: 'medium' },
                { id: 3, task: 'Check maintenance requests', priority: 'low' },
                { id: 4, task: 'Update service pricing', priority: 'medium' },
              ].map((task) => (
                <div key={task.id} className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50">
                  <div className="flex items-center">
                    <div className={`h-3 w-3 rounded-full mr-3 ${
                      task.priority === 'high' ? 'bg-red-500' : 
                      task.priority === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
                    }`}></div>
                    <span>{task.task}</span>
                  </div>
                  <Button size="sm" variant="outline">Complete</Button>
                </div>
              ))}
            </div>
          </Card>
          
          <Card title="Recent Activities">
            <div className="space-y-4">
              {currentBusiness.activities.map((activity) => (
                <div key={activity.id} className="flex justify-between pb-3 border-b">
                  <p className="font-medium text-gray-800">{activity.action}</p>
                  <span className="text-xs text-gray-500">{activity.time}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};