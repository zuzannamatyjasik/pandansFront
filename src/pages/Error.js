import { Link } from "react-router-dom";
import { Button, Image, Container, Grid } from "semantic-ui-react";
const Error = () => {
  return (
    <Container className="error">
      <Grid verticalAlign="middle" stackable divided="false">
        <Grid.Row columns={1}>
          <Grid.Column textAlign="center">
            <h1>UPS! Nic tu nie ma. </h1>
            <h3>Wróć na stonę główną!</h3>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={1}>
          <Grid.Column centered textAlign="center">
            <Image src="./img/four.png" verticalAlign="middle" />
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
