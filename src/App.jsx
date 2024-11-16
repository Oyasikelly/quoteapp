/** @format */

import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hero from "./Components/Hero";
import Categories from "./Components/Categories";
import SavedQuotes from "./Components/SavedQuotes";

export default function App() {
  const [savedQuotes, setSavedQuotes] = useState(() => {
    // Retrieve saved quotes from localStorage (if any)
    const quotes = localStorage.getItem("savedQuotes");
    return quotes ? JSON.parse(quotes) : [];
  });

  useEffect(() => {
    // Save the updated list of quotes to localStorage
    localStorage.setItem("savedQuotes", JSON.stringify(savedQuotes));
  }, [savedQuotes]);

  return (
    <BrowserRouter>
      <div className="overflow-hidden flex flex-col">
        <Routes>
          <Route index element={<Hero />} />
          <Route
            path="Categories"
            element={
              <Categories
                setSavedQuotes={setSavedQuotes}
                savedQuotes={savedQuotes}
              />
            }
          />
          <Route
            path="SavedQuotes"
            element={
              <SavedQuotes
                savedQuotes={savedQuotes}
                setSavedQuotes={setSavedQuotes}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
