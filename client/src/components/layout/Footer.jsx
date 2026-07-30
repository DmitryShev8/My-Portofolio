import React from "react";

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-16 flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Brand */}
        <div className="text-center md:text-left">
          <h2 className="font-headline-md text-2xl text-primary">
            The Portfolio
          </h2>

          <p className="mt-2 text-sm text-on-surface-variant">
            © {new Date().getFullYear()} Made by Arya Dheffan S. All rights
            reserved.
          </p>
        </div>

        {/* Links */}
        <div className="flex items-center gap-8 text-xs font-label-sm uppercase tracking-[0.2em] text-on-surface-variant">
          <a
            href="https://github.com/DmitryShev8"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/aryadheffans46"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}