import React from "react";
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className="bg-black w-full flex justify-around mb-5">
      <h1 className="text-3xl font-bold text-stone-50">
        Breaking bad collection
      </h1>
      <Link to={props.route}>
        <button className="text-stone-50 rounded-lg bg-red-700 hover:bg-red-600 px-5 py-2 m-3">Back to {props.page}</button>
      </Link>
    </nav>
  );
}
