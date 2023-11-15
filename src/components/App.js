import React , { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [searchText , setSearch] = useState("")
  const [listings , setlistings] = useState([])

  useEffect(()=>{
    fetch(" http://localhost:6001/listings")
    .then((r) => r.json())
    .then((data)=> setlistings(data));
  }, []);

  function handleDelete(id){
    fetch(`http://localhost:6001/listings/${id}`, {
        method: "DELETE",
      })
        .then((r) => r.json())
        .then(() => {
          const updatedListings = listings.filter((l) => l.id !== id);
          setlistings(updatedListings);
        });
  }

  const visibileListings= listings.filter((list)=>list.description.toLowerCase().includes(searchText))

  return (
    <div className="app">
      <Header search={searchText} onSearchChange={setSearch}/>
      <ListingsContainer listings={visibileListings} onDelete={handleDelete}/>
    </div>
  );
}

export default App;
