import { useEffect, useState } from 'react';
// custom hook for adding a drink to local storage 

export default function useAddDrink() {
  const [storage, setStorage] = useState([]);
  const [change, setChange] = useState(true);

  useEffect(() => {
    const drinks = JSON.parse(localStorage.getItem('drinks')) || [];
    setStorage(drinks);
  }, []);

  function addDrink(drink) {
    storage.push(drink);
    localStorage.setItem("drinks", JSON.stringify(storage));
    setChange(!change);
  }

  return addDrink;
}


