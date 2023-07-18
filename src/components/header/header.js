import React from "react";

import {
  NEW_QUERY,
  CLEAR_QUERY,
  RUN_QUERY,
  UPDATE_LAYOUT,
} from "../../utils/constants";
import "./header.css";

function Header(props) {
  const { updateLayout, selectedLayout } = props;
  return (
    <div className="header-container">
      <button className="action-button">{NEW_QUERY}</button>
      <button className="action-button">{CLEAR_QUERY}</button>
      <button className="action-button" onClick={updateLayout}>
        {UPDATE_LAYOUT} {selectedLayout}
      </button>
      <button className="action-button primary-button">{RUN_QUERY}</button>
    </div>
  );
}

export default Header;
