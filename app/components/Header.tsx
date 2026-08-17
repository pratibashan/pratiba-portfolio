"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const navigation = [
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Skills", id: "skills" },
  { label: "Education", id: "education" },
  { label: "Contact", id: "contact" },
];

const HEADER_HEIGHT = 64;
const ACTIVATION_POINT = HEADER_HEIGHT + 32;

export default function Header() {
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const frameRef = useRef<number | null>(null);

  const updateActiveSection = useCallback(() => {
    const aboutSection = document.getElementById("about");

    // Hero / Home
    if (
      !aboutSection ||
      aboutSection.getBoundingClientRect().top > ACTIVATION_POINT
    ) {
      setActiveSection("");
      return;
    }

    // Contact should be active at the very bottom.
    const atBottom =
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 10;

    if (atBottom) {
      setActiveSection("contact");
      return;
    }

    let currentSection = "";

    for (const item of navigation) {
      const section = document.getElementById(item.id);

      if (!section) {
        continue;
      }

      const rect = section.getBoundingClientRect();

      if (rect.top <= ACTIVATION_POINT && rect.bottom > ACTIVATION_POINT) {
        currentSection = item.id;
        break;
      }
    }

    if (currentSection) {
      setActiveSection(currentSection);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }

      frameRef.current = requestAnimationFrame(() => {
        updateActiveSection();
        frameRef.current = null;
      });
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);

      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [updateActiveSection]);

  // Close mobile menu if the browser is resized to desktop.
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function handleNavigation(
    event: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string,
  ) {
    event.preventDefault();

    const section = document.getElementById(sectionId);

    if (!section) {
      return;
    }

    setActiveSection(sectionId);
    setMobileMenuOpen(false);

    window.history.replaceState(null, "", `#${sectionId}`);

    const sectionTop =
      window.scrollY + section.getBoundingClientRect().top - HEADER_HEIGHT;

    window.scrollTo({
      top: sectionTop,
      behavior: "instant",
    });

    requestAnimationFrame(updateActiveSection);
  }

  function handleHome(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();

    setActiveSection("");
    setMobileMenuOpen(false);

    window.history.replaceState(null, "", window.location.pathname);

    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        {/* Logo / Name */}
        <a
          href="#home"
          onClick={handleHome}
          className="flex items-center gap-3"
        >
          {/* <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-indigo-500 text-sm font-bold text-white shadow-lg shadow-violet-950/30">
            PS
          </span> */}

          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-br from-fuchsia-500 via-violet-500 to-indigo-500 text-sm font-bold text-white shadow-lg shadow-violet-950/30">
            PS
          </span>

          <span className="text-lg font-bold tracking-tight text-white">
            Pratiba Shan
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav
          className="hidden items-center gap-1 text-sm md:flex"
          aria-label="Main navigation"
        >
          {navigation.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(event) => handleNavigation(event, item.id)}
                aria-current={isActive ? "location" : undefined}
                className={`rounded-md px-3 py-2 transition ${
                  isActive
                    ? "bg-violet-500 font-semibold text-white"
                    : "font-medium text-slate-300 hover:bg-slate-900 hover:text-violet-400"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((current) => !current)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700 text-slate-300 transition hover:border-violet-400 hover:text-violet-400 md:hidden"
          aria-label={
            mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
        >
          {mobileMenuOpen ? (
            // Close icon
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            // Hamburger icon
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav
          id="mobile-navigation"
          className="border-t border-slate-800 bg-slate-950 px-6 py-4 md:hidden"
          aria-label="Mobile navigation"
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-1">
            {navigation.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(event) => handleNavigation(event, item.id)}
                  aria-current={isActive ? "location" : undefined}
                  className={`rounded-lg px-4 py-3 text-base transition ${
                    isActive
                      ? "bg-violet-500 font-semibold text-white"
                      : "font-medium text-slate-300 hover:bg-slate-900 hover:text-violet-400"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
}
