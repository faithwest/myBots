import React from "react";
import "./styles/army.css";


const BotArmy = ({ army, onRelease }) => {
  return (
    <div className="my-army">
      {army.map((bot) => (
        <div className="card-wrapper" key={bot.id} onClick = {()=>onRelease(bot.id)}>
        <div className="bot-card">
          <img className="avatar" src={bot.avatar_url} alt ={bot.name} />
            <h2>{bot.name}</h2>
            <p>Health; {bot.health}</p>
            <p>Class: {bot.class}</p>
            <p>Created: {bot.created_at}</p>
            </div>
            </div>
      ))}
    </div>
  );
};

export default BotArmy;
