import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
import axios from "./axios";

function TinderCards() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get("/tinder/cards");

      setPeople(data);
    }

    fetchData();
  }, []);

  function swiped(direction, nameToDelete) {
    console.log(`removing ${nameToDelete}`);
  }

  function outOfFrame(name) {
    console.log(`${name} left the screen`);
  }

  return (
    <div className="tinder-card">
      <div className="tinder-container">
        {people.map(({ name, imageUrl }) => (
          <TinderCard
            className="swipe"
            key={name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => {
              swiped(dir, name);
            }}
            onCardLeftScreen={() => outOfFrame(name)}
          >
            <div
              className="card"
              style={{ backgroundImage: `url(${imageUrl})` }}
            >
              <h3>{name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
