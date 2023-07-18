import React, { useEffect, useState, useCallback } from "react";

import OutputDownload from "./output-download";

import {
  OUTPUT_LABEL,
  EXECUTION_TIME,
  ROWS_LABEL,
} from "../../utils/constants";

import "./output.css";

function OutputHeader(props) {
  const { outputData, tableKeys, selectedQueryIndex } = props;
  const [csvDataToDownload, setCSVDataToDownload] = useState([]);

  const generateTheCSVData = useCallback(() => {
    const csvData = [];
    csvData.push(tableKeys);

    outputData.forEach((data) => {
      csvData.push(Object.values(data));
    });

    setCSVDataToDownload([...csvData]);
  }, [outputData, tableKeys]);

  useEffect(() => {
    generateTheCSVData();
  }, [generateTheCSVData]);

  return (
    <div className="output-header-container">
      <div className="output-label">{OUTPUT_LABEL}</div>

      <div className="output-header-info">
        <div className="output-total-rows">
          {outputData.length} {ROWS_LABEL}
        </div>

        <div className="output-execution-time">
          {EXECUTION_TIME}
          {/* Adding a static execution time as it's a dummy application. But for the actuall app we can calculate and render it here. */}
          <b>0.02s</b>
        </div>

        <OutputDownload
          csvDataToDownload={csvDataToDownload}
          selectedQueryIndex={selectedQueryIndex}
        />
      </div>
    </div>
  );
}

export default OutputHeader;
