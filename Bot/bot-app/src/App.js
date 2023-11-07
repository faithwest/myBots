import React, { useState, useEffect } from "react";
import BotCollection from "./BotCollection";
import BotArmy from "./BotArmy";

function App() {
  const [bots, setBots] = useState([]);
  const [listedBots, setListedBots] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/bots")
      .then((res) => res.json())
      .then((data) => setBots(data));
  }, [bots]);

  const listedBot = (bot) => {
    console.log(bot);
   for(let b of listedBots){
      if(b.id===bot.id)return
   }
    setListedBots([...listedBots, bot])
  };

  const handleRelease = (bot) => {
    console.log(bot.id)
    setListedBots((prevListedBots) => {
      const updatedListedBots = new Set(prevListedBots);
      updatedListedBots.delete(bot);
      console.log(updatedListedBots);
      return updatedListedBots;
    });


    fetch(`http://localhost:8000/bots/${bot.id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .catch((error) => console.error('Error deleting bot:', error));
  };

  return (
    <div className="container">
      <h1>Welcome To My App</h1>
      <BotArmy army={[...listedBots]} onRelease={handleRelease} />
      <BotCollection bots={bots} onList={listedBot} />
      
    </div>
  );
}

export default App;
