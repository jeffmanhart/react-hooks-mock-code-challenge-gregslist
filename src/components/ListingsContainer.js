import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, onDelete}) {

  return (
    <main>
      <ul className="cards">
        {listings.map((l)=>
        <ListingCard 
          key={l.id}
          listing={l}
          onDeleteClick={onDelete}
        />
        )}
      </ul>
    </main>
  );
}

export default ListingsContainer;
