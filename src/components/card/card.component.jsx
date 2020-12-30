import React from 'react';

import './card.styles.css';

export const Card = (props) => {
  return (
    <div className="card-container">
      <img src={`https://robohash.org/${props.id}?set=set5`} alt="" />
      <h2 id={props.id}>{props.name}</h2>
      <p>{props.email}</p>
    </div>
  );
};
