import React, { useMemo } from "react";

import OutputTableHeader from "./outputTableHeader";
import OutputTableDataRow from "./outputTableDataRow";

function Output(props) {
  const { queryResults, selectedQueryIndex } = props;

  const outputData = queryResults[selectedQueryIndex];

  const tableKeys = useMemo(() => {
    return Object.keys(outputData[0]);
  }, [outputData]);

  return (
    <div>
      Output
      <table>
        <OutputTableHeader tableKeys={tableKeys} />

        {outputData.map((data, index) => {
          return (
            <OutputTableDataRow
              rowIndex={index}
              rowData={data}
              tableKeys={tableKeys}
            />
          );
        })}
      </table>
    </div>
  );
}

export default Output;
