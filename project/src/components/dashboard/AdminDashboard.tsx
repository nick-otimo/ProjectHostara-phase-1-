import React from 'react';
import { StatCard } from './StatsCard';
import { Card } from '../ui/Card';
import { Building2, DollarSign, TrendingUp, Users } from 'lucide-react';

export const Admin: React.FC = () => {
  // Mock data for the admin dashboard
  const businessData = [
    { id: 1, name: 'OBite Hotel', revenue: 'Ksh. 12,500', status: 'active', lastPayment: '2025-03-15' },
    { id: 2, name: 'Tushibe Restaurant', revenue: 'Ksh. 8,750', status: 'active', lastPayment: '2025-03-12' },
    { id: 3, name: 'KM Laundry', revenue: 'Ksh. 3,200', status: 'pending', lastPayment: '2025-02-28' },
    { id: 4, name: 'Kiwanja Textiles', revenue: 'Ksh. 5,800', status: 'active', lastPayment: '2025-03-10' },
    { id: 5, name: 'UoN Food Outlet', revenue: 'Ksh.8,500', status: 'active', lastPayment: '2025-05-10' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Admin</h2>
        <p className="text-white-600">This dashboard monitors and manages all businesses and users </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Businesses"
          value="5"
          icon={<Building2 size={24} />}
          color="blue"
        />
        <StatCard
          title="Total Revenue"
          value="$30,250"
          icon={<DollarSign size={24} />}
          trend={{ value: 12.5, isPositive: true }}
          color="green"
        />
        <StatCard
          title="Active Users"
          value="241"
          icon={<Users size={24} />}
          trend={{ value: 8.2, isPositive: true }}
          color="purple"
        />
        <StatCard
          title="Growth Rate"
          value="18%"
          icon={<TrendingUp size={24} />}
          trend={{ value: 2.4, isPositive: true }}
          color="teal"
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Business Status">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Business</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Revenue</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Status</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Last Payment</th>
                </tr>
              </thead>
              <tbody>
                {businessData.map((business) => (
                  <tr key={business.id} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4 text-sm">{business.name}</td>
                    <td className="py-3 px-4 text-sm">{business.revenue}</td>
                    <td className="py-3 px-4 text-sm">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        business.status === 'active' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {business.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-sm">{business.lastPayment}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
        
        <Card title="Recent Activities">
          <div className="space-y-4">
            {[
              { id: 1, action: 'New branch added', user: 'Admin User', time: '10 min ago' },
              { id: 2, action: 'Payment received', user: 'Tushibe Restaurant', time: '1 hour ago' },
              { id: 3, action: 'User role updated', user: 'Hotel Manager', time: '3 hours ago' },
              { id: 4, action: 'System maintenance', user: 'System', time: '1 day ago' },
              { id: 5, action: 'New client registered', user: 'Client User', time: '2 days ago' },
            ].map((activity) => (
              <div key={activity.id} className="flex justify-between pb-3 border-b">
                <div>
                  <p className="font-medium text-gray-800">{activity.action}</p>
                  <p className="text-sm text-gray-500">By {activity.user}</p>
                </div>
                <span className="text-xs text-gray-500">{activity.time}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};
