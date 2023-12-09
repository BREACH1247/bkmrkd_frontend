import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import lock from "../../assets/lock.png";
import axios from "axios";
import Cookies from "js-cookie";

const Bookshelf = () => {
  const [data, setData] = useState([]);
  let stacks = [];
  useEffect(() => {
    const fetchData = async () => {
      try {
        let token = Cookies.get("jwt");
        let config = {
          method: "get",
          maxBodyLength: Infinity,
          url: `http://43.205.231.10:4000/api/bookshelves/owner`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const response = await axios(config);
        setData(response.data.data.bookshelves);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  for (let i = 0; i < data.length; i++) {
    let temp = [];
    for (let j = 0; j < data[i].books.length; j++) {
      temp.push({
        bookshelf_id: data[i].bookshelf_id,
        bookshelf_name: data[i].bookshelf_name,
        bookshelf_type: data[i].bookshelf_type,
        cover_page: data[i].books[j].cover_page,
        book_id: data[i].books[j].book_id,
      });
    }
    stacks.push(temp);
  }

  console.log(stacks);

  const StackText = ({ bookshelf, bookCount, isLocked }) => (
    <div
      className="stack-text"
      style={{
        position: "absolute",
        top: "165px",
        textAlign: "left",
        zIndex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        paddingRight: "10px",
      }}
    >
      <div>
        <h2
          className="text-black"
          style={{
            fontSize: "16px",
            fontFamily: "'Roboto Mono', monospace",
            fontWeight: 700,
          }}
        >
          {bookshelf}
        </h2>
        <p
          className=" text-gray-600"
          style={{ fontSize: "14px", fontWeight: 600 }}
        >
          {bookCount} books
        </p>
      </div>
      {isLocked && (
        <img
          src={lock}
          alt="Locked"
          style={{ width: "15px", height: "15px" }}
        />
      )}
    </div>
  );

  return (
    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-x-10 gap-y-6 pb-2">
      {stacks.map((stack) => (
        <Link
          to={`/bookshelf/${stack[0].bookshelf_id}`}
          key={stack[0].bookshelf_id}
          className="card-link"
          style={{ textDecoration: "none" }}
        >
          <div
            className="relative"
            style={{
              width: "100%",
              height: "204px",
              position: "relative",
              cursor: "pointer",
              display: "flex",
              marginRight: "100px",
            }}
          >
            <div style={{ position: "relative" }}>
              {stack.map((card, index) => (
                <div
                  className="max-w-xs"
                  key={index}
                  style={{
                    position: "absolute",
                    top: "0",
                    width: "120px",
                    height: "160px",
                    left: `${index * 70}px`,
                    zIndex: 100 - index,
                  }}
                >
                  <div className="">
                    <img
                      src={card.cover_page}
                      alt="Card"
                      className="w-full h-full object-cover rounded-lg"
                      style={{ width: "120px", height: "160px" }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <StackText
              bookshelf={stack[0].bookshelf_name}
              bookCount={stack.length}
              isLocked={stack[0].bookshelf_type === "PRIVATE"}
            />
          </div>
        </Link>
      ))}
    </div>
  );
};


export default Bookshelf;
