import React from "react";
import { CSVLink } from "react-csv";

import { DOWNLOAD_LABEL, CSV_FILE_PREFIX } from "../../utils/constants";

import "./output.css";

function OutputDownload(props) {
  const { csvDataToDownload, selectedQueryIndex } = props;

  return (
    <div className="output-download">
      <CSVLink
        data={csvDataToDownload}
        className="output-download"
        filename={`CSV-${CSV_FILE_PREFIX}${selectedQueryIndex}.csv`}
      >
        {DOWNLOAD_LABEL}
      </CSVLink>
    </div>
  );
}

export default OutputDownload;
