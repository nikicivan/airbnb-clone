import React from "react";
import "./searchResult.css";

import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarIcon from "@material-ui/icons/Star";

const SearchResult = (
  { result },
) => {
  return (
    <div className="searchResult">
      <img src={result.data.image} alt={result.data.title} />
      <FavoriteBorderIcon className="searchResult__heart" />
      <div className="searchResult__info">
        <div className="searchResult__infoTop">
          <p>{result.data.location}</p>
          <h3>{result.data.title}</h3>
          <p>____</p>
          <p>{result.data.description}</p>
        </div>
        <div className="searchResult__infoBottom">
          <div className="searchResult__stars">
            <StarIcon className="searchResult__star" />
            <p><strong>{result.data.star}</strong></p>
          </div>
          <div className="searchResult__price">
            <h2>{result.data.price}</h2>
            <p>{result.data.total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
