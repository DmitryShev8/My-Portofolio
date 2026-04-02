import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import PostCard from "../components/PostCard";
import { posts } from "../data/posts";

export default function Home({ setActive, setSelectedPost }) {
  const greetings = ["Здорова", "Привет", "Спасибо"];
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const featuredPost = posts.find((p) => p.featured);
  const otherPosts = posts.filter((p) => !p.featured);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % greetings.length);
        setFade(true);
      }, 500);
    }, 2500);

    return () => clearInterval(interval);
  }, [greetings.length]);

  const handleRead = (post) => {
    console.log("CLICKED:", post.title);
    setSelectedPost(post);
    setActive("ReadMore");
  };

  return (
    <>
      <section className="flex flex-col md:flex-row items-center justify-center gap-16 mb-20">
        <div className="max-w-xl">
          <h1 className="text-5xl font-bold mb-4">
            <span
              className={`block text-blue-600 transition-opacity duration-500 ${
                fade ? "opacity-100" : "opacity-0"
              }`}
            >
              {greetings[index]}
            </span>
            Halo Saya{" "}
            <span className="text-blue-600">
              <Typewriter
                words={["Arya", "AI Enthusiast", "Writer"]}
                loop
                cursor
              />
            </span>
          </h1>

          <p className="text-gray-600 mb-6">
            Informatics student passionate about AI, philosophy, and
            storytelling.
          </p>

          <button
            onClick={() => setActive("About")}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg"
          >
            About Me
          </button>
        </div>

        <img
          src="/arya.jpg"
          className="w-80 h-80 object-cover rounded-3xl shadow-xl"
        />
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 text-center">
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-3xl font-bold text-blue-600">10+</h3>
          <p className="text-gray-600">Articles Written</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-3xl font-bold text-blue-600">5+</h3>
          <p className="text-gray-600">AI Projects</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-3xl font-bold text-blue-600">3</h3>
          <p className="text-gray-600">Languages Learning</p>
        </div>
      </section>

      {featuredPost && (
        <section className="flex flex-col md:flex-row items-center gap-12 mb-24">
          {/* LEFT IMAGE */}
          <div className="relative w-full md:w-1/2">
            <img
              src={featuredPost.image}
              alt={featuredPost.title}
              className="w-full h-[300px] md:h-[350px] object-cover rounded-xl shadow-lg"
            />

            {/* PROFILE */}
            <img
              src="/logo-bg.png"
              className="absolute -bottom-10 left-6 w-24 h-24 rounded-full border-4 border-white shadow-lg"
            />
          </div>

          {/* RIGHT TEXT */}
          <div className="md:w-1/2 mt-12 md:mt-0">
            <h2 className="text-4xl font-bold mb-4">{featuredPost.title}</h2>

            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
              {featuredPost.description}
            </p>

            <button
              onClick={() => handleRead(featuredPost)}
              className="text-blue-600 font-medium hover:underline"
            >
              Read my story →
            </button>
          </div>
        </section>
      )}

      <div className="grid gap-8 md:grid-cols-3">
        {otherPosts.map((post, i) => (
          <PostCard key={i} post={post} onRead={handleRead} />
        ))}
      </div>
    </>
  );
}
