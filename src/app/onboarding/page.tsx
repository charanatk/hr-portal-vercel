import Link from 'next/link';
import { ArrowLeft, CheckCircle, Clock, AlertCircle } from 'lucide-react';

export default function OnboardingTracker() {
  const onboardings = [
    {
      id: 1,
      name: 'Alex Wilson',
      position: 'Junior Developer',
      startDate: '2026-06-15',
      status: 'In Progress',
      progress: 60,
      tasks: [
        { name: 'IT Setup', completed: true },
        { name: 'HR Orientation', completed: true },
        { name: 'Training', completed: false },
        { name: 'Mentoring', completed: false },
      ],
    },
    {
      id: 2,
      name: 'Lisa Martinez',
      position: 'Marketing Specialist',
      startDate: '2026-06-08',
      status: 'Not Started',
      progress: 0,
      tasks: [
        { name: 'IT Setup', completed: false },
        { name: 'HR Orientation', completed: false },
        { name: 'Training', completed: false },
        { name: 'Mentoring', completed: false },
      ],
    },
    {
      id: 3,
      name: 'David Lee',
      position: 'Data Analyst',
      startDate: '2026-05-20',
      status: 'Completed',
      progress: 100,
      tasks: [
        { name: 'IT Setup', completed: true },
        { name: 'HR Orientation', completed: true },
        { name: 'Training', completed: true },
        { name: 'Mentoring', completed: true },
      ],
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Completed':
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'In Progress':
        return <Clock className="w-5 h-5 text-blue-600" />;
      default:
        return <AlertCircle className="w-5 h-5 text-yellow-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800';
      case 'In Progress':
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
              <h1 className="text-3xl font-bold text-gray-900">Onboarding Tracker</h1>
              <p className="text-gray-600 mt-1">Track new employee onboarding progress</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-6">
          {onboardings.map((onboarding) => (
            <div key={onboarding.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
              <div className="flex items-center justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <h3 className="text-lg font-semibold text-gray-900">{onboarding.name}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2 ${getStatusColor(onboarding.status)}`}>
                      {getStatusIcon(onboarding.status)}
                      {onboarding.status}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mt-1">{onboarding.position} • Start Date: {onboarding.startDate}</p>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">Overall Progress</span>
                  <span className="text-sm font-semibold text-gray-900">{onboarding.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full transition-all"
                    style={{ width: `${onboarding.progress}%` }}
                  ></div>
                </div>
              </div>

              {/* Tasks Checklist */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {onboarding.tasks.map((task, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2 bg-gray-50 rounded">
                    <input
                      type="checkbox"
                      checked={task.completed}
                      readOnly
                      className="w-4 h-4 text-blue-600 rounded"
                    />
                    <span className={task.completed ? 'line-through text-gray-400' : 'text-gray-700'}>
                      {task.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
