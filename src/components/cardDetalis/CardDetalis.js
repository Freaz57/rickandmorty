import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchDataCards } from "../services/Services";
import "./cardDetalis.scss";

const CardDetalis = ({ setShowFilter }) => {
  const { id } = useParams();
  const [card, setCards] = useState(null);

  useEffect(() => {
    setShowFilter(false);
    return () => {
      setShowFilter(true);
    };
  }, [setShowFilter]);

  useEffect(() => {
    const fetchCardDetails = async () => {
      const response = await fetchDataCards(id);
      setCards(response);
    };

    fetchCardDetails();
  }, [id]);

  if (!card) {
    return <div className="spinner">Loading...</div>;
  }

  return (
    <div className="container">
      <div className="header">
        <Link to="/" className="back-link">
          Назад
        </Link>
      </div>
      <div className="content">
        <div className="card-details">
          <div className="card-details__image">
            <img src={card.image} alt="" />
          </div>
          <div className="card-details__info">
            <div className="card-details__name">
              ИМЯ: <br />
              {card.name}
            </div>
            <div className="card-details__gender">
              ПОЛ: <br />
              {card.gender}
            </div>
            <div className="card-details__origin">
              Место рождения: <br />
              {card.origin.name}
            </div>
            <div className="card-details__location">
              Место нахождения: <br />
              {card.location.name}
            </div>
            <div className="card-details__status">
              Статус: <br />
              {card.status}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetalis;
