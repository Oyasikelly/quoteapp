/** @format */
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hero from "./Components/Hero";
import Categories from "./Components/Categories";
import SavedQuotes from "./Components/SavedQuotes";
export default function App() {
  const [selectedQuote, setSelectedQuote] = useState(null);

  useEffect(() => {
    if (selectedQuote) {
      console.log("category Updated", selectedQuote);
    }
  }, [selectedQuote]);
  return (
    <BrowserRouter>
      <div className="overflow-hidden flex flex-col">
        <Routes>
          <Route index element={<Hero />} />
          <Route
            path="Categories"
            element={<Categories setSelectedQuote={setSelectedQuote} />}
          />
          <Route
            path="SavedQuotes"
            element={<SavedQuotes selectedQuote={selectedQuote} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
