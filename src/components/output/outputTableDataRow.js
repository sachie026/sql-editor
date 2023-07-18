import React from "react";

import "./output.css";

function OutputTableDataRow(props) {
  const { tableKeys, rowData, rowIndex } = props;

  return (
    <tr>
      {tableKeys.map((key, keyIndex) => {
        return (
          <td className="table-cell" key={`td-${rowIndex}-${keyIndex}`}>
            {rowData[key]}
          </td>
        );
      })}
    </tr>
  );
}

export default OutputTableDataRow;
