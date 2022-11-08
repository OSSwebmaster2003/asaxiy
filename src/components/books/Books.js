import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooklist } from "../../redux/action";
import BookItem from "./BookItem";

function Books(props) {
  const dispatch = useDispatch();
  const { booklist } = useSelector((state) => state);
  useEffect(() => {
    fetch("https://api.itbook.store/1.0/new")
      .then((res) => res.json())
      .then((data) => dispatch(fetchBooklist(data.books)))
      .catch((err) => console.log(err));
    // eslint-disable-next-line
  }, []);
  return (
    <div className="books">
      <ul className="book_list">
        {booklist
          ? booklist.map(({ isbn13, ...props }) => (
              <BookItem key={isbn13} {...props} />
            ))
          : "Loading"}
      </ul>
    </div>
  );
}

export default Books;
