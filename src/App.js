import logo from "./logo.svg";
import "./App.scss";
import Header from "./components/Header";
import Meme from "./components/Meme";
import React from "react";
import Counter from "./components/Counter";
import Star from "./components/Star";
import WindowTracker from "./components/WindowTracker";

function App() {
  const [contact, setContact] = React.useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (719) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: true,
  });
  let starIcon = contact.isFavorite ? "star-filled.png" : "star-empty.png";

  function toggleFavorite() {
    setContact((prevContact) => ({
      ...prevContact,
      isFavorite: !prevContact.isFavorite,
    }));
    console.log("button was clicked");
  }

  const [count, setCount] = React.useState(0);

  function add() {
    setCount((prevCount) => prevCount + 1);
  }
  function subtract() {
    setCount((prevCount) => prevCount - 1);
  }
  const [user, setuser] = React.useState("joe");

  const [show, setShow] = React.useState(true);

  return (
    <div className="">
      {/* <button className="btn--add--thing" onClick={addThing}>
        Add item
      </button> */}
      {/* {thingsElements} */}
      {/* {greeting} */}
      <Header user={user} />
      <Meme />

      <div className="counter">
        <button className="counter--plus" onClick={add}>
          +
        </button>
        <Counter number={count} />
        <button className="counter--plus" onClick={subtract}>
          -
        </button>
      </div>

      <main>
        <article className="card">
          <img src="/images/user.png" className="card--image" />
          <div className="card--info">
            <Star
              isFilled={contact.isFavorite}
              src={starIcon}
              handleClick={toggleFavorite}
            />
            <h2 className="card--name">
              {contact.firstName} {contact.lastName}
            </h2>
            <p className="card--contact">{contact.phone}</p>
            <p className="card--contact">{contact.email}</p>
          </div>
        </article>
      </main>

      <div className="container_tracker">
        {if(show)
          <WindowTracker />
        }
      </div>
    </div>
  );
}

export default App;
