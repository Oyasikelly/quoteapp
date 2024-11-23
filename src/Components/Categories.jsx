/** @format */
import { useEffect, useState } from "react";
import image from "../assets/quoteBackgroundImage.jpg";
import { Link, useNavigate } from "react-router-dom";
export default function Categories({ setSavedQuotes, savedQuotes }) {
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

  const navigate = useNavigate();
  const [category, setCategory] = useState();
  const [searchedQuote, setSearchQuote] = useState([]);
  const [testCat, setTestCat] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [openLayer, setOpenLayer] = useState(false);
  const [addedQuote, setAddedQuote] = useState("");
  // Using Upslash API call to changhe the background image whenever a selection is done
  const [getUnSplashImg, setGetUnsplashImg] = useState();
  const [LoadingImg, setLoadingImg] = useState(false);
  useEffect(() => {
    const fetchSinglePhotoByName = async (query) => {
      const accessKey = "A78AbO0pPDveoMHDhUpVYSg1DTIQeNNPE-5-4W8LMZA";
      const url = `https://api.unsplash.com/search/photos?query=${query}&per_page=5&client_id=${accessKey}`;

      try {
        setLoadingImg(true);
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        if (data.results.length > 0) {
          // console.log(data.results[0]);
          setGetUnsplashImg(data.results[4].urls.regular);
          return data.results[4]; // Returns the single photo result
        } else {
          setError("No photo found");
          return null;
        }
      } catch (error) {
        setError("failed, check your internet connection");

        console.error("Error fetching photo:", error);
      } finally {
        setLoadingImg(false);
      }
    };

    // Example usage:
    testCat === category && fetchSinglePhotoByName(testCat);
  }, [testCat]);

  function handleCategories(e) {
    setCategory(() => e.target.value);
  }

  // console.log(getUnSplashImg.urls.full);
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

  //

  // Handling Pop Up Layer
  function handlePopUpLayer(result) {
    setAddedQuote("Quote Saved 💗");

    // Check for duplicate quotes before adding
    setSavedQuotes((prevQuotes) => {
      const isDuplicate = prevQuotes.some(
        (quote) => quote.quote === result.quote
      );
      return isDuplicate ? prevQuotes : [...prevQuotes, result];
    });

    setTimeout(() => {
      setAddedQuote(""); // Clear the notification after 2 seconds
    }, 2000);
  }

  return (
    <div className="flex flex-col items-center relative bg-local-image bg-cover bg-center h-screen overflow-y-scroll">
      {!isLoading && !LoadingImg && !error && (
        <div className="-mt-6 w-full h-[300vh] object-cover sm:object-contain md:object-scale-down lg:object-fill">
          <img
            src={`${getUnSplashImg}`}
            alt="Unsplash-Images"
            className="h-[100%]"
          />
        </div>
      )}
      <div className="overflow-scroll bg-black/55  h-screen p-4 absolute top-0 left-0 right-0 flex flex-col items-center">
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
            <SearchQuote
              searchedQuote={searchedQuote}
              handlePopUpLayer={handlePopUpLayer}
              openLayer={openLayer}
              navigate={navigate}
            />
          )}
          {error && <ErrorMessage messsage={error} />}
          {!isLoading && !LoadingImg && !error && (
            <AddedQuotes onAddQuote={addedQuote} />
          )}
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

function SearchQuote({ searchedQuote, openLayer, handlePopUpLayer, navigate }) {
  return (
    <>
      {searchedQuote.map((result, i) => (
        <div
          key={i}
          className="text-2xl font-roboto border border-sky-300 mt-12 w-2/3 max-w-2xl text-center  rounded p-4 relative"
          onClick={() => handlePopUpLayer(result)}
        >
          {openLayer && <PopUpLayer navigate={navigate} />}
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

function PopUpLayer({ navigate }) {
  function handleIndex() {
    navigate("/Categories");
  }
  return (
    <div className="w-full absolute p-4 bg-sky-200 text-grey-200">
      <p>want to save this quote?</p>
      <button>Yes</button>
      <button onClick={handleIndex}>No</button>
    </div>
  );
}
function AddedQuotes({ onAddQuote }) {
  return (
    <div>
      <p className="text-pink-500 font-medium mt-4 ">{onAddQuote}</p>
    </div>
  );
}
