import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import pagenotfound from "../assets/pagenotfound.jpeg";

export const PageNotFound = () => {
  useEffect(() => {
    document.title = `page not found - Movie World`;
  });

  return (
    <main>
      <section className="flex flex-col justify-center px-2 ">
        <div className="flex flex-col items-center my-4">
          <p className="text-7xl dark:text-white mb-8">404, Oops!</p>
          <img
            className="w-2/5 rounded-2xl"
            src={pagenotfound}
            alt="pagenotfoundimg"
          />
        </div>
        <div className="flex justify-center my-4">
          <Link to="/">
            <button className="w-64 my-3 text-xl text-gray-700 dark:text-gray-400">
              Back To Home
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
};
