import React from "react";

const BotProfile = ({ bot, onAddToArmy, onRelease }) => {
  return (
    <div className="bot-profile">
      <h3>{bot.name}</h3>
      <p>{bot.description}</p>
      <button onClick={() => onAddToArmy(bot)}>Add to Army</button>
      <button onClick={() => onRelease(bot)}>Release</button>
    </div>
  );
};

export default BotProfile;
