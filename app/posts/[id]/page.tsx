import { posts } from "@/app/data";

interface Props {
  params: { id: string };
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
