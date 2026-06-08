import Link from 'next/link';
import { ArrowLeft, Plus, Calendar, Clock, CheckCircle, XCircle } from 'lucide-react';

export default function LeaveManagement() {
  const leaves = [
    {
      id: 1,
      employeeName: 'John Doe',
      leaveType: 'Annual Leave',
      startDate: '2026-07-01',
      endDate: '2026-07-05',
      daysRequested: 5,
      status: 'Approved',
      appliedDate: '2026-06-08',
    },
    {
      id: 2,
      employeeName: 'Sarah Smith',
      leaveType: 'Sick Leave',
      startDate: '2026-06-10',
      endDate: '2026-06-10',
      daysRequested: 1,
      status: 'Pending',
      appliedDate: '2026-06-08',
    },
    {
      id: 3,
      employeeName: 'Mike Johnson',
      leaveType: 'Maternity Leave',
      startDate: '2026-08-01',
      endDate: '2026-10-31',
      daysRequested: 90,
      status: 'Approved',
      appliedDate: '2026-05-15',
    },
    {
      id: 4,
      employeeName: 'Emily Brown',
      leaveType: 'Casual Leave',
      startDate: '2026-06-20',
      endDate: '2026-06-21',
      daysRequested: 2,
      status: 'Rejected',
      appliedDate: '2026-06-05',
    },
  ];

  const leaveTypes = [
    { type: 'Annual Leave', available: 15, used: 3, remaining: 12 },
    { type: 'Sick Leave', available: 10, used: 1, remaining: 9 },
    { type: 'Casual Leave', available: 5, used: 0, remaining: 5 },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Approved':
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'Rejected':
        return <XCircle className="w-5 h-5 text-red-600" />;
      default:
        return <Clock className="w-5 h-5 text-yellow-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Approved':
        return 'bg-green-100 text-green-800';
      case 'Rejected':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-yellow-100 text-yellow-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/">
                <button className="p-2 hover:bg-gray-100 rounded-lg transition">
                  <ArrowLeft className="w-6 h-6 text-gray-600" />
                </button>
              </Link>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Leave Management</h1>
                <p className="text-gray-600 mt-1">Request and manage employee leave</p>
              </div>
            </div>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition flex items-center gap-2">
              <Plus className="w-5 h-5" />
              Apply Leave
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Leave Balance Cards */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Leave Balance</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {leaveTypes.map((leave) => (
              <div key={leave.type} className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{leave.type}</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-sm">Total Allocation</span>
                    <span className="font-semibold text-gray-900">{leave.available} days</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-sm">Used</span>
                    <span className="font-semibold text-red-600">{leave.used} days</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-red-500 h-2 rounded-full"
                      style={{ width: `${(leave.used / leave.available) * 100}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-sm">Remaining</span>
                    <span className="font-semibold text-green-600">{leave.remaining} days</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Leave Requests */}
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Leave Requests</h2>
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Employee</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Leave Type</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">From</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">To</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Days</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Status</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {leaves.map((leave) => (
                  <tr key={leave.id} className="hover:bg-gray-50 transition">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{leave.employeeName}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{leave.leaveType}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{leave.startDate}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{leave.endDate}</td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{leave.daysRequested}</td>
                    <td className="px-6 py-4 text-sm">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2 w-fit ${getStatusColor(leave.status)}`}>
                        {getStatusIcon(leave.status)}
                        {leave.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm">
                      {leave.status === 'Pending' ? (
                        <div className="flex gap-2">
                          <button className="text-green-600 hover:text-green-800 font-medium">Approve</button>
                          <button className="text-red-600 hover:text-red-800 font-medium">Reject</button>
                        </div>
                      ) : (
                        <button className="text-blue-600 hover:text-blue-800 font-medium">View</button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
