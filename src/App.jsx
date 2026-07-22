import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import ReadingList from "./pages/ReadingList"
import ReadDetail from "./pages/ReadDetail";
import Detail from "./pages/Detail";
import Article from "./pages/Article";
import BootcampProjects from "./pages/BootcampProjects"

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bootcamp-projects" element={<BootcampProjects/>} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/reading-list" element={<ReadingList />} />
        <Route path="/reading-list/:id" element={<ReadDetail />} />
        <Route path="/portfolio/:id" element={<Detail />} />
        <Route path="/article/:id" element={<Article />} />
      </Routes>
    </>
  );
}