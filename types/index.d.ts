// type User = {
//   name: string;
//   email: string;
//   image?: string;
//   accountId: string;
// };

type Companion = Models.DocumentList<Models.Document> & {
  $id: string;
  name: string;
  subject: string;
  topic: string;
  duration: number;
  bookmarked: boolean;
};

interface CreateCompanion {
  name: string;
  subject: string;
  topic: string;
  voice: string;
  style: string;
  duration: number;
}

interface GetAllCompanions {
  limit?: number;
  page?: number;
  subject?: string | string[];
  topic?: string | string[];
}

interface BuildClient {
  key?: string;
  sessionToken?: string;
}

interface CreateUser {
  email: string;
  name: string;
  image?: string;
  accountId: string;
}

interface SearchParams {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

interface Avatar {
  userName: string;
  width: number;
  height: number;
  className?: string;
}


interface SavedMessage {
  role: "user" | "system" | "assistant";
  content: string;
}

type Question = {
  question: string;
  type: "white-board" | "coding";
  setup_code?: string | null;
  difficulty: "easy" | "medium" | "hard";
  explanation: string;
  rubric: string;
};

interface CompanionComponentProps {
  companionId: string;
  subject: string;
  topic: string;
  name: string;
  userName: string;
  userImage: string;
  voice: string;
  style: string;
  questions: Question[];
}