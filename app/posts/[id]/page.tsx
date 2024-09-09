import { db } from "@/prisma/db";
import { Metadata } from "next";

interface Props {
  params: { id: string };
}

export const metadata: Metadata = {
  title: "Post Heaven | Post Page",
  description: "Read about an intersting post! ",
};

export async function generateStaticParams() {
  const posts = await db.post.findMany();
  return posts.map((post) => ({ params: { id: post.id } }));
}

export default async function PostPage(props: Props) {
  const post = await db.post.findUnique({ where: { id: props.params.id } });
  if (!post) return null;
  return (
    <main className="p-4">
      <h1 className="text-3xl">{post.title}</h1>
      <p className="text-gray-900">{post.body}</p>
      <span className="text-gray-500">{post.author}</span>
      <span>/</span>
      <span className="text-gray-500">{post.createdAt}</span>
    </main>
  );
}
