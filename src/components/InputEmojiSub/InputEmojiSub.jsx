/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const InputEmojiSub = ({
  addSub = "+",
  showEmoji = true,
  showAddSub,
  content = ".. / .. / ....",
  showSubtitle = true,
  emoji = "🗓",
  showPicture,
  subtitle = "Arrivée",
  state,
  style,
  emojiStyle,
  inputEmojiSubStyle,
  elementStyle,
}) => {
  return (
    <div className="input-emoji-sub" style={style}>
      {showEmoji && (
        <div className={`emoji state-0-${state}`} style={emojiStyle}>
          <div className="element">{emoji}</div>
        </div>
      )}

      <div className={`element-wrapper state-1-${state}`} style={inputEmojiSubStyle}>
        <p className="text-wrapper" style={elementStyle}>
          {content}
        </p>
      </div>
      {showSubtitle && (
        <div className="arriv-e-wrapper">
          <div className="arriv-e">{subtitle}</div>
        </div>
      )}
    </div>
  );
};

InputEmojiSub.propTypes = {
  addSub: PropTypes.string,
  showEmoji: PropTypes.bool,
  showAddSub: PropTypes.bool,
  content: PropTypes.string,
  showSubtitle: PropTypes.bool,
  emoji: PropTypes.string,
  showPicture: PropTypes.bool,
  subtitle: PropTypes.string,
  state: PropTypes.oneOf(["filled", "empty"]),
};
