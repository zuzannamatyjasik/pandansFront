import React from "react";
import Message from "../components/Message";
import { Grid, Image, Container, Segment } from "semantic-ui-react";

const About = (props) => {
  return (
    <Segment>
    <Container >
      <Grid verticalAlign="middle" stackable divided="false">
        <Grid.Row columns={2}className="bg-one-d">
          <Grid.Column textAlign="center">
            <div>
              <h1>PANDANS</h1>
              <p className="ui">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus dolor deserunt ad laboriosam dolore consequuntur,
                reprehenderit earum non nobis. Non dolorum deserunt sit facere
                eveniet aperiam tempore nemo quidem inventore? Lorem ipsum dolor
                sit, amet consectetur adipisicing elit. Officia itaque, impedit
                distinctio quos hic quisquam neque asperiores. Voluptates
                eveniet deserunt quis exercitationem? Tempore iusto quae et,
                placeat odit omnis nobis!
              </p>
            </div>
          </Grid.Column>
          <Grid.Column centered textAlign="center">
            <Image src="./img/three.png" verticalAlign="middle" />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={1} className="about-baner">
          <Grid.Column textAlign="center">
            <div >
              <h3>Skontaktuj się z nami!</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem
                voluptas tenetur nobis, quae quo, perferendis modi reprehenderit
                molestiae laboriosam beatae totam sed eos facilis adipisci
                ducimus sint labore temporibus libero.
              </p>
            </div>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={1} className="about-form">
          <Grid.Column textAlign="center" >
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
