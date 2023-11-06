import React from "react";


const BotCollection = ({ bots, onList }) => {
  return (
    <div className="bot-collection">
      <div className="card">
      {bots.map((bot) => (
        <div className="card-wrapper" key={bot.id} onClick = {()=>onList(bot)}>
          <div className="bot-card">
            <img className="avatar" src={bot.avatar_url} alt ={bot.name} onClick = {()=>onList(bot)}/>
              <h2>{bot.name}</h2>
              <p>Health; {bot.health}</p>
              <p>Class: {bot.class}</p>
              <p>Created: {bot.created_at}</p>
              </div>
              </div>
              ))}
              </div>
              

              </div>
              );
            }
  


export default BotCollection;
