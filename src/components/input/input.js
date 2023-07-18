import React from "react";

function Input(props) {
  const { queries, selectedQueryIndex, updateQuerySelection } = props;

  return (
    <>
      <div>
        {queries.map((_query, id) => {
          return (
            <button key={id} onClick={() => updateQuerySelection(id)}>
              Query {id}
            </button>
          );
        })}
      </div>
      <div>
        Input
        <textarea
          className="desc"
          rows="20"
          value={queries[selectedQueryIndex]}
          placeholder="Write here..."
        />
      </div>
    </>
  );
}

export default Input;
