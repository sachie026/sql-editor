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

  /*
    Instead of new, clear, layout, run label we can use icons as well
  */

  return (
    <div className="header-container">
      <button className="action-button" aria-label={NEW_QUERY}>
        {NEW_QUERY}
      </button>
      <button className="action-button" aria-label={CLEAR_QUERY}>
        {CLEAR_QUERY}
      </button>
      <button
        className="action-button"
        aria-label={UPDATE_LAYOUT}
        onClick={updateLayout}
      >
        {UPDATE_LAYOUT} {selectedLayout}
      </button>
      <button className="action-button primary-button" aria-label={RUN_QUERY}>
        {RUN_QUERY}
      </button>
    </div>
  );
}

export default Header;
