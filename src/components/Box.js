import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthService from "../services/auth.service";
import UserService from "../services/user.service";
import { Grid, Card, Image, Icon } from "semantic-ui-react";
const Box = ({ data }) => {
  const [showButton, setShowButton] = useState("");
  const handleHover = () => {
    const obrazek = (
      <>
        <div className="blurred"></div>
        <Link to={`/details/${data._id}`}>
          <button className="magic-button ui inverted  basic button">
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
    <Grid.Column className="relaxed">
      <Card key={data._id} centered>
        <div
          className="image"
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
        >
          {showButton}
          <Image
            className="image-card"
            rounded
            fluid
            src={UserService.getImage(data)}
            alt="icon"
          />
        </div>
        <Card.Content>
          <Card.Header>
            <h2 className="desc">{data.name}</h2>
          </Card.Header>
          <Card.Description>
            <p>{data.bio}</p>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          {data.facebook ? (
            <a href={data.facebook}>
              <Icon size="large" name="facebook square" />
            </a>
          ) : null}
          {data.instagram ? (
            <a href={data.instagram}>
              <Icon size="large" name="instagram" />
            </a>
          ) : null}
          {data.website ? (
            <a href={data.website}>
              <Icon size="large" name="globe" />
            </a>
          ) : null}

          {AuthService.getCurrentUser() != null ? (
            <Link to={`/edit/${data._id}`} as="a">
              <Icon size="large" name="edit" />
            </Link>
          ) : null}
        </Card.Content>
      </Card>
    </Grid.Column>
  );
};

export default Box;
