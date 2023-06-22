/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Catalogue2 } from "../../icons/Catalogue2";
import { RGlage21 } from "../../icons/RGlage21";
import { Roadmap2 } from "../../icons/Roadmap2";
import { UserActivity } from "../../icons/UserActivity";
import "./style.css";

export const TabBar = ({
  style,
  userActivityColor = "#3D5AF1",
  monFocusStyle,
  rGlage21Color = "#A0A0A0",
  paramTresStyle,
}) => {
  return (
    <div className="tab-bar" style={style}>
      <div className="div">
        <UserActivity
          color={userActivityColor}
          style={{
            height: "24px",
            minWidth: "24px",
            position: "relative",
          }}
        />
        <div className="mon-focus" style={monFocusStyle}>
          Mon Focus
        </div>
      </div>
      <div className="frame-2">
        <Roadmap2
          color="#A0A0A0"
          style={{
            height: "24px",
            minWidth: "24px",
            position: "relative",
          }}
        />
        <div className="vues">Vues</div>
      </div>
      <div className="frame-3">
        <Catalogue2
          color="#A0A0A0"
          style={{
            height: "24px",
            minWidth: "24px",
            position: "relative",
          }}
        />
        <div className="backlog">Backlog</div>
      </div>
      <div className="frame-4">
        <RGlage21
          color={rGlage21Color}
          style={{
            height: "24px",
            minWidth: "24px",
            position: "relative",
          }}
        />
        <div className="param-tres" style={paramTresStyle}>
          Paramètres
        </div>
      </div>
    </div>
  );
};

TabBar.propTypes = {
  userActivityColor: PropTypes.string,
  rGlage21Color: PropTypes.string,
};
