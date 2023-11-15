import React , { useState } from "react";

function ListingCard({ listing , onDeleteClick}) {
  const { id, description, image, location } = listing;
  const [starred , setStarred] = useState(false)

  function handleDelete(){
    onDeleteClick(id)
  }
  function handleStarClick(){
    setStarred(!starred)
  }
  
  return (
    <li className="card" key={id}>
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {starred===true ? (
          <button className="emoji-button favorite active" onClick={handleStarClick}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleStarClick}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete"  onClick={handleDelete}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
