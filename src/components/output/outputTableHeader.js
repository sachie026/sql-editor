import React from "react";

import "./output.css";

function OutputTableHeader(props) {
  const { tableKeys } = props;

  return (
    <thead>
      <tr>
        {tableKeys.map((key, keyIndex) => {
          return (
            <th key={keyIndex} className="table-header-label">
              {key}
            </th>
          );
        })}
      </tr>
    </thead>
  );
}

export default OutputTableHeader;
