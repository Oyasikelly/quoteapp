/** @format */

import { useNavigate } from "react-router-dom";
function Hero() {
  const navigate = useNavigate();
  const className = "";
  function handleCategories() {
    navigate("/Categories");
  }
  return (
    <div className="flex flex-col pb-12 overflow-hidden bg-yellow-100">
      <header className="text-white pl-8 pr-8 bg-sky-300 pt-4 pb-4 flex items-center justify-between fixed top-0 left-0 right-0">
        <span className="font-bold text-2xl">Quote2Me</span>
        <button className="text-white-600 focus:outline-none hover:bg-white hover:text-sky-300 transition-all duration-500 ease-in-out rounded">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </header>
      <main className="ml-8 mr-8 mt-4 mb-4 w-1/2 self-center text-justify">
        <h1 className="text-sky-300 font-bold text-2xl mt-12 mb-8">
          Welcome to Quote2Me – Your Daily Dose of Inspiration{" "}
        </h1>
        <p className="text-gray-400 mb-12">
          Inspiration is just a click away! At Quote2Me, we know that the right
          words can change your perspective, ignite your passion, and elevate
          your day. Whether you're chasing your dreams, reflecting on life, or
          simply seeking a spark of positivity, our collection of powerful
          quotes is here to light the way.
        </p>
        <span className="text-sky-300 text-xl font-bold">
          Discover the Power of Words
        </span>
        <p className="text-gray-400 mb-12">
          Discover the Power of Words Dive into a world of profound quotes from
          visionaries, thought leaders, and everyday heroes. From motivational
          mantras that fuel ambition to soulful words that bring peace and
          clarity, Quote2Me offers a curated selection for every moment.
          <li>
            <b>Get Inspired Anytime, Anywhere:</b> Start your day with a quote
            that resonates with your goals.
          </li>
          <li>
            <b>Reflect and Grow:</b> Find wisdom and guidance that helps you
            grow and evolve.
          </li>
          <li>
            <b>Feel the Joy:</b> Let uplifting words fill you with warmth and
            positivity.
          </li>
        </p>
        <span className="text-sky-300 text-xl font-bold">
          Personalize Your Inspiration
        </span>
        <p className="text-gray-400 mb-12">
          Why settle for generic quotes when you can get quotes tailored just
          for you? Quote2Me’s personalized recommendations ensure that you get
          the right quote, right when you need it. Whether you're looking for a
          burst of motivation before a big meeting or a reminder to take a
          breath during a busy day, we’ve got you covered.
          <li>
            <b>Daily Inspirations: </b> Get a fresh, powerful quote delivered to
            your inbox every morning.
          </li>
          <li>
            <b>Mood-Based Selections: </b> Choose from categories like
            “Motivation,” “Love,” “Success,” and more to match your mood or
            goals.
          </li>
          <li>
            <b>Save Your Favorites:</b> Keep a collection of your most-loved
            quotes and revisit them anytime.
          </li>
        </p>
        <span className="text-sky-300 text-xl font-bold"> Why Quote2Me?</span>
        <p className="text-gray-400 mb-12">
          Why settle for generic quotes when you can get quotes tailored just
          for you? Quote2Me’s personalized recommendations ensure that you get
          the right quote, right when you need it. Whether you're looking for a
          burst of motivation before a big meeting or a reminder to take a
          breath during a busy day, we’ve got you covered.
          <li>
            <b className="text-grey-900">Handpicked Quotes: </b>We’ve carefully
            selected quotes that resonate deeply and offer meaningful guidance.
          </li>
          <li>
            <b>User-Friendly Experience: </b> Simple, beautiful design that
            makes finding and sharing quotes a breeze.
          </li>
          <li>
            <b>Motivation on Demand:</b> Whether it’s morning motivation,
            afternoon reflection, or evening inspiration, we’ve got you covered
            24/7.
          </li>
        </p>
        <span className="text-sky-300 text-xl font-bold">
          Share the Inspiration
        </span>
        <p className="text-gray-400 mb-12">
          Why keep all the wisdom to yourself? Share your favorite quotes with
          friends, family, and colleagues via social media or directly through
          our easy-to-use sharing options. Let the positivity spread!
        </p>

        <b
          onClick={handleCategories}
          className="border border-sky-300 text-sky-300 border-dashed rounded-lg p-4 hover:bg-sky-300 hover:text-white transition-all duration-500 ease-in-out"
        >
          Get your favourite quote
        </b>
      </main>
    </div>
  );
}

export default Hero;
