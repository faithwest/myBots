import React from "react";
import BotProfile from "./BotProfile";

const BotCollection = ({ botProfiles, onAddToArmy, onRelease }) => {
  return (
    <div className="bot-collection">
      {botProfiles.map((bot) => (
        <BotProfile
          key={bot.id}
          bot={bot}
          onAddToArmy={onAddToArmy}
          onRelease={onRelease}
        />
      ))}
    </div>
  );
};

export default BotCollection;
