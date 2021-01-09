import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthService from "../services/auth.service";
import { Grid } from "semantic-ui-react";
const Box = ({ data }) => {
  const [showButton, setShowButton] = useState("");
  const handleHover = () => {
    const obrazek = (
      <>
        <div className="blurred"></div>
        <Link to={`/details/${data._id}`}>
          <button className="magicButton ui inverted pink basic button">
            Szczególy
          </button>
        </Link>
        </>
    );
    setShowButton(obrazek);
  };
  const handleLeave = () => {
    const obrazek = "";
    setShowButton(obrazek);
  };

  return (
    <Grid.Column>
    <div className="ui pink card centered" key={data._id}>
      <div
        className="image"
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
      >
        {showButton}
        <img src="../img/cat.jpg" alt="cat" />
      </div>
      <div className="content">
        {AuthService.getCurrentUser()?.wiadomosc != null ? (
          <Link to={`/edit/${data._id}`}>
            <i className="edit icon"></i>
          </Link>
        ) : null}

        <span className="header">{data.name}</span>
        <div className="description">
          <p>{data.bio}</p>
          {data.website ? (
            <a href={data.website}>
              <i className="globe pink icon"></i>
            </a>
          ) : null}
        </div>
      </div>
    </div>
    </Grid.Column>
  );
};

export default Box;
