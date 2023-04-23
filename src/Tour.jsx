import React, { useState } from "react";

const Tour = ({ id, image, info, name, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  //console.log(info.substring(0,200));
  return (
    <article className="single-tour">
      <img src={image} alt={name} className="img" />
      <span className="tour-price">${price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button
            className="info-btn"
            type="button"
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? "show less" : "read more"}
          </button>
        </p>
      </div>
      <button
        className="btn btn-block delete-btn"
        type="button"
        onClick={() => removeTour(id)}
      >
        not interested
      </button>
    </article>
  );
};

export default Tour;
