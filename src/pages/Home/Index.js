import React from "react";
import { Link } from "react-router-dom";
import Breakingbad from "../../assets/Breakingbad.jpg";

export default function Home() {
  return (
    <div className="flex justify-evenly text-center flex-wrap items-center h-screen ">
      <div>
        <img
          src={Breakingbad}
          className="max-w-xs"
          alt="Breaking bad"
          loading="lazy"
        />
      </div>
      <div>
        <h1 className="text-3xl font-bold text-stone-50 my-5">
          Breaking bad collection
        </h1>
        <Link to="/Characters">
          <button className="text-3xl text-stone-50 rounded-lg bg-red-700 hover:bg-red-600 px-20 py-5">
            Start
          </button>
        </Link>
      </div>
    </div>
  );
}
