import React, { useState, useCallback } from "react";

import Header from "../header";
import Input from "../input";
import Output from "../output";

import { queryList, queryResultsList } from "../../data/queryData";
import "./editor.css";

function Editor() {
  const [inputQueries] = useState([...queryList]);
  const [queryResults] = useState([...queryResultsList]);
  const [selectedQueryIndex, setSelectedQueryIndex] = useState(0);
  const [layout, setLayout] = useState(1);

  const updateQuerySelection = useCallback((index) => {
    setSelectedQueryIndex(index);
  }, []);

  const updateLayout = () => {
    setLayout(layout === 1 ? 2 : 1); // for now, just 2 layouts are there
  };

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
      <Header updateLayout={updateLayout} selectedLayout={layout} />
      <div
        className={`${
          layout === 2
            ? "content-section-row-layout"
            : "content-section-column-layout"
        }`}
      >
        <Input
          queries={inputQueries}
          selectedQueryIndex={selectedQueryIndex}
          updateQuerySelection={updateQuerySelection}
        />
        <Output
          queryResults={queryResults}
          selectedQueryIndex={selectedQueryIndex}
        />
      </div>
    </>
  );
}

export default Editor;
