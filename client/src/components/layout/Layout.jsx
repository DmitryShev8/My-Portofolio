import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col">
      <Header />

      <main className="pt-24 flex-1">
        {children}
      </main>

      <Footer />
    </div>
  );
}