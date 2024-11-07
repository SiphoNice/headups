import React, { useEffect, useState } from "react";
import Nav from "../components/nav";
import axios from "axios";
const Home = () => {
  const [houses, setHouses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setErrorMessage] = useState(null);

  useEffect(() => {
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
    getHouseData();
  }, []);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  return (
    <>
      <Nav />
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Album example</h1>
            <p className="lead text-body-secondary">
              Something short and leading about the collection below—its
              contents, the creator, etc. Make it short and sweet, but not too
              short so folks don’t simply skip over it entirely.
            </p>
            <p>
              <a href="#" className="btn btn-danger my-2 fw-bold">
                Click here to view the books
              </a>
            </p>
          </div>
        </div>
      </section>
      <section className=" text-center container">
        <div className="row">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">List here</h1>
            {houses.map((house, i) => (
              <p key={i}>{house.name}</p>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
