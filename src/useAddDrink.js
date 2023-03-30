import { useState } from 'react';
// custom hook for adding a drink to local storage 

export default function useAddDrink() {
  const [storage] = useState([]);
  const [change, setChange] = useState(true);

  function addDrink(drink) {
    storage.push(drink);
    localStorage.setItem("drinks", JSON.stringify(storage));
    setChange(!change);
  }

  return addDrink;
}


