import CTA from "@/components/CTA";
import { getAllCompanions, getRecentSessions } from "@/lib/actions/companion.actions";
import Link from "next/link";

const Page = async () => {
  const companions = await getAllCompanions({ limit: 3 });
  const recentSessionsCompanions = await getRecentSessions(10);

  return (
    <main className="flex flex-col gap-16 py-8">
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center gap-6 px-4">
        <div className="cta-badge">Your AI Learning Journey Starts Here</div>
        <h1 className="text-5xl font-bold tracking-tight max-w-3xl">
          Learn Anything with Your Personal AI Companion
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          Experience personalized learning with an AI companion that adapts to your style, provides real-time feedback, and helps you master new skills.
        </p>
        <Link href="/companions/new">
          <button className="btn-primary h-14 px-8 text-lg font-semibold bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl">
            Start Learning Now
          </button>
        </Link>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
          <h3 className="text-xl font-semibold mb-3">Interactive Learning</h3>
          <p className="text-muted-foreground">
            Engage in natural conversations with your AI companion for a more effective learning experience.
          </p>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
          <h3 className="text-xl font-semibold mb-3">Personalized Path</h3>
          <p className="text-muted-foreground">
            Get a customized learning journey that adapts to your pace and learning style.
          </p>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
          <h3 className="text-xl font-semibold mb-3">Real-time Feedback</h3>
          <p className="text-muted-foreground">
            Receive instant feedback and guidance to improve your understanding and skills.
          </p>
        </div>
      </section>

      {/* Recent Projects Section */}
      {companions.length > 0 && (
        <section className="px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Recent Projects</h2>
            <Link href="/companions" className="text-blue-600 hover:text-blue-700 font-semibold">
              View All Projects →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {companions.map((companion) => (
              <div key={companion.id} className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
                <h3 className="text-xl font-semibold mb-2">{companion.name}</h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {companion.topic}
                </p>
                <Link href={`/companions/${companion.id}`}>
                  <button className="w-full btn-primary bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition-all duration-200">
                    Continue Learning
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </section>
      )}
    </main>
  );
};

export default Page;