import React from "react";
import Message from "../components/Message";

const About = (props) => {
  return (
    <div>
      <h2 className="ui header">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dolor
        deserunt ad laboriosam dolore consequuntur, reprehenderit earum non
        nobis. Non dolorum deserunt sit facere eveniet aperiam tempore nemo
        quidem inventore? Lorem ipsum dolor sit, amet consectetur adipisicing
        elit. Officia itaque, impedit distinctio quos hic quisquam neque
        asperiores. Voluptates eveniet deserunt quis exercitationem? Tempore
        iusto quae et, placeat odit omnis nobis!
      </h2>
      <Message props={props} />
    </div>
  );
};

export default About;
