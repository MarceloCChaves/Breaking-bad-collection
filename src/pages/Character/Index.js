import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import { Link } from "react-router-dom";

export default function Character() {
  const [character, setCharacter] = useState([]);
  const { id } = useParams();

  const characterOcupations = character.map((el) => {
    return `${el.occupation} \n`;
  });

  const characterAppears = character.map((el) => {
    return `${el.appearance} seasons`
  })

  useEffect(() => {
    try {
      api.get(`characters/${id}`).then((response) => {
        setCharacter(response.data);
      });
    } catch (error) {
      console.log(error.message);
    }
  }, [id]);

  return (
    <div className="flex flex-col place-content-center items-center justify-center my-5">
      {character.length <= 0 ? (
        <h1 className="text-3xl font-bold text-stone-50">
          Loading character
        </h1>
      ) : (
        <>
          <Link to="/Characters">
            <button className="text-stone-50 rounded-lg bg-red-700 hover:bg-red-600 px-5 py-2 m-3">Voltar</button>
          </Link>
          {character.map((character) => {
            return (
              <div
                className="flex justify-center flex-col border border-slate-500 rounded-lg bg-white w-full md:w-1/2 h-screen text-center"
                key={character.char_id}
              >
                <img
                  src={character.img}
                  alt={character.name}
                  className="w-72 mx-auto my-5"
                  loading="lazy"
                />
                <strong>{character.name}</strong>
                <p>Occupation: {characterOcupations}</p>
                <p>Nickname: {character.nickname}</p>
                <p>Birthday: {character.birthday}</p>
                <p>Status: {character.status}</p>
                <p>Appearance: {characterAppears}</p>
                <p>Portrayed by: {character.portrayed}</p>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}
