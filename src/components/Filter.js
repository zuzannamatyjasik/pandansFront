import React from "react";
import { Select } from "semantic-ui-react";

const Filter = (props) => {

    const choosen = (e) => {
        props.filter(e.target.firstChild.innerText)
    }
  return (
    <div>
      <Select
        placeholder="Kategorie"
        options={props.cats}
              onClick={props.categoriesUnique}
              onChange={choosen}
      />
    </div>
  );
};

export default Filter;
