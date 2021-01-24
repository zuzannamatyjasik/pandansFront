import React from "react";
import Message from "../components/Message";
import { Grid, Image, Container, Segment } from "semantic-ui-react";

const About = (props) => {
  return (
    <Segment>
      <Container>
        <Grid verticalAlign="middle" stackable divided="false">
          <Grid.Row columns={2} className="bg-one-d">
            <Grid.Column textAlign="center">
              <div>
                <h1>PANDANS</h1>
                <p className="ui">
                  Jesteśmy stroną zajmującą się promowaniem firm, które dbają o
                  środowski naturalne, nie eksploatują swoich pracowników i
                  tworzą dobre jakościowo produkty. Jeśli masz ochotę dowiedzieć
                  się o nich więcej, zapraszamy do odwiedzienia ich sklepów
                  internetowych i social mediów.
                </p>
              </div>
            </Grid.Column>
            <Grid.Column centered textAlign="center">
              <Image src="./img/three.png" verticalAlign="middle" />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={1} className="about-baner">
            <Grid.Column textAlign="center">
              <div>
                <h3>Skontaktuj się z nami!</h3>
                <p>
                  Jeśli masz pytania lub problem z którym mogłybyśmy Ci pomoć,
                  wyślij nam wiadomość poprzez formularz!
                  <br />
                  Jeśli jesteś osobą prowadzącą etyczny biznes i chciałbyś
                  dołączyć do grona firm przedstawianych na naszym portalu,
                  skorzystaj z formularza, a skontaktujemy się z Tobą tak szybko
                  jak będzie to możliwe.
                </p>
              </div>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row columns={1} className="about-form">
            <Grid.Column textAlign="center">
              <div className="pad">
                <Message props={props} />
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  );
};

export default About;
