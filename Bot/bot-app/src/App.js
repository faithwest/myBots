// import React, { useState, useEffect } from "react";
// import BotCollection from "./BotCollection";
// import BotArmy from "./BotArmy";

// function App() {
//   const [bots, setBots] = useState([]);
//   const [listedBots, setListedBots] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:8000/bots") 
//       .then((res) => res.json())
//       .then((data) => setBots(data));
//   }, []);

//   const listedBot = (bot) => { 
//     if (!listedBots.some((listedBot) => listedBot.id === bot.id)) {
//       setListedBots([...listedBots, bot]);
//     }
//   };

//   const handleRelease = (botId) => {
//     setListedBots(listedBots.filter((bot) =>listedBot.id !== botId)); 
    
//   };

//   return ( 
//     <div className="container">
//       <BotArmy army={listedBots} onRelease={handleRelease} />
//       <BotCollection bots={bots} onList={listedBot} />
//       </div>

//   );
// }

// export default App;
import React, { useState, useEffect } from "react";
import BotCollection from "./BotCollection";
import BotArmy from "./BotArmy";

function App() {
  const [bots, setBots] = useState([]);
  const [listedBots, setListedBots] = useState(new Set());

  useEffect(() => {
    fetch("http://localhost:8000/bots")
      .then((res) => res.json())
      .then((data) => setBots(data));
  }, []);

  const listedBot = (bot) => {
    setListedBots(new Set([...listedBots, bot]));
  };

  const handleRelease = (bot) => {
    setListedBots((prevListedBots) => {
      const updatedListedBots = new Set(prevListedBots);
      updatedListedBots.delete(bot);
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
