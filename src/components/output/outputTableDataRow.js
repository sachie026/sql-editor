import React from "react";

function OutputTableDataRow(props) {
  const { tableKeys, rowData, rowIndex } = props;

  return (
    <tr>
      {tableKeys.map((key, keyIndex) => {
        return <td key={`td-${rowIndex}-${keyIndex}`}>{rowData[key]}</td>;
      })}
    </tr>
  );
}

export default OutputTableDataRow;
