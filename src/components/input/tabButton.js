import React from "react";

import { TAB_PREFIX } from "../../utils/constants";
import "./input.css";

function TabButton(props) {
  const { id, updateQuerySelection, selectedQueryIndex } = props;

  return (
    <button
      className={`tab-button ${selectedQueryIndex === id ? "active" : ""}`}
      onClick={() => updateQuerySelection(id)}
    >
      {TAB_PREFIX} {id}
    </button>
  );
}

export default TabButton;
