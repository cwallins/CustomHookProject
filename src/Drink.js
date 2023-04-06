import React from "react";

export default function Drink(props) {

  // Returns a button element that can either add or remove the drink item from the localStorage
  function addOrDelBtn(id) {
    // Load the drinks from localStorage, or create an empty array if it doesn't exist.
    const storage = JSON.parse(localStorage.getItem("drinks")) || [];

    // Check if the current drink item is already in localStorage.
    const isInStorage = storage.some((drink) => drink.id === id);

    // Determine the class name and text for the button.
    const buttonClassName = `btn btn-sm ${
      isInStorage ? "btn-danger" : "btn-success"
    } align-self-start`;

    const buttonText = isInStorage ? "Remove" : "Add";

    // Click handler for the button, depending on whether the drink is in localStorage or not.
    const handleClick = () =>
      isInStorage ? props.removeDrink(props.item.id) : props.addDrink(props.item);

    // Return the button element 
    return (
      <button className={buttonClassName} onClick={handleClick}>
        {buttonText}
      </button>
    );
  }


  return (
    <React.Fragment>
      <li className="list-group-item drink-list-item">
        <img
          src={props.item.img}
          alt={"Picture of " + props.item.name}
          className="rounded"
        ></img>
        <div className="drink-info">
          <span>
            <b>
              <p>{props.item.name}</p>
            </b>
          </span>
          <div>
            <b>Ingredients: </b>
            {props.item.ingredients.map((ingredient, i) => (
              <span key={i}>{(i ? ", " : "") + ingredient}</span>
            ))}
          </div>
          <div>
            <b>
              <p className="mb-0">Instructions:</p>
            </b>
            {props.item.instructions}
          </div>
        </div>
        {addOrDelBtn(props.item.id)}
      </li>
    </React.Fragment>
  );
}
