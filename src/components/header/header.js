import React from "react";

import { NEW_QUERY, CLEAR_QUERY, RUN_QUERY } from "../../utils/constants";
import "./header.css";

function Header() {
  return (
    <div className="header-container">
      <button className="action-button">{NEW_QUERY}</button>
      <button className="action-button">{CLEAR_QUERY}</button>
      <button className="action-button primary-button">{RUN_QUERY}</button>
    </div>
  );
}

export default Header;
