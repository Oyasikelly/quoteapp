/** @format */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Hero() {
  const navigate = useNavigate();

  function handleCategories() {
    navigate("/Categories");
  }

  // Toggle the panel
  const [openMenu, setOpenMenu] = useState(false);
  const togglePanel = () => {
    console.log("Open Menu");
    setOpenMenu(!openMenu);
  };

  const navigateToSavedQuote = () => {
    navigate("/SavedQuotes");
  };
  return (
    <div className=" relative h-screen overflow-y-scroll smooth w-full">
      {openMenu && (
        <SlidingPanel openMenu={openMenu} onSaved={navigateToSavedQuote} />
      )}
      <div className="flex flex-col pb-12 overflow-hidden bg-white-100">
        <header className="text-white pl-8 pr-8 bg-sky-300 pt-4 pb-4 flex items-center justify-between fixed top-0 left-0 right-0">
          <span className="font-bold text-2xl">Quote2Me</span>
          <button
            onClick={togglePanel}
            className="text-white-600 focus:outline-none hover:bg-white hover:text-sky-300 transition-all duration-500 ease-in-out rounded"
            aria-label="Menu"
          >
            {openMenu ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white-300 hover:text-sky-300  transition duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            )}
          </button>
        </header>
        <main className="ml-8 mr-8 mt-10 mb-4 w-1/2 self-center text-justify">
          <h1 className="text-sky-300 font-bold text-2xl mt-12 mb-8">
            Welcome to Quote2Me – Your Daily Dose of Inspiration
          </h1>
          <p className="text-gray-400 mb-12">
            Inspiration is just a click away! At Quote2Me, we know that the
            right words can change your perspective, ignite your passion, and
            elevate your day.
          </p>
          <span className="text-sky-300 text-xl font-bold">
            Discover the Power of Words
          </span>
          <div className="text-gray-400 mb-12">
            Dive into a world of profound quotes from visionaries, thought
            leaders, and everyday heroes. Our collection includes:
            <ul className="list-disc list-inside mt-4">
              <li>
                <b>Get Inspired Anytime, Anywhere:</b> Start your day with a
                quote that resonates with your goals.
              </li>
              <li>
                <b>Reflect and Grow:</b> Find wisdom and guidance that helps you
                grow and evolve.
              </li>
              <li>
                <b>Feel the Joy:</b> Let uplifting words fill you with warmth
                and positivity.
              </li>
            </ul>
          </div>
          <span className="text-sky-300 text-xl font-bold">
            Personalize Your Inspiration
          </span>
          <div className="text-gray-400 mb-12">
            Whether you're chasing your dreams or looking for clarity, we’ve got
            you covered with:
            <ul className="list-disc list-inside mt-4">
              <li>
                <b>Daily Inspirations: </b> Receive fresh quotes every morning.
              </li>
              <li>
                <b>Mood-Based Selections: </b> Pick categories that match your
                vibe.
              </li>
              <li>
                <b>Save Your Favorites:</b> Keep a collection of quotes you
                love.
              </li>
            </ul>
          </div>
          <button
            onClick={handleCategories}
            className="border border-sky-300 text-sky-300 border-dashed rounded-lg p-4 hover:bg-sky-300 hover:text-white transition-all duration-500 ease-in-out"
            aria-label="Navigate to Categories page"
          >
            Get your favourite quote
          </button>
        </main>
      </div>
    </div>
  );
}

function SlidingPanel({ openMenu, onSaved }) {
  return (
    <div
      className={`pl-4 pt-20 flex flex-col justify-between fixed top-0 right-0 h-full w-1/2 bg-gray-800 text-white shadow-lg transform transition-transform duration-500 ease-in-out${
        openMenu ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div
        onClick={onSaved}
        className="flex flex-row items-center gap-2 cursor-pointer hover:bg-sky-300 w-fit pt-2 pb-2 rounded ring ring-sky-300"
      >
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-pink-500 hover:text-red-700 transition duration-300"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </span>
        <p className="text-white">Saved Quotes</p>
      </div>
      <div className="flex flex-row items-center gap-2 cursor-pointer">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-500 hover:text-gray-700 transition duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6.253v-2.5a9.005 9.005 0 015.502 16.251h-2.502a9.005 9.005 0 01-8.502-8.502v2.502a9.005 9.005 0 018.502-8.502z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 15.253a3.5 3.5 0 110-7 3.5 3.5 0 010 7z"
            />
          </svg>
        </span>
        <p>settings</p>
      </div>
    </div>
  );
}
