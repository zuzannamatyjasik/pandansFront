import {
  Button,
  Container,
  Menu,
  Segment,
  Sticky,
} from "semantic-ui-react";
import AuthService from "../services/auth.service";
import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <Sticky>
      <Segment
        className='foter'
        textAlign="center"
        style={{ height: 70, padding: "1em 0em" }}
        vertical
      >
        <Menu
          fixed={"top"}
          inverted={true}
          pointing={true}
          secondary={true}
          size="large"
          style={{ height: 70, padding: "0.5em 0em" }}
        >
          <Container>
            <Menu.Item as={Link} to="/">
              Strona Główna
            </Menu.Item>
            <Menu.Item as={Link} to="/about">
              O nas
            </Menu.Item>
            <Menu.Item as={Link} to="/Messages">
              Wiadomości
            </Menu.Item>
            <Menu.Item position="right">
              <Button
                as="a"
                inverted={true}
                onClick={() => {
                  AuthService.logout();
                  window.location.reload();
                }}
              >
                Wyloguj
              </Button>
            </Menu.Item>
          </Container>
        </Menu>
      </Segment>
    </Sticky>
  );
};

export default Admin;
