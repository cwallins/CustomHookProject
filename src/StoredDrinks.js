import React, { useState, useEffect } from 'react'
import Drink from './Drink';
import useRemoveDrink from './useRemoveDrink';


export default function StoredDrinks() {
  const [storage, setStorage] = useState([]);

  // use our custom hook to remove from local storage
  const removeDrink = useRemoveDrink(storage, setStorage);

  // instead of starting with localstorage.drink in the state we use
  // useEffect to retrieve the data from localstorage.drink
  useEffect(() => {
    const drinks = JSON.parse(localStorage.getItem('drinks')) || [];
    setStorage(drinks);
  }, []);

  // Instead of parsing storage multiple times or checking if it's
  // longer than one, we can render it conditionally in the return. 
  return (
    <React.Fragment>
      <div className="drink-container">
        {storage.length > 0 ? ( // conditional render 
          <ul className="list-group">
            {storage.map((drink) => (
              <Drink key={drink.id} item={drink} removeDrink={removeDrink} />
            ))}
          </ul>
        ) : ( // If storage is empty
          <div>No saved drinks</div>
        )}
      </div>
    </React.Fragment>
  );
}


