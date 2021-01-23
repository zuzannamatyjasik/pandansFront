import { Link } from "react-router-dom";
import { Button, Image, Container, Grid } from "semantic-ui-react";

const Error = () => {
  return (
    <Container centered className="denied">
      <Grid verticalAlign="middle" stackable divided="false">
        <Grid.Row columns={1}>
          <Grid.Column textAlign="center">
            <h1>Brak dostępu!</h1>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={1}>
          <Grid.Column centered textAlign="center">
            <Image src="./img/one.png" verticalAlign="middle" />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={1}>
          <Grid.Column textAlign="center">
            <Button>
              <Link to="/">Strona główna</Link>
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default Error;
