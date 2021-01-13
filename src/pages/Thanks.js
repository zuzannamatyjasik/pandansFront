import { Link } from "react-router-dom";
import { Button, Image, Container, Grid } from "semantic-ui-react";

const Error = () => {
  return (
    <Container centered className="thanks">
      <Grid verticalAlign="middle" stackable divided="false">
        <Grid.Row columns={1} >
          <Grid.Column textAlign="center">
                      <h1>Dziękujemy za wysłanie wiadomości!</h1>
                      <p>Wkrótce skontaktujemy się z tobą drogą emailową</p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={1} >
          <Grid.Column centered textAlign="center">
            <Image src="./img/five.png" verticalAlign="middle" />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={1} >
          <Grid.Column textAlign="center">
            <Button >
              <Link to="/">Strona główna</Link>
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default Error;
