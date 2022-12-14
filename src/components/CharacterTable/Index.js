import React from "react";
import { Link } from "react-router-dom";

export default function CharacterTable(props) {
  const colorDeadOrAlive = props.status === "Alive" ? "bg-lime-500" : "bg-red-700"
  return (
    <tr key={props.char_id}>
      <td className="border border-slate-500 bg-amber-100 text-center">
        {props.char_id}
      </td>
      <td className="border border-slate-500 bg-amber-200 text-center">
        {props.name}
      </td>
      <td className={`border border-slate-500 text-center text-stone-50 ${colorDeadOrAlive}`}>
        {props.status}
      </td>
      <td className="border border-slate-500 bg-amber-400 text-center py-2">
        <Link to={`/Characters/${props.char_id}`}>
          <button className="text-stone-50 rounded-lg bg-red-700 hover:bg-red-600 px-5 py-2">
            + info
          </button>
        </Link>
      </td>
    </tr>
  );
}
