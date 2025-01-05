import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Github } from "lucide-react";

const Navbar = () => {
  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Onest&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img src="/navRobot.svg" alt="Alita" className="h-8 w-8" />
              <span className="font-light font-onest text-2xl">Alita</span>{" "}
              {/* Updated font */}
            </Link>
          </div>
          <div className="flex items-center space-x-6">
            <nav className="hidden md:flex items-center space-x-6">
              <Link
                to="/features"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-gray-900 font-onest"
              >
                Features
              </Link>
              <Link
                to="/roadmap"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-gray-900 font-onest"
              >
                Roadmap
              </Link>
              <Link
                to="/stake"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-gray-900 font-onest"
              >
                Stake $ALITA
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <a
                href="https://twitter.com/alita"
                target="_blank"
                rel="noreferrer"
                className="rounded-md p-2 text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900 font-onest"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4 fill-current"
                  aria-hidden="true"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="https://github.com/alita"
                target="_blank"
                rel="noreferrer"
                className="rounded-md p-2 text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900 font-onest"
              >
                <Github className="h-4 w-4" aria-hidden="true" />
                <span className="sr-only">GitHub</span>
              </a>
              <button className="flex items-center justify-center gap-2 px-4 py-1.5 w-[129px] h-[30px] bg-gradient-to-b from-pink-500 to-purple-500 rounded-full text-white text-[13px] leading-[26px] font-onest tracking-tighter focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
                LAUNCH AGENT
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
