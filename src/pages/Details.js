import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  Grid,
  Image,
  Segment,
  Container,
  Button,
  Label,
} from "semantic-ui-react";
import UserService from "../services/user.service";

const Details = (props) => {
  let { id } = useParams();
  const [shop, setShop] = useState({});
  let kategorie = [];
  useEffect(() => {
    fetch(`http://localhost:3001/shops/${id}`)
      .then((response) => response.json())
      .then((result) => {
        setShop(result.info);
      })
      .catch((err) => console.log(err));
  }, [id]);

  if (shop && shop.category && shop.category.length > 0) {
    kategorie = shop.category.map((kat) => {
      console.log(kat);
      return (
        <Label className="det-label" size="big">
          {kat}
        </Label>
      );
    });
  } else kategorie = "Brak Kategorii";

  if (!shop) {
    props.history.push("/error");
    return null;
  }

  return (
    <Segment className="det-bg">
      <Container>
        <Grid columns="two" divided>
          <Grid.Row>
            <Grid.Column centered>
              <div className="bio">
                {shop.photo ? (
                  <Image src={UserService.getImage(shop)} />
                ) : (
                  <Image src="../img/two.png" />
                )}
              </div>
            </Grid.Column>
            <Grid.Column textAlign="center">
              <h1>{shop.name}</h1>
              <div className="bio">
                <p className="bio-text">{shop.bio}</p>
              </div>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row className="det-social">
            <Grid.Column>
              <div>
                <h2>Social media:</h2>
                {shop.facebook ? (
                  <a href={shop.facebook} className="social-bagdes">
                    <i className="facebook big  icon"></i>
                    <span className="social">{shop.facebook}</span>
                  </a>
                ) : null}
                {shop.instagram ? (
                  <a href={shop.instagram} className="social-bagdes">
                    <i className="instagram big  icon"></i>
                    <span className="social">{shop.instagram}</span>
                  </a>
                ) : null}
                {shop.website ? (
                  <a href={shop.website} className="social-bagdes">
                    <i className="globe big icon"></i>
                    <span className="social">{shop.website}</span>
                  </a>
                ) : null}
              </div>
            </Grid.Column>
            <Grid.Column>
              <h2>Kategorie:</h2> {kategorie}
            </Grid.Column>
          </Grid.Row>
          <Grid.Row centered className="det-back">
            <Grid.Column textAlign="center">
              <Link to="/">
                <Button>Powrót</Button>
              </Link>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  );
};

export default Details;
