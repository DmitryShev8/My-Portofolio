import { useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";

const navigation = [
  {
    label: "Education",
    path: "/",
    match: ["/"],
  },
  {
    label: "Reading List",
    path: "/reading-list",
    match: ["/reading-list"],
  },
  {
    label: "Articles",
    path: "/articles",
    match: ["/articles", "/article"],
  },
];

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [showContact, setShowContact] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-surface border-b border-outline-variant">
        <div className="flex justify-between items-center w-full px-6 md:px-16 py-4 max-w-7xl mx-auto">
          {/* Logo */}
          <button
            onClick={() => navigate("/")}
            className="font-headline-lg text-3xl font-semibold text-primary"
          >
            The Portfolio
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            {navigation.map((item) => (
              <NavItem
                key={item.label}
                item={item}
                pathname={location.pathname}
              />
            ))}

            <button
              onClick={() => setShowContact(true)}
              className="ml-4 px-6 py-2 bg-primary text-black font-label-sm rounded-lg hover:opacity-90 transition-all"
            >
              Contact
            </button>
          </div>

          {/* Mobile */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-primary"
          >
            <span className="material-symbols-outlined">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>
      {mobileMenuOpen && (
        <div className="fixed top-18.25 left-0 w-full bg-surface border-b border-outline-variant shadow-lg md:hidden z-40">
          <div className="flex flex-col py-4">
            {navigation.map((item) => (
              <NavLink
                key={item.label}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `px-6 py-4 transition-colors ${
                    isActive
                      ? "text-primary bg-surface-container"
                      : "text-on-surface hover:bg-surface-container"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setShowContact(true);
              }}
              className="mx-6 mt-4 py-3 rounded-xl bg-primary text-black font-medium"
            >
              Contact
            </button>
          </div>
        </div>
      )}

      {/* Contact Modal */}
      {showContact && (
        <div
          onClick={() => setShowContact(false)}
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/60 backdrop-blur-sm"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-surface border border-outline-variant rounded-3xl w-[90%] max-w-md p-8 relative shadow-2xl"
          >
            {/* Close */}
            <button
              onClick={() => setShowContact(false)}
              className="absolute top-5 right-5 text-on-surface-variant hover:text-primary"
            >
              <span className="material-symbols-outlined">close</span>
            </button>

            <h2 className="font-headline-md text-primary mb-6">Contact Me</h2>

            <div className="space-y-5">
              <div>
                <p className="text-sm text-on-surface-variant">Email</p>
                <a
                  href="mailto:aryachenko46@gmail.com"
                  className="text-primary hover:underline"
                >
                  aryachenko46@gmail.com
                </a>
              </div>

              <div>
                <p className="text-sm text-on-surface-variant">LinkedIn</p>
                <a
                  href="https://linkedin.com/in/aryadheffans46"
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary hover:underline"
                >
                  linkedin.com/in/aryadheffans46
                </a>
              </div>

              <div>
                <p className="text-sm text-on-surface-variant">GitHub</p>
                <a
                  href="https://github.com/DmitryShev8"
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary hover:underline"
                >
                  github.com/DmitryShev8
                </a>
              </div>

              <div>
                <p className="text-sm text-on-surface-variant">Location</p>
                <p className="text-on-surface">Jakarta, Indonesia</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function NavItem({ item, pathname }) {
  const active =
    item.path === "/"
      ? pathname === "/"
      : item.match.some((path) => pathname.startsWith(path));

  return (
    <NavLink
      to={item.path}
      className={
        active
          ? "font-body-md text-primary border-b-2 border-primary pb-1"
          : "font-body-md text-on-surface-variant hover:text-primary transition-colors duration-200"
      }
    >
      {item.label}
    </NavLink>
  );
}
