import React from "react";

import { INPUT_PLACEHOLDER } from "../../utils/constants";
import "./input.css";

function InputBox(props) {
  const { queries, selectedQueryIndex } = props;

  return (
    <div>
      <textarea
        className="input-area "
        rows="10"
        value={queries[selectedQueryIndex]}
        placeholder={INPUT_PLACEHOLDER}
      />
    </div>
  );
}

export default InputBox;
