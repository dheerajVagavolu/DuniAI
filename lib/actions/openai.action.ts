'use server';

import { zodTextFormat } from "openai/helpers/zod";
import { createOpenAIClient } from "@/lib/openai";
import { z } from "zod";


const questionSchema = z.object({
    question: z.string(),
    type: z.enum(['white-board', 'coding']),
    setup_code: z.union([z.string(), z.null()]).optional(),
    difficulty: z.enum(['easy', 'medium', 'hard']),
    explanation: z.string(),
    rubric: z.string(),
});

const questionsResponseSchema = z.object({
  questions: questionSchema.array(),
});

export const getQuestionsFromJobDescription = async ({ job_description }: { job_description: string }) => {
    const openai = createOpenAIClient();

    const response = await openai.responses.parse({
        model: process.env.OPENAI_MODEL || "gpt-4.1",
        input: [
            {
                role: "system",
                content: "You are a helpful assistant that generates interview questions based on job descriptions. Identify key topics and generate relevant interview questions that would help them prepare for the target job. The questions can be of two types: 'white-board' questions that test theoretical knowledge, and 'coding' questions which require the user to write code. Also provide a brief explanation of each question's purpose and the rubrics for evaluating the answer. NOTE: For 'coding' questions, include a setup code that will be executed before the user starts coding. This setup code should include things like sample data, imports, or any necessary context that the user needs to write their code in python.",
            },
            {
                role: "user",
                content: `Generate 20 interview questions (types: coding, and whiteboard) & (difficulty: easy, medium and hard) based on the following job description:\n\n${job_description}. Each question should be accompanied by an explanation of its purpose and a rubric for evaluation.`,
            }
        ],
        text: {
            format: zodTextFormat(questionsResponseSchema, "questions"),
        },
    });

    const event = response.output_parsed;
    return event
}

export const getSummaryKeyPointsForTopic = async ({ job_description }: { job_description: string }) => {
    const openai = createOpenAIClient();

    const summarySchema = z.object({
        key_points: z.string(),
        summary: z.string(),
    });

    const response = await openai.responses.parse({
        model: process.env.OPENAI_MODEL || "gpt-4.1",
        input: [
            {
                role: "system",
                content: "You are a helpful assistant that summarizes job descriptions and extracts key points. Given a job description, provide a detailed summary and a list of the several important interview related key points.",
            },
            {
                role: "user",
                content: `Create a detailed report for the following job description/topic and create a write up for the user to read through to learn about the topic. \n ### Topic: \n\n${job_description}`,
            }
        ],
        text: {
            format: zodTextFormat(summarySchema, "summary"),
        },
    });

    const event = response.output_parsed;
    return event
}