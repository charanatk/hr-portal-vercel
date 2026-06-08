import Link from 'next/link';
import { ArrowLeft, FileText, Calendar, Clock } from 'lucide-react';

export default function ExitWorkflow() {
  const exitRequests = [
    {
      id: 1,
      employeeName: 'Robert Taylor',
      position: 'Senior Developer',
      exitDate: '2026-07-15',
      reason: 'Career Change',
      status: 'In Process',
      stage: 3,
      stages: ['Resignation', 'Documentation', 'Final Approval', 'Equipment Return'],
    },
    {
      id: 2,
      employeeName: 'Jennifer White',
      position: 'Project Manager',
      exitDate: '2026-08-30',
      reason: 'Relocation',
      status: 'Pending',
      stage: 1,
      stages: ['Resignation', 'Documentation', 'Final Approval', 'Equipment Return'],
    },
    {
      id: 3,
      employeeName: 'Thomas Green',
      position: 'QA Engineer',
      exitDate: '2026-06-20',
      reason: 'Retirement',
      status: 'Completed',
      stage: 4,
      stages: ['Resignation', 'Documentation', 'Final Approval', 'Equipment Return'],
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800';
      case 'In Process':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-yellow-100 text-yellow-800';
    }
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
              <h1 className="text-3xl font-bold text-gray-900">Exit Workflow</h1>
              <p className="text-gray-600 mt-1">Manage employee exit and offboarding process</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-6">
          {exitRequests.map((request) => (
            <div key={request.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
              <div className="flex items-center justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <h3 className="text-lg font-semibold text-gray-900">{request.employeeName}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(request.status)}`}>
                      {request.status}
                    </span>
                  </div>
                  <div className="flex gap-4 mt-2 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <FileText className="w-4 h-4" />
                      {request.position}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      Exit: {request.exitDate}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {request.reason}
                    </span>
                  </div>
                </div>
              </div>

              {/* Workflow Stages */}
              <div className="mb-4">
                <p className="text-sm font-medium text-gray-700 mb-3">Exit Process Stages</p>
                <div className="flex justify-between items-center">
                  {request.stages.map((stage, idx) => (
                    <div key={idx} className="flex flex-col items-center flex-1">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm transition-all ${
                          idx + 1 <= request.stage
                            ? 'bg-green-500 text-white'
                            : 'bg-gray-300 text-gray-600'
                        }`}
                      >
                        {idx + 1}
                      </div>
                      <p className="text-xs text-center mt-2 text-gray-600 max-w-20">{stage}</p>
                      {idx < request.stages.length - 1 && (
                        <div
                          className={`h-1 flex-1 my-2 ${
                            idx + 1 < request.stage ? 'bg-green-500' : 'bg-gray-300'
                          }`}
                          style={{ minWidth: '20px' }}
                        ></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition text-sm font-medium">
                View Details
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
