import React from "react";
import { Link } from "react-router-dom";
import "./modal.scss";

function Modal({ card, onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={onClose}>
            &times;
          </span>
          <div className="modal-info">
            <h2 className="name">{card.name}</h2>

            <Link to={`/card/${card.id}`}>
              <button className="more">Подробнее</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
