/** @format */

import { useNavigate } from "react-router-dom";

export default function SavedQuotes({ savedQuotes, setSavedQuotes }) {
  const navigate = useNavigate();

  // Clear all quotes
  function clearAllQuotes() {
    localStorage.removeItem("savedQuotes");
    setSavedQuotes([]);
  }

  // Remove a single quote
  function removeQuote(index) {
    const updatedQuotes = savedQuotes.filter((_, i) => i !== index);
    setSavedQuotes(updatedQuotes);
  }

  return (
    <div className="p-4 flex flex-col bg-gray-100 h-screen overflow-y-scroll">
      <button
        onClick={() => navigate("/Categories")}
        className="self-end text-sky-300 font-medium mb-4"
      >
        Back
      </button>
      <div className="flex flex-col items-center justify-center bg-sky-100 w-3/4 mx-auto p-6 rounded-[0.5rem]">
        {savedQuotes.length > 0 ? (
          savedQuotes.map((quote, index) => (
            <div key={index} className="mb-4 p-4 bg-white rounded shadow">
              <p className="text-xl font-medium">{quote.quote}</p>
              <div className="flex justify-between mt-2">
                <span className="text-gray-500">-{quote.author}-</span>
                <button
                  className="text-red-500 hover:underline"
                  onClick={() => removeQuote(index)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-400">No quotes saved yet. Select some!</p>
        )}
        {savedQuotes.length > 0 && (
          <button
            onClick={clearAllQuotes}
            className="mt-4 p-2 bg-red-500 text-white rounded"
          >
            Clear All
          </button>
        )}
      </div>
    </div>
  );
}
