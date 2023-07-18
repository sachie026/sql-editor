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

  /*
    TO-DO: to make the app header interactive we can implement following methods and pass it to Header component.
    const newQueryHandler = () => {};
     - we can add new entry to the inputqueris variable to keep track of all the tabs and their respective data


    const clearQueryHandler = () => {};
     - we will clear the input box


    const runQueryHandler = () => {};
     - we will read the query and pass it to the enginer and wait for the output. Once we get the output we can update the queryResults
       or handle the error/exception and show it inside the output section

  */

  /*
    TO-DO: to make the app input section interactive we can add useState variable to save the typed query and
    implement following method and pass it to Input component.

    const changeQueryHandler = () => {};
  */

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
