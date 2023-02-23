import { useEffect, useState } from "react";
import "./Rating.css";

export const Rating = (props) => {
  const { rating } = props;

  const [stars, setStars] = useState([]);
  useEffect(() => {
    //procedmos a pintar las estrellas, basado en su puntuacion, si es entero pintamos estrellas completas, si es decimal pintamos media estrella y el resto de estrellas vacias
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<i className="fa fa-star"></i>);
      } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
        stars.push(<i className="fa fa-star-half-o"></i>);
      } else {
        stars.push(<i className="fa fa-star-o"></i>);
      }
    }
    setStars(stars);
  }, [rating]);

  return (
    <>
      <div className="star-rating">
        <ul className="list-inline">
          {stars.map((star, index) => (
            <li className="list-inline-item" key={index}>
              {star}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
