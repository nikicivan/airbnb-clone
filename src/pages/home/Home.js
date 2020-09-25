import React, { useEffect, useState } from "react";
import Banner from "../../components/banner/Banner";
import "./home.css";

import { db } from "../../firebase";

import Card from "../../components/card/Card";

const Home = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    if (cards) {
      db.collection("cards").orderBy("order", "asc").onSnapshot((snapshot) => {
        setCards(snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        })));
      });
    } else {
      setCards([]);
    }
  }, [cards]);

  return (
    <div className="home">
      <Banner />
      <div className="home__section">
        {cards?.map((card) => (
          <Card
            key={card.id}
            card={card}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
