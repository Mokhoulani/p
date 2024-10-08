import { Prisma } from "@prisma/client";
interface Post {
  id: string;
  title: string;
  body: string;
  author: string;
  createdAt: string;
}

export const posts: Prisma.PostCreateInput[] = [
  {
    title: "The Rise of AI in Everyday Life",
    body: "Artificial intelligence is becoming a crucial part of our daily lives, from smart assistants to autonomous vehicles.",
    author: "John Doe",
    createdAt: "2024-09-09T10:30:00Z",
  },
  {
    title: "Exploring the Depths of the Ocean",
    body: "Oceans cover more than 70% of the Earth's surface and hold many mysteries waiting to be discovered.",
    author: "Jane Smith",
    createdAt: "2024-09-08T14:45:00Z",
  },
  {
    title: "Understanding Quantum Computing",
    body: "Quantum computing promises to revolutionize technology by harnessing the principles of quantum mechanics.",
    author: "Alex Johnson",
    createdAt: "2024-09-07T09:20:00Z",
  },
  {
    title: "The Future of Renewable Energy",
    body: "As the world shifts towards sustainability, renewable energy sources like solar and wind power are becoming more critical.",
    author: "Emily White",
    createdAt: "2024-09-06T11:15:00Z",
  },
  {
    title: "The Importance of Mental Health Awareness",
    body: "Mental health is just as important as physical health, and raising awareness can help reduce stigma.",
    author: "Michael Brown",
    createdAt: "2024-09-05T16:05:00Z",
  },
];
