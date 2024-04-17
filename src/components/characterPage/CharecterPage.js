import { useState, useEffect } from "react";
import Modal from "../modal/Modal";
import { fetchDataAll } from "../services/Services";

import "./characterPage.scss";

const CardList = ({ filters }) => {
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [modal, setModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const [loadedCards, setLoadedCards] = useState(10);

  useEffect(() => {
    const fetchFilteredData = async () => {
      const response = await fetchDataAll(filters);
      setCards(response.results);
    };

    fetchFilteredData();
  }, [filters]);

  const handleLoadMore = () => {
    setLoadedCards((prevCount) => prevCount + 5);
  };

  const openModal = (card) => {
    setSelectedCard(card);
    setModal(true);
  };

  const closeModal = () => {
    setSelectedCard(null);
    setModal(false);
  };

  const filteredCards = cards.filter((card) => {
    const { status, species, gender } = filters;
    return (
      (!status || card.status === status) &&
      (!species || card.species === species) &&
      (!gender || card.gender === gender)
    );
  });

  const currentCard = filteredCards.slice(0, loadedCards);

  return (
    <div className="container">
      <div className="card--inner">
        {currentCard.map((card) => (
          <div className="card" key={card.id} onClick={() => openModal(card)}>
            <div className="card-images">
              <img src={card.image} alt="" />
            </div>
            <div className="card-info">
              <h2 className="card-name">{card.name}</h2>
              <h3 className="card-status">{card.status}</h3>
            </div>
          </div>
        ))}
      </div>
      {filteredCards.length > loadedCards && (
        <button className="load-more" onClick={handleLoadMore}>
          Загрузить еще
        </button>
      )}
      {modal && <Modal card={selectedCard} onClose={closeModal} />}
    </div>
  );
};

export default CardList;
