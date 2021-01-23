import { Link } from "react-router-dom";
import {
  Container,
  Divider,
  Grid,
  Header,
  List,
  Segment,
} from "semantic-ui-react";

const Footer = () => {
  return (
    <Segment
      className="foter"
      vertical
      style={{ margin: "5em 0em 0em", padding: "5em 0em" }}
      fixed={"bottom"}
    >
      <Container textAlign="center">
        <Grid divided inverted stackable>
          <Grid.Column width={16}>
            <Header inverted as="h2" content="Footer Header" />
            <p className="footer-desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
              deleniti similique, esse, reprehenderit enim temporibus quisquam
              dolor cum officiis vero est voluptatem voluptas obcaecati
              dignissimos tempore ex provident repellendus vel!Quam doloremque
              soluta debitis cum molestias autem, facere fuga totam dolore
              nostrum quibusdam et nemo maxime nobis voluptates saepe
              dignissimos accusamus quos. Dolor eveniet sequi voluptate qui
              veniam, ad iste.
            </p>
          </Grid.Column>
        </Grid>

        <Divider inverted section />
        <List horizontal inverted divided link size="large">
          <List.Item as={Link} to="/">
            Strona Główna
          </List.Item>
          <List.Item as={Link} to="/about">
            O nas
          </List.Item>

          <List.Item as={Link} to="/login">
            Login
          </List.Item>
        </List>
      </Container>
    </Segment>
  );
};

export default Footer;
