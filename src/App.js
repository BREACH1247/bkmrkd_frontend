import React from "react";
import Landing from "./pages/Landing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Library from "./pages/Library";
import Bookshelf from "./pages/Bookshelf";
import BookPage from "./pages/Bookpage";
import Account from "./pages/Account";
import Cookies from 'js-cookie';

const App = () => {
  const PrivateRoute = ({ element }) => {
    return Cookies.get('jwt') ? element : window.location.href = "/account"
  };
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={<PrivateRoute element={<Landing />} />}
        />
        <Route path="/account" element={<Account />} />
        <Route
          path="/library"
          element={<PrivateRoute element={<Library />} />}
        />
        <Route
          path="/bookshelf"
          element={<PrivateRoute element={<Bookshelf />} />}
        />
        <Route
          path="/bookshelf/:bookshelfid"
          element={<PrivateRoute element={<Bookshelf />} />}
        />
        <Route
          path="/books/:bookId"
          element={<PrivateRoute element={<BookPage />} />}
        />
        <Route path="*" element={() => "ERROR 404 NOT FOUND"} />
      </Routes>
    </Router>
  );
};

export default App;
