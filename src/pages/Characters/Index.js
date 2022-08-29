import React, { useEffect, useState } from "react";
import api from "../../services/api";
import CharacterTable from "../../components/CharacterTable/Index";

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;

  const filteredSearch =
    search.length > 0
      ? characters.filter((character) =>
          character.name.toLowerCase().includes(search.toLowerCase())
        )
      : [];

  const pages = Math.ceil(characters.length / itemsPerPage);

  const startIndex = currentPage * itemsPerPage;

  const endIndex = startIndex + itemsPerPage;

  const currentItens = characters.slice(startIndex, endIndex);

  useEffect(() => {
    try {
      api.get("/characters").then((response) => {
        setCharacters(response.data);
      });
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  return (
    <div className="flex flex-col place-content-center items-center justify-center my-5">
      <input
        type="text"
        placeholder="Search..."
        className="my-5 py-5 px-10 rounded-lg outline-none"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        autoComplete={characters}
      />
      <table className="w-full md:w-1/2">
        <thead>
          {characters.length !== 0 && (
            <tr>
              <th className="border-collapse border border-slate-500 bg-amber-100 p-1">
                ID
              </th>
              <th className="border-collapse border border-slate-500 bg-amber-200 p-1">
                Name
              </th>
              <th className="border-collapse border border-slate-500 bg-amber-300 p-1">
                Nickname
              </th>
              <th className="border-collapse border border-slate-500 bg-amber-400 p-1">
                More data
              </th>
            </tr>
          )}
        </thead>
        {search.length > 0 ? (
          <tbody>
            {filteredSearch.map((character) => {
              return (
                <CharacterTable
                  char_id={character.char_id}
                  name={character.name}
                  nickname={character.nickname}
                />
              );
            })}
          </tbody>
        ) : (
          <tbody>
            {currentItens.map((character) => {
              return (
                <CharacterTable
                  char_id={character.char_id}
                  name={character.name}
                  nickname={character.nickname}
                />
              );
            })}
          </tbody>
        )}
      </table>
      {characters.length <= 0 && (
        <h1 className="text-3xl font-bold text-stone-50 my-5">
          Loading characters
        </h1>
      )}
      <div>
        {Array.from(Array(pages), (item, index) => {
          return (
            <button
              key={index}
              className="text-stone-50 rounded-lg bg-red-700 hover:bg-red-600 px-5 py-2 m-3"
              value={index}
              onClick={(e) => setCurrentPage(e.target.value)}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
    </div>
  );
}
