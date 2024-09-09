import { db } from "@/prisma/db";
import Link from "next/link";

export default async function Home() {
  const posts = await db.post.findMany();
  return (
    <main className="p4">
      {posts.map((post) => (
        <div key={post.id} className="border p-4">
          <Link
            href={`/posts/${post.id}`}
            className="flex flex-col brorder rounded p-4 mb-8"
          >
            <h2 className="text-2xl">{post.title}</h2>
            <span className="text-gray-500">
              {new Date(post.createdAt).toLocaleString()}
            </span>
          </Link>
        </div>
      ))}
    </main>
  );
}
