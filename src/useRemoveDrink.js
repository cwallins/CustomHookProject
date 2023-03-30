import { useCallback } from 'react';
// custom hook for removing a drink from local storage 

export default function useRemoveDrink(storage, setStorage) {
  const removeDrink = useCallback((id) => {
    const newDrinksList = storage.filter((drink) => drink.id !== id);

    localStorage.setItem('drinks', JSON.stringify(newDrinksList));
    setStorage(newDrinksList);
  }, [storage, setStorage]);

  return removeDrink;

}
