/** @format */

import { useNavigate } from "react-router-dom";

export default function SavedQuotes({ selectedQuote }) {
  function clearQuote() {
    localStorage.removeItem("selectedQuote");
    window.location.reload(); // Refresh to update state
  }

  const navigate = useNavigate();
  return (
    <div className="p-4 flex flex-col bg-gray-100 h-screen overflow-y-scroll">
      <button
        onClick={() => navigate("/")}
        className="self-end text-sky-300 font-medium "
      >
        Back{" "}
      </button>
      <div className="flex flex-col items-center justify-center bg-sky-100  w-1/2  p-6 rounded-[0.5rem]">
        {selectedQuote ? (
          <div className=" ">
            <p className="text-xl font-medium">{selectedQuote.quote}</p>
            <div className="flex items-center justify-between">
              <div>
                <span className="text-gray-500 mr-4">
                  -{selectedQuote.author}-
                </span>

                <button
                  className="mt-4 p-2 bg-red-500 text-white rounded"
                  onClick={clearQuote}
                >
                  Clear Quote
                </button>
              </div>
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
            </div>
          </div>
        ) : (
          <p className="text-gray-400">
            No quote saved yet. Select one from Categories!
          </p>
        )}
      </div>
    </div>
  );
}
