import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { books } from "../data/books";
import Layout from "../components/layout/Layout";

export default function ReadDetail() {
  const navigate = useNavigate();
  const { id } = useParams();

  const book = books.find((item) => item.id === id);

  if (!book) {
    return (
      <div className="min-h-screen flex items-center justify-center text-on-surface">
        Book not found.
      </div>
    );
  }

  const nextBook = books.find((b) => b.id === book.nextBook);

  return (
    <Layout>
      {/* ================= HERO ================= */}
      <section className="relative py-16 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-14 items-start">
          {/* LEFT */}

          <div className="flex-1">
            <span className="uppercase tracking-[0.25em] text-primary text-label-sm">
              {book.category}
            </span>

            <h1 className="font-headline-xl text-headline-xl mt-3">
              {book.title}
            </h1>

            <p className="italic text-on-surface-variant mt-3 text-xl">
              by {book.author}
            </p>

            {book.status && (
              <span className="inline-block mt-6 rounded-full bg-primary px-5 py-2 text-black text-sm">
                {book.status}
              </span>
            )}

            <p className="mt-8 text-body-lg leading-8 text-on-surface-variant">
              {book.description}
            </p>

            {/* Recommendation */}

            <div className="flex items-center gap-4 border-y border-outline-variant py-6 mt-10">
              <div className="w-12 h-12 rounded-full bg-primary text-black flex items-center justify-center font-bold">
                {book.author[0]}
              </div>

              <div>
                <p className="font-semibold text-on-surface">Recommended for</p>

                <p className="text-on-surface-variant">{book.recommendation}</p>
              </div>
            </div>
          </div>

          {/* RIGHT */}

          <div className="w-full lg:w-107.5">
            <img
              src={book.image}
              alt={book.title}
              className="aspect-3/4 w-full rounded-lg object-cover border border-outline-variant"
            />
          </div>
        </div>
      </section>

      {/* ================= EXECUTIVE SUMMARY ================= */}

      <section className="max-w-4xl mx-auto px-6 mb-24">
        <h2 className="font-headline-lg text-headline-lg text-primary mb-8">
          {book.summary.title}
        </h2>

        <div className="space-y-7">
          {book.summary.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-body-lg leading-8 text-on-surface-variant"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* ================= CORE PRINCIPLES ================= */}

      <section className="bg-surface-container-low py-24 mb-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-headline-lg text-secondary mb-12">
            {book.principlesTitle}
          </h2>

          <div className="space-y-6">
            {book.principles.map((item, index) => (
              <div
                key={index}
                className="border border-outline-variant bg-background p-8 hover:border-primary transition"
              >
                <div className="flex gap-6">
                  <span className="text-3xl text-outline">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <h3 className="font-headline-md text-headline-md mb-3">
                      {item.title}
                    </h3>

                    <p className="leading-7 text-on-surface-variant">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FAVORITE QUOTE ================= */}

      <section className="max-w-4xl mx-auto px-6 mb-24">
        <div className="border-l-4 border-primary pl-8">
          <p className="italic text-2xl leading-relaxed">
            "{book.favoriteQuote}"
          </p>
        </div>
      </section>
      {/* ================= MY REFLECTION ================= */}

      <section className="max-w-4xl mx-auto px-6 mb-24">
        <h2 className="font-headline-lg text-headline-lg mb-8">
          {book.takeaway.title}
        </h2>

        <div className="bg-surface-container-low border-l-4 border-primary p-10 rounded-r-lg">
          <p className="italic text-xl leading-8 mb-8">
            "{book.takeaway.quote}"
          </p>

          <p className="leading-8 text-on-surface-variant">
            {book.takeaway.reflection}
          </p>

          <p className="mt-8 font-semibold text-primary">
            — {book.takeaway.author}
          </p>
        </div>
      </section>

      {/* ================= LESSONS ================= */}

      <section className="max-w-4xl mx-auto px-6 mb-24">
        <h2 className="font-headline-lg text-headline-lg text-primary mb-8">
          Key Lessons
        </h2>

        <div className="space-y-4">
          {book.lessons.map((lesson, index) => (
            <div key={index} className="flex gap-4 items-start">
              <span className="text-primary text-xl">✓</span>

              <p className="leading-7">{lesson}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= TAGS ================= */}

      <section className="max-w-4xl mx-auto px-6 mb-24">
        <h2 className="font-headline-lg text-headline-lg text-primary mb-8">
          Topics
        </h2>

        <div className="flex flex-wrap gap-3">
          {book.tags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 rounded-full border border-outline-variant bg-surface-container-low"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      {/* ================= NAVIGATION ================= */}

      <section className="max-w-6xl mx-auto px-6 mt-24 mb-16">
        <div className="h-px bg-outline-variant mb-16"></div>

        <div className="flex items-center justify-between gap-8">
          {/* Back */}

          <div className="flex-1">
            <button
              onClick={() => navigate("/reading-list")}
              className="group flex items-center gap-5"
            >
              <div className="w-14 h-14 rounded-xl border border-outline-variant flex items-center justify-center transition-all group-hover:border-primary group-hover:bg-primary">
                <span className="material-symbols-outlined group-hover:text-black">
                  arrow_back
                </span>
              </div>

              <div className="text-left">
                <p className="font-label-sm uppercase tracking-widest text-outline">
                  Back
                </p>

                <h3 className="font-headline-md group-hover:text-primary transition-colors">
                  Reading Library
                </h3>
              </div>
            </button>
          </div>

          {/* Read Next */}

          <div className="flex-1 flex justify-end">
            {nextBook && (
              <button
                onClick={() => navigate(`/reading-list/${nextBook.id}`)}
                className="group flex items-center gap-5 text-right"
              >
                <div>
                  <p className="font-label-sm uppercase tracking-widest text-outline">
                    Read Next
                  </p>

                  <h3 className="font-headline-md group-hover:text-primary transition-colors">
                    {nextBook.title}
                  </h3>

                  <p className="text-on-surface-variant">{nextBook.author}</p>
                </div>

                <div className="w-14 h-14 rounded-xl border border-outline-variant flex items-center justify-center transition-all group-hover:border-primary group-hover:bg-primary">
                  <span className="material-symbols-outlined group-hover:text-black">
                    arrow_forward
                  </span>
                </div>
              </button>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}
