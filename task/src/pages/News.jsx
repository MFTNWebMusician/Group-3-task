import React, { useContext } from "react";
import { MyContext } from "../context/GlobalContext";

const News = () => {
  const [newsList, setNewsList, mainUrl, apiKey] = useContext(MyContext);
  return (
    <div className="container">
      {newsList?.map((el) => (
        <div className="row flex-column flex-lg-row my-5" key={el.id}>
          <div className="col">
            <img className="img-fluid rounded" src={el.image} alt="" />
          </div>
          <div className="col d-flex flex-column align-items-start justify-content-center">
            <p className="fs-5 my-3 my-lg-0 my-xxl-2 fw-bolder">{el.title}</p>
            <p className="fs-6 my-3 my-lg-0 my-xxl-2">{el.description}</p>
            <p className="fs-6 my-3">{el.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default News;
