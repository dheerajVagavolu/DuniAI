import React from 'react';
import { getAllCompanions } from '@/lib/actions/companion.actions';
import Link from "next/link";

const CompanionsLibrary = async ({ searchParams }: SearchParams) => {
  const filters = await searchParams;
  const subject = filters.subject ? filters.subject : '';
  const topic = filters.topic ? filters.topic : '';

  const companions = await getAllCompanions({ subject, topic });

  return (
    <main className="max-w-5xl mx-auto px-4 py-8">
      <div className="flex justify-end mb-8">
        <Link href="/companions/new">
          <button className="btn-primary h-12 px-6 text-lg font-semibold bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl">
            Create New Project
          </button>
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="px-6 py-4 text-left font-semibold text-gray-900">Project Name</th>
              <th className="px-6 py-4 text-left font-semibold text-gray-900">Description</th>
              <th className="px-6 py-4 text-right font-semibold text-gray-900">Action</th>
            </tr>
          </thead>
          <tbody>
            {companions.length > 0 ? (
              companions.map((companion) => (
                <tr key={companion.id} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-gray-900">{companion.name}</td>
                  <td className="px-6 py-4 text-gray-600 max-w-[400px]">
                    {companion.topic.length > 120
                      ? companion.topic.slice(0, 120) + '...'
                      : companion.topic}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <Link href={`/companions/${companion.id}`}>
                      <button className="btn-primary bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition-all duration-200">
                        Continue Learning
                      </button>
                    </Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3} className="px-6 py-12 text-center">
                  <div className="text-gray-600 mb-4">No projects found</div>
                  <Link href="/companions/new">
                    <button className="btn-primary bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition-all duration-200">
                      Create Your First Project
                    </button>
                  </Link>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default CompanionsLibrary;
