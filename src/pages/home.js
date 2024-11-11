import React, { useEffect, useState } from "react";
import Nav from "../components/nav";
import axios from "axios";
import houseImage from "../assets/img/house.jpg";
const Home = () => {
  const [houses, setHouses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const getHouseData = async () => {
    try {
      const response = await axios.get(
        "https://anapioficeandfire.com/api/houses/378"
      );
      setHouses(response.data);
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getHouseData();
  }, []);
  if (loading) return <p>Loading...</p>;
  if (errorMessage) return <p>{errorMessage}</p>;
  return (
    <>
      <Nav />
      <section className="text-center container-fluid">
        <div className="row">
          <div className="col-lg-12 col-md-12 mx-auto p-0">
            <img src={houseImage} className="w-100" alt="House" />
            <div class="alert alert-secondary block-alert" role="alert">
              List of houses with reach history
            </div>
          </div>
        </div>
      </section>
      <section className="text-center container py-5">
        <div className="row">
          <div className="col-lg-6 col-md-8 mx-auto">
            {houses ? (
              <div>
                <div className="col-md-12">
                  <h2 className="text-body-emphasis">{houses.name}</h2>
                  <ul className="list-unstyled ps-0">
                    <li>
                      <i className="bi bi-box-arrow-down-left text-danger"></i> <b>Titles</b>:
                      <>
                        <ul>
                          {houses.titles.map((title, i) => (
                            <li key={i}>{title}</li>
                          ))}
                        </ul>
                      </>
                    </li>
                    <li>
                      <i className="bi bi-house text-danger"></i> <b>Region</b>:{" "}
                      {houses.region}
                    </li>
                    <li>
                      <i className="bi bi-file-earmark-word text-danger"></i>{" "}
                      <b>Words</b>: {houses.words}
                    </li>
                    <li>
                      <i className="bi bi-window-plus text-danger"></i>{" "}
                      <b>Seats</b>: {houses.seats[0]}, {houses.seats[1]}
                    </li>
                    <li>
                      <i className="bi bi-geo text-danger"></i> <b>Founded</b>:{" "}
                      {houses.founded}
                    </li>
                    <li>
                      <i className="bi bi-lightning-charge-fill text-danger"></i>{" "}
                      <b>AncestralWeapons</b>: {houses.ancestralWeapons[0]} ,{" "}
                      {houses.ancestralWeapons[1]}
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <p>No house data available</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
