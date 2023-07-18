import React from "react";

import TabButton from "./tabButton";
import InputBox from "./inputBox";

import { INPUT_LABEL } from "../../utils/constants";
import "./input.css";

function Input(props) {
  const { queries, selectedQueryIndex, updateQuerySelection } = props;

  return (
    <div className="input-container">
      <div className="input-label">{INPUT_LABEL}</div>
      <div>
        {queries.map((_query, id) => {
          return (
            <TabButton
              key={id}
              updateQuerySelection={updateQuerySelection}
              id={id}
              selectedQueryIndex={selectedQueryIndex}
            />
          );
        })}
      </div>
      <InputBox queries={queries} selectedQueryIndex={selectedQueryIndex} />
    </div>
  );
}

export default Input;
