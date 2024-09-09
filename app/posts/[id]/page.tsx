import { posts } from "@/app/data";
import { Metadata } from "next";

interface Props {
  params: { id: string };
}

export const metadata: Metadata = {
  title: "Post Heaven | Post Page",
  description: "Read about an intersting post!",
};

export function generateStaticParams() {
  return posts.map((post) => ({
    id: post.id,
  }));
}

export default function PostPage(props: Props) {
  const post = posts.find((post) => post.id === props.params.id);
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
