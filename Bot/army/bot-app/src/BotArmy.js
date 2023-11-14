import React from "react";
import "./styles/army.css"; 

const BotArmy = ({ army, onRelease }) => {
  const handleReleaseClick = (bot) => {
    onRelease(bot);
  };

  return (
    <div className="my-army">
      {army.map((bot) => (
        <div className="card-wrapper" key={bot.id}>
          <div className="bot-card">
            <img className="avatar" src={bot.avatar_url} alt={bot.name} />
            <h2>{bot.name}</h2>
            <p className="health">Health: {bot.health}</p>
            <p className="bot-damage">Damage: {bot.damage}</p>
            <p className="created-at">Created: {bot.created_at}</p>
            <button
              className="delete-button"
              onClick={() => handleReleaseClick(bot)}
            >
              Delete
            </button>
          </div> 
        </div>
      ))}
    </div>
  );
};

export default BotArmy;
