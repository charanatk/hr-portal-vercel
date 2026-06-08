import Link from 'next/link';
import { ArrowLeft, Plus, Search, FileText, Download, Share2, Trash2, FolderOpen } from 'lucide-react';

export default function DocumentCenter() {
  const documents = [
    {
      id: 1,
      name: 'Employee Handbook 2026',
      type: 'PDF',
      size: '2.4 MB',
      uploadedDate: '2026-05-15',
      uploadedBy: 'HR Admin',
      downloads: 45,
      category: 'Policies',
    },
    {
      id: 2,
      name: 'Code of Conduct',
      type: 'PDF',
      size: '1.8 MB',
      uploadedDate: '2026-04-20',
      uploadedBy: 'HR Admin',
      downloads: 32,
      category: 'Policies',
    },
    {
      id: 3,
      name: 'Salary Structure 2026',
      type: 'Excel',
      size: '0.5 MB',
      uploadedDate: '2026-06-01',
      uploadedBy: 'Finance Manager',
      downloads: 28,
      category: 'Financial',
    },
    {
      id: 4,
      name: 'Leave Policy Updated',
      type: 'PDF',
      size: '1.2 MB',
      uploadedDate: '2026-05-30',
      uploadedBy: 'HR Admin',
      downloads: 56,
      category: 'Policies',
    },
    {
      id: 5,
      name: 'Performance Review Template',
      type: 'Word',
      size: '0.8 MB',
      uploadedDate: '2026-06-05',
      uploadedBy: 'HR Manager',
      downloads: 12,
      category: 'Templates',
    },
    {
      id: 6,
      name: 'Benefits Guide',
      type: 'PDF',
      size: '3.1 MB',
      uploadedDate: '2026-03-15',
      uploadedBy: 'HR Admin',
      downloads: 67,
      category: 'Benefits',
    },
  ];

  const categories = [
    { name: 'All Documents', count: 6 },
    { name: 'Policies', count: 3 },
    { name: 'Financial', count: 1 },
    { name: 'Templates', count: 1 },
    { name: 'Benefits', count: 1 },
  ];

  const getFileIcon = (type: string) => {
    return <FileText className="w-5 h-5 text-blue-600" />;
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
                <h1 className="text-3xl font-bold text-gray-900">Document Center</h1>
                <p className="text-gray-600 mt-1">Store and manage company documents</p>
              </div>
            </div>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition flex items-center gap-2">
              <Plus className="w-5 h-5" />
              Upload Document
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar - Categories */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow p-6 sticky top-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <FolderOpen className="w-5 h-5" />
                Categories
              </h2>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    className="w-full text-left px-4 py-2 rounded-lg hover:bg-blue-50 transition flex items-center justify-between"
                  >
                    <span className="text-gray-700">{category.name}</span>
                    <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content - Documents */}
          <div className="lg:col-span-3">
            {/* Search Bar */}
            <div className="mb-6 flex items-center bg-white rounded-lg shadow px-4 py-2">
              <Search className="w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search documents..."
                className="flex-1 ml-3 outline-none py-2"
              />
            </div>

            {/* Documents Grid */}
            <div className="space-y-4">
              {documents.map((doc) => (
                <div
                  key={doc.id}
                  className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition flex items-start justify-between"
                >
                  <div className="flex items-start gap-4 flex-1">
                    <div className="mt-1">{getFileIcon(doc.type)}</div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{doc.name}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <span>Type: {doc.type}</span>
                        <span>Size: {doc.size}</span>
                        <span>Uploaded: {doc.uploadedDate}</span>
                        <span>By: {doc.uploadedBy}</span>
                      </div>
                      <div className="mt-2">
                        <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                          {doc.category}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mt-2">
                        <strong>{doc.downloads}</strong> downloads
                      </p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-2 ml-4">
                    <button className="p-2 hover:bg-blue-100 rounded-lg transition" title="Download">
                      <Download className="w-5 h-5 text-blue-600" />
                    </button>
                    <button className="p-2 hover:bg-green-100 rounded-lg transition" title="Share">
                      <Share2 className="w-5 h-5 text-green-600" />
                    </button>
                    <button className="p-2 hover:bg-red-100 rounded-lg transition" title="Delete">
                      <Trash2 className="w-5 h-5 text-red-600" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mt-12 bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Activity</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b">
              <div>
                <p className="font-medium text-gray-900">Benefits Guide</p>
                <p className="text-sm text-gray-600">Downloaded by John Doe</p>
              </div>
              <span className="text-sm text-gray-500">Today at 10:30 AM</span>
            </div>
            <div className="flex items-center justify-between py-3 border-b">
              <div>
                <p className="font-medium text-gray-900">Performance Review Template</p>
                <p className="text-sm text-gray-600">Uploaded by HR Manager</p>
              </div>
              <span className="text-sm text-gray-500">Jun 5, 2026</span>
            </div>
            <div className="flex items-center justify-between py-3">
              <div>
                <p className="font-medium text-gray-900">Salary Structure 2026</p>
                <p className="text-sm text-gray-600">Downloaded by Finance Team</p>
              </div>
              <span className="text-sm text-gray-500">Jun 1, 2026</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
