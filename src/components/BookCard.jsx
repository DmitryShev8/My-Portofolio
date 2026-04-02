export default function BookCard({ book, onClick }) {
  return (
    <div
      onClick={() => onClick(book)}
      className="bg-white rounded-xl shadow hover:shadow-xl transition cursor-pointer overflow-hidden"
    >
      <div className="w-full aspect-[2/3] bg-gray-100">
        <img
          src={book.image}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-4">
        <h2 className="text-lg font-semibold">{book.title}</h2>
        <p className="text-sm text-gray-500">
          {book.author} · {book.year}
        </p>
      </div>
    </div>
  );
}