import { useState } from "react";
import heartFilled from "../../svgs/heartFilled.svg";
import heartOutlined from "../../svgs/heartOutlined.svg";
import "./Card.css";

function Card({ name, phone, email, image, isFavourite }) {
  const [isFavoured, setIsFavoured] = useState(isFavourite);

  function toggleFavoured() {
    setIsFavoured(!isFavoured);
  }

  return (
    <div className="card">
      <div className="card-header">
        <img src={image.url} alt={image.alt} className="card-img" />
        <button className="heart" onClick={toggleFavoured}>
          {isFavoured ? (
            <img src={heartFilled} alt="filled heart" />
          ) : (
            <img src={heartOutlined} alt="outlined heart" />
          )}
        </button>
      </div>
      <div className="card-content">
        <h3>{name}</h3>
        <p>{phone}</p>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;
