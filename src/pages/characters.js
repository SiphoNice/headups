import React, { useEffect, useState } from "react";
import Nav from "../components/nav";
import axios from "axios";
import charactersImage from "../assets/img/characters.jpg";

const Characters = () => {
  const [characters, setCharacters] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const getCharactersData = async () => {
    try {
      const response = await axios.get(
        "https://anapioficeandfire.com/api/characters/"
      );
      setCharacters(response.data);
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getCharactersData();
  }, []);
  if (loading) return <p>Loading...</p>;
  if (errorMessage) return <p>{errorMessage}</p>;
  return (
    <>
      <Nav />
      <section className="text-center container-fluid">
        <div className="row">
          <div className="col-lg-12 col-md-12 mx-auto p-0">
            <img src={charactersImage} className="w-100" alt="characters" />
            <div className="alert alert-secondary block-alert" role="alert">
              List of Characters
            </div>
          </div>
        </div>
      </section>
      <section className="text-center container py-5">
        <div className="row">
          <div className="col-lg-12 col-md-12 mx-auto">
            <div className="row">
              {characters.map((character, i) => (
                <div className="col-md-3" key={i}>
                  <div className="card shadow mt-4">
                    <div className="card-body">
                      <b>
                        <i className="bi bi-person-fill-check"></i>
                      </b>{" "}
                      {character.name}
                      <br />
                      <b>
                        <i className="bi bi-person-dash-fill"></i>
                      </b>{" "}
                      {character.aliases}
                      <br />
                      <b>
                        <i className="bi bi-gender-ambiguous"></i>
                      </b>{" "}
                      {character.gender}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Characters;
