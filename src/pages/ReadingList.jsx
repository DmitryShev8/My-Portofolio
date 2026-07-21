import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { books } from "../data/books";

const tabs = ["All", "Philosophy", "Fiction", "History", "Non Fiction"];

function BookCard({ book }) {
  return (
    <div className="book-card group">
      <div className="aspect-2/3 bg-surface-container border border-outline-variant overflow-hidden mb-6 relative">
        {book.status && (
          <div className="absolute top-4 left-4 z-20">
            <span className="bg-primary text-black font-label-sm text-[10px] px-2 py-1 uppercase">
              {book.status}
            </span>
          </div>
        )}
        <img
          src={book.image}
          alt={book.title}
          className="book-cover-img w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-[1.03] group-hover:-translate-y-1 transition-all duration-500"
        />
        <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent opacity-60" />
      </div>
      <h3 className="font-headline-md text-2xl group-hover:text-primary">
        {book.title}
      </h3>
      <p className="font-label-sm text-on-surface-variant">{book.author}</p>
      <p className="font-body-md text-on-surface-variant mt-4 line-clamp-2">
        {book.description}
      </p>
      <Link
        to={`/reading-list/${book.id}`}
        className="mt-4 inline-flex items-center gap-2 text-primary font-label-sm"
      >
        Read Review
        <span className="material-symbols-outlined text-base">
          arrow_forward
        </span>
      </Link>
    </div>
  );
}

export default function ReadingList() {
  const [activeTab, setActiveTab] = React.useState("All");
  const filteredBooks =
    activeTab === "All"
      ? books
      : books.filter((book) => book.category === activeTab);
  const navigate = useNavigate();
  return (
    <div className="bg-background text-on-background min-h-screen">
      <nav className="fixed top-0 w-full z-50 bg-surface border-b border-outline-variant">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-6 md:px-16 py-4">
          <span className="font-headline-lg text-3xl text-primary">
            Scholarly Archive
          </span>
          <div className="hidden md:flex gap-8 items-center">
            <button
              onClick={() => navigate("/")}
              className="text-on-surface-variant hover:text-primary"
            >
              Education
            </button>
            <span className="text-primary border-b-2 border-primary pb-1">
              Reading List
            </span>
            <button className="text-on-surface-variant hover:text-primary">
              Articles
            </button>
            <button className="ml-4 px-6 py-2 bg-primary text-black rounded-lg">
              Contact
            </button>
          </div>
        </div>
      </nav>
      <main className="pt-24">
        <section className="relative py-16 px-6 md:px-16 max-w-7xl mx-auto">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
          <div className="relative max-w-3xl">
            <p className="font-label-sm uppercase tracking-[0.3em] text-primary mb-4">
              Curated Repository
            </p>
            <h1 className="font-headline-xl text-6xl mb-8">
              Technical Library
            </h1>
            <p className="text-on-surface-variant">
              A curated collection of foundational texts and contemporary
              engineering wisdom that informs my architectural philosophy.
            </p>
          </div>
        </section>
        <section className="px-6 md:px-16 max-w-7xl mx-auto mb-12">
          <div className="flex flex-wrap gap-8 border-b border-outline-variant pb-4">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-1 transition-all font-label-sm ${
                  activeTab === tab
                    ? "text-primary border-b border-primary"
                    : "text-on-surface-variant hover:text-primary"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </section>
        <section className="px-6 md:px-16 max-w-7xl mx-auto pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredBooks.map((b) => (
              <BookCard key={b.title} book={b} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
