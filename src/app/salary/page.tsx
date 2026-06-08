import Link from 'next/link';
import { ArrowLeft, DollarSign, Calendar, Download, Bell } from 'lucide-react';

export default function SalaryManagement() {
  const salaryData = [
    {
      id: 1,
      employeeName: 'John Doe',
      position: 'Senior Developer',
      salary: 85000,
      paymentDate: '2026-06-30',
      status: 'Pending',
      nextPayment: '2026-06-30',
    },
    {
      id: 2,
      employeeName: 'Sarah Smith',
      position: 'Product Manager',
      salary: 95000,
      paymentDate: '2026-06-30',
      status: 'Pending',
      nextPayment: '2026-06-30',
    },
    {
      id: 3,
      employeeName: 'Mike Johnson',
      position: 'Designer',
      salary: 65000,
      paymentDate: '2026-06-30',
      status: 'Pending',
      nextPayment: '2026-06-30',
    },
    {
      id: 4,
      employeeName: 'Emily Brown',
      position: 'HR Manager',
      salary: 75000,
      paymentDate: '2026-06-15',
      status: 'Paid',
      nextPayment: '2026-06-30',
    },
  ];

  const getStatusColor = (status: string) => {
    return status === 'Paid' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-4">
            <Link href="/">
              <button className="p-2 hover:bg-gray-100 rounded-lg transition">
                <ArrowLeft className="w-6 h-6 text-gray-600" />
              </button>
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Salary Management</h1>
              <p className="text-gray-600 mt-1">View salary information and payment reminders</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Total Monthly Payroll</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">$320,000</p>
              </div>
              <DollarSign className="w-12 h-12 text-blue-600 opacity-20" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Pending Payments</p>
                <p className="text-3xl font-bold text-yellow-600 mt-2">3</p>
              </div>
              <Calendar className="w-12 h-12 text-yellow-600 opacity-20" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Paid This Month</p>
                <p className="text-3xl font-bold text-green-600 mt-2">1</p>
              </div>
              <DollarSign className="w-12 h-12 text-green-600 opacity-20" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Next Payroll Date</p>
                <p className="text-2xl font-bold text-gray-900 mt-2">Jun 30</p>
              </div>
              <Bell className="w-12 h-12 text-blue-600 opacity-20" />
            </div>
          </div>
        </div>

        {/* Salary Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Employee Name</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Position</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Monthly Salary</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Last Payment</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Next Payment</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Status</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {salaryData.map((salary) => (
                <tr key={salary.id} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{salary.employeeName}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{salary.position}</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">${salary.salary.toLocaleString()}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{salary.paymentDate}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{salary.nextPayment}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(salary.status)}`}>
                      {salary.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1">
                      <Download className="w-4 h-4" />
                      Slip
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Salary Reminder */}
        <div className="mt-8 bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
          <div className="flex items-start gap-4">
            <Bell className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-blue-900">Salary Payment Reminder</h3>
              <p className="text-blue-700 mt-2">
                Next salary payment is scheduled for <strong>June 30, 2026</strong>. Please ensure all employee records are up to date.
              </p>
              <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition text-sm font-medium">
                Send Reminders to Employees
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
