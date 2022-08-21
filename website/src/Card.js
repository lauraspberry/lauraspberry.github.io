import React from 'react';
import {
  Link
} from "react-router-dom";
import './Card.css';

function Card(props) {
    return (
      <div className="work-card-wrapper">
        <Link to={props.link} className="work-card-link">
      <div className="card-photo-wrapper">
      <img className="card-photo" src={props.image} alt="experience"/>
      </div>
      <div className="work-card-text">
          <div className="work-card-title">{props.title}</div>
          <div className="work-card-description">{props.description}</div>
      </div>
      </Link>
      </div>
    );
}

export default Card;