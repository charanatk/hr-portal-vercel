import Link from 'next/link';
import { Users, UserCheck, LogOut, DollarSign, Calendar, FileText, Home } from 'lucide-react';

export default function Dashboard() {
  const features = [
    {
      icon: Users,
      title: 'Employee Management',
      description: 'Manage employee records, details and information',
      href: '/employees',
      color: 'bg-blue-500',
    },
    {
      icon: UserCheck,
      title: 'Onboarding Tracker',
      description: 'Track new employee onboarding progress',
      href: '/onboarding',
      color: 'bg-green-500',
    },
    {
      icon: LogOut,
      title: 'Exit Workflow',
      description: 'Manage employee exit and offboarding process',
      href: '/exit-workflow',
      color: 'bg-red-500',
    },
    {
      icon: DollarSign,
      title: 'Salary Management',
      description: 'View salary information and payment reminders',
      href: '/salary',
      color: 'bg-yellow-500',
    },
    {
      icon: Calendar,
      title: 'Leave Management',
      description: 'Request and manage employee leave',
      href: '/leave',
      color: 'bg-purple-500',
    },
    {
      icon: FileText,
      title: 'Document Center',
      description: 'Store and manage company documents',
      href: '/documents',
      color: 'bg-indigo-500',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Home className="w-8 h-8 text-blue-600" />
              <h1 className="text-3xl font-bold text-gray-900">HR Portal</h1>
            </div>
            <p className="text-gray-600">Welcome to Loonlet HR Management System</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Dashboard</h2>
          <p className="text-gray-600">Access all HR management features</p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <Link href={feature.href} key={feature.title}>
                <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer h-full">
                  <div className={`${feature.color} h-12 flex items-center px-6`}></div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <IconComponent className={`w-6 h-6 ${feature.color.replace('bg-', 'text-')}`} />
                      <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                    </div>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                    <button className="mt-4 text-blue-600 hover:text-blue-800 font-medium text-sm">
                      View →
                    </button>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Quick Stats */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-gray-600 text-sm font-medium">Total Employees</p>
            <p className="text-3xl font-bold text-gray-900 mt-2">245</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-gray-600 text-sm font-medium">On Leave Today</p>
            <p className="text-3xl font-bold text-gray-900 mt-2">12</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-gray-600 text-sm font-medium">Pending Approvals</p>
            <p className="text-3xl font-bold text-gray-900 mt-2">8</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-gray-600 text-sm font-medium">New Onboardings</p>
            <p className="text-3xl font-bold text-gray-900 mt-2">3</p>
          </div>
        </div>
      </main>
    </div>
  );
}
