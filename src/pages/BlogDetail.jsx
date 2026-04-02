import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

export default function BlogDetail({ post, setActive }) {
  const [content, setContent] = useState("");

  useEffect(() => {
    if (post.file) {
      fetch(post.file)
        .then((res) => res.text())
        .then(setContent);
    } else {
      setContent(post.description);
    }
  }, [post]);

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Image */}
      <div className="w-full h-[300px] md:h-[400px] overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-10">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          {post.title}
        </h1>

        {/* Meta (optional, kalau nanti mau tambah author/date) */}
        <div className="text-gray-500 text-sm mb-10">
          ✍️ By You • {new Date(post.date).toDateString()}
        </div>

        {/* Markdown Content */}
        <article
          className="prose prose-lg max-w-none prose-gray
          prose-headings:font-semibold
          prose-p:leading-relaxed
          prose-img:rounded-xl
          prose-blockquote:border-l-4
          prose-blockquote:border-gray-300
          prose-blockquote:pl-4
          prose-blockquote:text-gray-600"
        >
          <ReactMarkdown
            components={{
              h2: ({ children }) => (
                <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-4">
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-xl font-semibold mt-8 mb-3">{children}</h3>
              ),
              p: ({ children }) => (
                <p className="mb-6 leading-relaxed text-gray-700 text-lg">
                  {children}
                </p>
              ),
              blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 my-8">
                  {children}
                </blockquote>
              ),
            }}
          >
            {content}
          </ReactMarkdown>
        </article>

        {/* Back Button */}
        <div className="mt-12">
          <button
            onClick={() => setActive("Home")}
            className="text-blue-600 hover:text-blue-800 font-medium transition"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
