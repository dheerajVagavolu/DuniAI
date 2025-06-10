import React from "react";
import { redirect } from "next/navigation";
import { getCompanion } from "@/lib/actions/companion.actions";
import { currentUser } from "@clerk/nextjs/server";
import CompanionComponent from "@/components/CompanionComponent";

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
    <main>
            <article className="flex rounded-border justify-between p-6 max-md:flex-col">
                <div className="flex items-center gap-2">
                    {/* <div className="size-[72px] flex items-center justify-center rounded-lg max-md:hidden" style={{ backgroundColor: "#fef3f3" }}>
                        <Image src={`/icons/${subject}.svg`} alt={subject} width={35} height={35} />
                    </div> */}

                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                            <p className="font-bold text-2xl">
                                Project: 
                            </p>
                            <p className="text-2xl">
                                {name}
                            </p>
                        </div>
                        
                    </div>
                </div>
                
            </article>

            {/* <QuestionComponent questions={questions} /> */}

            {/* This is the vapi voice agent, but we can replace with AI pair coding assistant */}
            <CompanionComponent
                {...companion}
                companionId={id}
                userName={user.firstName!}
                userImage={user.imageUrl!}
            />
        </main>
  );
}

export default CompanionSession;
