import React from 'react';
import { getAllCompanions } from '@/lib/actions/companion.actions';
import Link from "next/link";
import CTA from '@/components/CTA';

const CompanionsLibrary = async ({ searchParams }: SearchParams) => {
  const filters = await searchParams;
  const subject = filters.subject ? filters.subject : '';
  const topic = filters.topic ? filters.topic : '';

  const companions = await getAllCompanions({ subject, topic });

  return (
    <main>
      <section className="mt-8 overflow-x-auto">
        <table className="min-w-full bg-white rounded-2xl shadow border">
          <thead className="bg-muted text-left">
            <tr>
              <th className="px-6 py-4 font-semibold text-base">Project Name</th>
              <th className="px-6 py-4 font-semibold text-base">Description</th>
              <th className="px-6 py-4 font-semibold text-base"></th>
            </tr>
          </thead>
          <tbody>
            {companions.length > 0 ? (
              companions.map((companion) => (
                <tr key={companion.id} className="border-t hover:bg-accent/40 transition">
                  <td className="px-6 py-4 font-medium">{companion.name}</td>
                <td className="px-6 py-4 max-w-[240px]">
                    {companion.topic.length > 120
                        ? companion.topic.slice(0, 120) + '...'
                        : companion.topic}
                </td>
                  <td className="px-6 py-4">
                    <Link href={`/companions/${companion.id}`}>
                      <button className="btn-primary w-full min-w-[120px] justify-center">
                        Start Practice
                      </button>
                    </Link>
                  </td>
                </tr>
              ))
            ) : (
              <>
                <tr>
                  <td colSpan={5} className="text-center px-6 py-12 text-muted-foreground">
                    No projects found. Add a new project to get started!
                  </td>
                </tr>
              </>
            )}
          </tbody>
        </table>
        
      </section>

      {companions.length === 0 && (
          <div className="min-lg:w-full min-md:w-full items-center justify-center">
            <Link href="/companions/new">
                  <button className="btn-primary ml-4">
                    Add Project
                  </button>
                </Link>
          </div>
        )}

    </main>
  );
};

export default CompanionsLibrary;
