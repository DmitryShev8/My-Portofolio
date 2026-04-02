import { FaInstagram } from "react-icons/fa";

export default function Navbar({ active, setActive, resetState }) {
  const navItems = ["Home", "About", "My Blog", "The Book"];

  return (
    <nav className="flex justify-between px-6 py-4 bg-white shadow-md">
      <div className="flex space-x-6">
        {navItems.map((item) => (
          <button
            key={item}
            onClick={() => {
              setActive(item);
              resetState();
            }}
            className={`text-lg ${
              active === item ? "text-blue-600" : "text-gray-700"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <a href="https://instagram.com" target="_blank">
        <FaInstagram size={24} />
      </a>
    </nav>
  );
}