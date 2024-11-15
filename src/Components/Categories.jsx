/** @format */
import { useEffect, useState } from "react";
import image from "../assets/usgs-eAGoXRFiysw-unsplash.jpg";
export default function Categories() {
  const CategoriesArr = [
    "--select--",
    "age",
    "alone",
    "amazing",
    "anger",
    "architecture",
    "art",
    "attitude",
    "beauty",
    "best",
    "birthday",
    "business",
    "car",
    "change",
    "communication",
    "computers",
    "cool",
    "courage",
    "dad",
    "dating",
    "death",
    "design",
    "dreams",
    "education",
    "environmental",
    "equality",
    "experience",
    "failure",
    "faith",
    "family",
    "famous",
    "fear",
    "fitness",
    "food",
    "forgiveness",
    "freedom",
    "friendship",
    "funny",
    "future",
    "god",
    "good",
    "government",
    "graduation",
    "great",
    "happiness",
    "health",
    "history",
    "home",
    "hope",
    "humor",
    "imagination",
    "inspirational",
    "intelligence",
    "jealousy",
    "knowledge",
    "leadership",
    "learning",
    "legal",
    "life",
    "love",
    "marriage",
    "medical",
    "men",
    "mom",
    "money",
    "morning",
    "movies",
    "success",
  ];

  const [category, setCategory] = useState();
  const [searchedQuote, setSearchQuote] = useState([]);
  const [testCat, setTestCat] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  function handleCategories(e) {
    setCategory(() => e.target.value);
  }

  useEffect(() => {
    async function getQuote(category) {
      const APIKEY = "JTW9I21Z12yMtgVQlTaHUQ==SBCyMnrhge3YeAlz";
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://api.api-ninjas.com/v1/quotes?category=${category}`,
          {
            method: "GET",
            headers: {
              "X-Api-Key": APIKEY,
            },
          }
        );

        if (!response.ok) {
          // setError(true);
          throw new Error("Network response was not ok " + response.statusText);
        }
        const data = await response.json();
        setSearchQuote(data);
      } catch (err) {
        setError("failed, check your internet connection");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }

    // Call the function
    testCat === category && getQuote(testCat);
  }, [testCat]);

  function handleRenderQuote() {
    setTestCat(category);
  }

  return (
    <div className="flex flex-col items-center relative bg-local-image bg-cover bg-center h-screen">
      <div className="bg-black/55  h-screen p-4 absolute top-0 left-0 right-0 flex flex-col items-center">
        <select
          value={category}
          onChange={handleCategories}
          className="custom-select appearance-none p-6  w-1/2 mt-20 border border-sky-300 focus:outline-none rounded text-center  bg-transparent text-sky-300 "
        >
          {CategoriesArr.map((option, i) => {
            return (
              <option className="border border-sky-300" value={option} key={i}>
                {option}
              </option>
            );
          })}
        </select>

        <div className="text-sky-300 flex flex-col items-center flex-wrap">
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <SearchQuote searchedQuote={searchedQuote} />
          )}
          {error && <ErrorMessage messsage={error} />}
        </div>
        <button
          onClick={handleRenderQuote}
          className="mt-6 bg-sky-300 pl-4 pr-4 pt-2 pb-2 rounded hover:outline-none hover:bg-sky-200 transition-all duration-500 ease-in-out"
        >
          See quote
        </button>
      </div>
    </div>
  );
}

function SearchQuote({ searchedQuote }) {
  return (
    <>
      {searchedQuote.map((result, i) => (
        <div
          key={i}
          className="text-2xl font-roboto border border-sky-300 mt-12 w-2/3 max-w-2xl text-center  rounded p-4"
        >
          <p>
            {result.quote}
            <br />
          </p>
          <span className="mt-6 text-white font-mono text-medium">
            -{result.author}-
          </span>
        </div>
      ))}
    </>
  );
}
function Loader() {
  return (
    <div className="abosolute top-0 right-0 left-0">
      <p>Loading quote...</p>
    </div>
  );
}
function ErrorMessage({ messsage }) {
  return <p className="text-red">{messsage}</p>;
}
