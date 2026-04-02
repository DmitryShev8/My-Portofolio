import BookCard from "../components/BookCard";
import { books } from "../data/books";

export default function Books({ setActive, setSelectedBook }) {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {books.map((book, i) => (
        <BookCard
          key={i}
          book={book}
          onClick={(b) => {
            setSelectedBook(b);
            setActive("BookDetail");
          }}
        />
      ))}
    </div>
  );
}