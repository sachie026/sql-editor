import React, { useMemo } from "react";

import OutputTableHeader from "./outputTableHeader";
import OutputTableDataRow from "./outputTableDataRow";
import OutputHeader from "./outputHeader";

import "./output.css";

function Output(props) {
  const { queryResults, selectedQueryIndex } = props;

  const outputData = queryResults[selectedQueryIndex];

  const tableKeys = useMemo(() => {
    return Object.keys(outputData[0]);
  }, [outputData]);

  return (
    <div className="output-container">
      <OutputHeader
        outputData={outputData}
        tableKeys={tableKeys}
        selectedQueryIndex={selectedQueryIndex}
      />

      <table className="table-area">
        <OutputTableHeader tableKeys={tableKeys} />
        <tbody>
          {outputData.map((data, index) => {
            return (
              <OutputTableDataRow
                key={index}
                rowIndex={index}
                rowData={data}
                tableKeys={tableKeys}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Output;
