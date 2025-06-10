import React from "react";
import { redirect } from "next/navigation";
import { getCompanion } from "@/lib/actions/companion.actions";
import { currentUser } from "@clerk/nextjs/server";
import CompanionComponent from "@/components/CompanionComponent";
import Link from "next/link";

interface CompanionSessionPageProps {
  params: Promise<{id: string}>;
}

const CompanionSession = async ({params}: CompanionSessionPageProps) => {
  const {id} = await params;
  const companion = await getCompanion(id);
  const user = await currentUser();

  const { name, subject, title, topic, duration, stype, questions, summary_points } = companion;

  if (!user) redirect("/sign-in");

  if (!companion) {
    redirect("/companions");
  }

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col gap-8">
        {/* Header Section */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/companions" className="text-blue-600 hover:text-blue-700">
              ← Back to Projects
            </Link>
            <div className="h-6 w-px bg-gray-200"></div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{name}</h1>
              <p className="text-sm text-gray-500 mt-1">Learning Session</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="px-4 py-2 bg-blue-50 rounded-lg">
              <span className="text-sm font-medium text-blue-700">{subject}</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="p-6">
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-2">Learning Focus</h2>
              <p className="text-gray-600">{topic}</p>
            </div>
            
            <CompanionComponent
              {...companion}
              companionId={id}
              userName={user.firstName!}
              userImage={user.imageUrl!}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default CompanionSession;
