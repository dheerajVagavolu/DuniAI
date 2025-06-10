'use client';

import React, { useEffect, useState } from "react";
import {vapi} from "@/lib/vapi.sdk";

type Question = {
  question: string;
  type: "white-board" | "coding";
  setup_code?: string | null;
  difficulty: "easy" | "medium" | "hard";
  explanation: string;
  rubric: string;
};

export const QuestionComponent = ({ questions, userInput, setUserInput }: { questions: { questions: Question[] }, userInput: string, setUserInput: React.Dispatch<React.SetStateAction<string>> }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedQuestion = questions.questions[selectedIndex];

  const [showQuestions, setShowQuestions] = useState(false);
  const toggleQuestions = () => setShowQuestions(!showQuestions);

  useEffect(() => {
    // Send the selected question to the backend when it changes
    vapi.send({
      type: "add-message",
      message: {
        role: "system",
        content: `The user has now switched to the question: "${selectedQuestion.question}". Acknowledge this change and prepare to assist with this question. Do not provide answers, but guide the user if they are stuck.`,
      },
    });
  }, [selectedIndex]);
  
  return (
    <div className="p-4 w-full space-y-6">
      <h1 className="text-2xl font-bold">Practice Questions</h1>

      {/* Dropdown to select a question */}
      <select
        className="w-full p-2 border rounded"
        value={selectedIndex}
        onChange={(e) => setSelectedIndex(Number(e.target.value))}
      >
        {questions.questions.map((q, idx) => (
          <option key={idx} value={idx}>
            {q.question.length > 80 ? q.question.slice(0, 80) + '...' : q.question}
          </option>
        ))}
      </select>

      {/* Question Display */}
      <div className="border rounded-lg p-4 shadow space-y-4 bg-white">
        <h2 className="text-xl font-semibold">{selectedQuestion.question}</h2>
        <p className="text-sm text-gray-500 capitalize">
          Type: {selectedQuestion.type} | Difficulty: {selectedQuestion.difficulty}
        </p>

        {selectedQuestion.type === "white-board" ? (
          <div>
            <label className="block font-medium mb-2">Your Answer:</label>
            <textarea
              rows={10}
              className="w-full p-3 border rounded resize-y"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Type your theoretical explanation here..."
            />
          </div>
        ) : (
          <div>
            {selectedQuestion.setup_code && (
              <div className="mb-4">
                <label className="block font-medium mb-1">Setup Code (read-only):</label>
                <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto whitespace-pre-wrap">
                  {selectedQuestion.setup_code}
                </pre>
              </div>
            )}
            <label className="block font-medium mb-2">Write Your Code:</label>
            <textarea
              rows={12}
              className="w-full p-3 border rounded font-mono text-sm resize-y"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Write your Python code here..."
            />
          </div>
        )}
      </div>
    </div>
  );
};
