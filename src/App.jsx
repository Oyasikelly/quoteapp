/** @format */

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hero from "./Components/Hero";
import Categories from "./Components/Categories";
export default function App() {
  return (
    <BrowserRouter>
      <div className="overflow-hidden flex flex-col">
        <Routes>
          <Route index element={<Hero />} />
          <Route path="Categories" element={<Categories />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
