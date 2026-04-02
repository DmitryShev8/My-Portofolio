import ReactMarkdown from "react-markdown";

export default function BookDetail({ book, setActive }) {
  return (
    <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10">
      {/* LEFT */}
      <div>
        <img
          src={book.image}
          alt={book.title}
          className="w-full aspect-[2/3] object-cover rounded-xl shadow-lg"
        />

        {/* STATUS BADGE */}
        <div className="mt-4 text-center">
          <span
            className={`px-4 py-1 text-sm rounded-full ${
              book.status === "Finished"
                ? "bg-green-100 text-green-700"
                : book.status === "Reading"
                  ? "bg-blue-100 text-blue-700"
                  : "bg-gray-200 text-gray-700"
            }`}
          >
            {book.status}
          </span>
        </div>
      </div>

      {/* RIGHT */}
      <div>
        <h1 className="text-4xl font-bold mb-2">{book.title}</h1>

        <p className="text-gray-500 mb-4">
          {book.author} · {book.year}
        </p>

        {/* Rating dummy */}
        <div className="flex items-center gap-2 mb-6">
          <span className="text-yellow-500 text-xl">★★★★★</span>
          <span className="text-gray-500 text-sm">(4.8)</span>
        </div>

        {/* Review */}
        <div className="prose prose-lg max-w-none">
          <ReactMarkdown>{book.review}</ReactMarkdown>
        </div>

        <button
          onClick={() => setActive("The Book")}
          className="mt-10 text-sm text-gray-600 hover:underline"
        >
          ← Back to Books
        </button>
      </div>
    </div>
  );
}
