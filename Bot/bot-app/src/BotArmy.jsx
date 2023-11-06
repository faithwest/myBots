// src/components/YourBotArmy.js
import React from "react";

const BotArmy = ({ army, onDischarge }) => {
  return (
    <div className="my-army">
      <h2>Your Bot Army</h2>
      {army.map((bot) => (
        <div key={bot.id} className="army-bot">
          <h3>{bot.name}</h3>
          <button onClick={() => onDischarge(bot)}>Discharge</button>
        </div>
      ))}
    </div>
  );
};

export default BotArmy;
