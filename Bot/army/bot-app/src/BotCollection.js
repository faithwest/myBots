import React from "react";
import "./styles/collection.css"

const BotCollection = ({ bots, onList }) => {
  return (
    <div className="bot-collection">
      <div className="card">
      {bots.map((bot) => (
        <div className="card-wrapper" key={bot.id} onClick = {()=>onList(bot)}>
          <div className="bot-card">
            <img className="avatar" src={bot.avatar_url} alt ={bot.name} onClick = {()=>onList(bot)}/>
              <h2>{bot.name}</h2>
              <p>Id: {bot.id}</p>
              <p>Created: {bot.created_at}</p>
              <p>Health; {bot.health}</p>
              <p>Damage: {bot.damage}</p>
              <p>Armor: {bot.armor}</p>

              <button
                className="list-button"
                onClick={() => onList(bot)}
              >
                X
              </button>
              </div>
              </div>
              ))}
              </div>
              

              </div>
              );
            }
  


export default BotCollection;
