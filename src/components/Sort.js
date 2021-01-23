import React from "react";
import { Select } from "semantic-ui-react";

const Sort = (props) => {
  const opcje = [
    { key: "Od A do Z", value: "Od A do Z", text: "Od A do Z" },
    { key: "Od Z do A", value: "Od Z do A", text: "Od Z do A" },
  ];
  const choosen = (e) => {
    props.func(e.target.firstChild.innerText);
  };
  return (
    <div>
      <Select placeholder="Opcje" options={opcje} onChange={choosen} />
    </div>
  );
};

export default Sort;
