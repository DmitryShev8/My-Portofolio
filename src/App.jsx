import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import BlogDetail from "./pages/BlogDetail";
import Books from "./pages/Books";
import BookDetail from "./pages/BookDetail";
import ProjectDetail from "./pages/ProjectDetail";

export default function App() {
  const [active, setActive] = useState("Home");

  const [selectedPost, setSelectedPost] = useState(null);
  const [selectedBook, setSelectedBook] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const resetState = () => {
    setSelectedPost(null);
    setSelectedBook(null);
    setSelectedProject(null);
  };

  const handleNavigate = (page) => {
    resetState();
    setActive(page);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar
        active={active}
        setActive={handleNavigate}
      />

      <main className="flex-grow p-6">
        {active === "Home" && (
          <Home
            setActive={setActive}
            setSelectedPost={setSelectedPost}
          />
        )}

        {active === "About" && (
          <About
            setActive={setActive}
            setSelectedProject={setSelectedProject}
          />
        )}

        {active === "ReadMore" && selectedPost && (
          <BlogDetail
            post={selectedPost}
            setActive={handleNavigate}
          />
        )}

        {active === "The Book" && !selectedBook && (
          <Books
            setActive={setActive}
            setSelectedBook={setSelectedBook}
          />
        )}

        {active === "BookDetail" && selectedBook && (
          <BookDetail
            book={selectedBook}
            setActive={handleNavigate}
          />
        )}

        {active === "ProjectDetail" && selectedProject && (
          <ProjectDetail
            project={selectedProject}
            setActive={handleNavigate}
          />
        )}
      </main>

      <Footer />
    </div>
  );
}