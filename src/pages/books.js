import React, { useEffect, useState } from "react";
import Nav from "../components/nav";
import axios from "axios";
import booksImage from "../assets/img/books.jpg";

const Books = () => {
  const [books, setBooks] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const getBooksData = async () => {
    try {
      const response = await axios.get(
        "https://anapioficeandfire.com/api/books"
      );
      setBooks(response.data);
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getBooksData();
  }, []);
  if (loading) return <p>Loading...</p>;
  if (errorMessage) return <p>{errorMessage}</p>;
  return (
    <>
      <>
        <Nav />
        <section className="text-center container-fluid">
          <div className="row">
            <div className="col-lg-12 col-md-12 mx-auto p-0">
              <img src={booksImage} className="w-100" alt="Books" />
              <div class="alert alert-secondary block-alert" role="alert">
                List of Books with reach history
              </div>
            </div>
          </div>
        </section>
        <section className="text-center container py-5">
          <div className="row">
            <div className="col-lg-12 col-md-12 mx-auto">
              <div className="row">
                {books.map((book, i) => (
                  <>
                    <div className="col-md-3">
                      <div className="card shadow mt-4">
                        <div className="card-body">
                          <b>Title:</b> {book.name}
                          <br />
                          <b>Isbn:</b> {book.isbn}
                          <br />
                          <b>Publisher:</b> {book.publisher}
                          <br />
                          <b>Country:</b> {book.country}
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        </section>
      </>
    </>
  );
};

export default Books;
