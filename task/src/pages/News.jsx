import React, { useContext } from "react";
import { MyContext } from "../context/GlobalContext";
import "./../assets/css/news.css";
import { useNavigate } from "react-router-dom";
import { FaRegCalendarAlt } from "react-icons/fa";

const News = () => {
  const [newsList, setNewsList, mainUrl, apiKey] = useContext(MyContext);

  return (
    <div className="container">
      {newsList?.map((el) => (
        <div
          className="news-card row border flex-column flex-lg-row my-5"
          key={el.id}
        >
          <div className="col">
            <img
              className="news-card-image img-fluid rounded px-2 py-4"
              src={el.image}
              alt=""
            />
          </div>
          <div className="col d-flex flex-column align-items-start justify-content-center">
            <p className="news-title fs-5 my-3 my-lg-0 my-xxl-2 fw-bolder">
              {el.title}
            </p>
            <p className="fs-6 my-3 my-lg-0 my-xxl-2">{el.description}</p>
            <div className="d-flex align-items-center">
              <FaRegCalendarAlt />
              <p className="fs-6 my-3 ms-2">{el.date}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default News;
