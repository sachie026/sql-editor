import React from "react";

function OutputTableHeader(props) {
  const { tableKeys } = props;

  return (
    <tr>
      {tableKeys.map((key, keyIndex) => {
        return <th key={keyIndex}>{key}</th>;
      })}
    </tr>
  );
}

export default OutputTableHeader;
