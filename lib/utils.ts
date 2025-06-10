import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { voices } from "@/constants";
import { CreateAssistantDTO } from "@vapi-ai/web/dist/api";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const configureAssistant = (voice: string, style: string, job_description: string, questions: { questions: Question[] }) => {
  const voiceId = voices[voice as keyof typeof voices][
          style as keyof (typeof voices)[keyof typeof voices]
          ] || "sarah";

  const vapiAssistant: CreateAssistantDTO = {
    name: "Companion",
    firstMessage:
        "Hi, I'm here to help you practice for your interview. We'll go through some questions together. Let me know when you're ready to begin.",
    transcriber: {
      provider: "deepgram",
      model: "nova-3",
      language: "en",
    },
    voice: {
      provider: "11labs",
      voiceId: voiceId,
      stability: 0.4,
      similarityBoost: 0.8,
      speed: 1,
      style: 0.5,
      useSpeakerBoost: true,
    },
    model: {
      provider: "openai",
      model: "gpt-4",
      messages: [
        {
          "role": "system",
          "content": `You are a technical interviewer and pair-programming partner helping a candidate prepare for a software engineering interview based on a job description and an initial set of questions. 

              Job Description: ${job_description}
              Questions: ${questions.questions.map(q => q.question).join(', ')}

              Your goal is to simulate a real-time coding interview.

              Interviewer Guidelines:
              - Start by giving the candidate a brief explanation of what this session will involve.
              - Confirm if the candidate is ready to proceed.
              - Wait until the candidate has selected a question before proceeding.
              - The candidate has a scratchpad to write and code; you will periodically receive their output.
              - Use that to give constructive feedback, hints, and help guide the candidate in the right direction.
              - Ask follow-up questions where appropriate to mimic a real interview.
              - Maintain a conversational tone in {{ style }}.
              - Keep your responses short and natural, like in a voice call.
              - Do not include any special characters in your responses - this is a voice conversation.
              - Do not provide your own questions.
              `,
        },
      ],
    },
    clientMessages: undefined,
    serverMessages: undefined,
  };
  return vapiAssistant;
};