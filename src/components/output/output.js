import React, { useMemo } from "react";

import OutputTableHeader from "./outputTableHeader";
import OutputTableDataRow from "./outputTableDataRow";

import { OUTPUT_LABEL } from "../../utils/constants";
import "./output.css";

function Output(props) {
  const { queryResults, selectedQueryIndex } = props;

  const outputData = queryResults[selectedQueryIndex];

  const tableKeys = useMemo(() => {
    return Object.keys(outputData[0]);
  }, [outputData]);

  return (
    <div className="output-container">
      <div className="output-label">{OUTPUT_LABEL}</div>

      <table className="table-area">
        <OutputTableHeader tableKeys={tableKeys} />
        <tbody>
          {outputData.map((data, index) => {
            return (
              <OutputTableDataRow
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
