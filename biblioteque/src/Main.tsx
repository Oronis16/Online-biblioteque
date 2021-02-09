import React, { useState, useEffect } from "react";
import "./style.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Login } from "./Login";
import { Home } from "./Home";

interface Book {
  title: string;
  image: string;
  writer: string;
  country: string;
  genre: string;
  publication: string;
  plot: string;
  state: boolean;
}

export const MainPage = () => {
  const [books, setBooks] = useState<Book[]>();

  useEffect(() => {
    fetch("books.json")
      .then((response) => response.json())
      .then((books) => setBooks(books));
  }, []);

  const handleClick = (book) => {
    console.log("clicked");
    buttonChange(book);
  };

  const buttonChange = (book) => {
    const newBooks = books?.map((book) => book);
    const _book = newBooks?.find(({ title }) => title === book.title);
    if (_book) {
      if (_book.state === true) {
        _book.state = false;
      }
      console.log(newBooks);
      setBooks(newBooks);
    }
  };

  return (
    <div>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/home">
              <Home />
              <h1>Online Biblioteque</h1>
              <div>
                {books &&
                  books.map((book) => {
                    return (
                      <>
                        <div className="container">
                          <div className="bookCard">
                            <div className="rowData">
                              <div className="imgbox">
                                <img
                                  src={book.image}
                                  alt="cover"
                                  width="300vw"
                                  height="500vh"
                                />
                              </div>
                              <div className="btn-box">
                                <div>
                                  <h2>{book.title}</h2>
                                  <ul>
                                    <li>Writer: {book.writer}</li>
                                    <li>Country: {book.country}</li>
                                    <li>Genre: {book.genre}</li>
                                    <li>Publication: {book.publication}</li>
                                    <li>Plot: {book.plot}</li>
                                  </ul>
                                </div>
                                <button
                                  onClick={(e) => handleClick(book)}
                                  disabled={book.state ? false : true}
                                >
                                  Loan
                                </button>
                                <p>
                                  {book.state ? "In Stock" : "Out of Stock"}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  })}
              </div>
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};
