import OpenAI from "openai";

export const createOpenAIClient = () => {
    return new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
    });
}