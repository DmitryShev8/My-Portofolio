export default function PostCard({ post, onRead }) {
  return (
    <article className="bg-white rounded-xl shadow hover:shadow-xl transition">
      <img src={post.image} className="w-full h-48 object-cover" />

      <div className="p-4">
        <h2 className="text-xl font-semibold">{post.title}</h2>

        <p className="text-sm text-gray-500">
          {post.date} · {post.minutes} min read
        </p>

        <p className="text-gray-600">{post.description}</p>

        <button
          onClick={() => onRead(post)}
          className="text-blue-600 mt-2"
        >
          Read More →
        </button>
      </div>
    </article>
  );
}