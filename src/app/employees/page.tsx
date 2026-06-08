import Link from 'next/link';
import { ArrowLeft, Plus, Search, Edit, Trash2 } from 'lucide-react';

export default function EmployeeManagement() {
  const employees = [
    { id: 1, name: 'John Doe', position: 'Senior Developer', department: 'IT', email: 'john@example.com', joinDate: '2022-01-15' },
    { id: 2, name: 'Sarah Smith', position: 'Product Manager', department: 'Product', email: 'sarah@example.com', joinDate: '2021-06-20' },
    { id: 3, name: 'Mike Johnson', position: 'Designer', department: 'Design', email: 'mike@example.com', joinDate: '2023-03-10' },
    { id: 4, name: 'Emily Brown', position: 'HR Manager', department: 'HR', email: 'emily@example.com', joinDate: '2020-11-05' },
  ];

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
              <h1 className="text-3xl font-bold text-gray-900">Employee Management</h1>
              <p className="text-gray-600 mt-1">Manage and view all employee records</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Action Bar */}
        <div className="mb-8 flex items-center justify-between gap-4">
          <div className="flex-1 flex items-center bg-white rounded-lg shadow px-4 py-2">
            <Search className="w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search employees..."
              className="flex-1 ml-3 outline-none py-2"
            />
          </div>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition flex items-center gap-2">
            <Plus className="w-5 h-5" />
            Add Employee
          </button>
        </div>

        {/* Employees Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Name</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Position</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Department</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Email</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Join Date</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {employees.map((employee) => (
                <tr key={employee.id} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{employee.name}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{employee.position}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{employee.department}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{employee.email}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{employee.joinDate}</td>
                  <td className="px-6 py-4 text-sm flex gap-2">
                    <button className="p-2 hover:bg-blue-100 rounded-lg transition">
                      <Edit className="w-4 h-4 text-blue-600" />
                    </button>
                    <button className="p-2 hover:bg-red-100 rounded-lg transition">
                      <Trash2 className="w-4 h-4 text-red-600" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
