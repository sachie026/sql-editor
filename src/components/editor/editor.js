import React, { useState, useCallback } from "react";

import Header from "../header";
import Input from "../input";
import Output from "../output";

import { queryList, queryResultsList } from "../../data/queryData";

function Editor() {
  const [inputQueries] = useState([...queryList]);
  const [queryResults] = useState([...queryResultsList]);
  const [selectedQueryIndex, setSelectedQueryIndex] = useState(0);

  const updateQuerySelection = useCallback((index) => {
    setSelectedQueryIndex(index);
  }, []);

  return (
    <>
      <Header />
      <Input
        queries={inputQueries}
        selectedQueryIndex={selectedQueryIndex}
        updateQuerySelection={updateQuerySelection}
      />
      <Output
        queryResults={queryResults}
        selectedQueryIndex={selectedQueryIndex}
      />
    </>
  );
}

export default Editor;
