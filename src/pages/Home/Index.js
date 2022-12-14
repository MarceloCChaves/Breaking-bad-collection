import React from "react";
import { Link } from "react-router-dom";
import BreakingbadLogo from "../../assets/Breaking_Bad_logo.svg.png";

export default function Home() {
  return (
    <div className="flex justify-evenly text-center flex-wrap items-center h-screen ">
      <div className="flex flex-col items-center">
        <img
          src={BreakingbadLogo}
          className="max-w-xs mb-5"
          alt="Breaking bad"
          loading="lazy"
        />
        <p className="text-xl font-bold text-stone-50 mt-3">Developed by <a href="https://github.com/MarceloCChaves">Marcelo Chaves</a> using <a href="https://www.breakingbadapi.com/">Breaking bad api</a></p>
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
