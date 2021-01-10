import { Button, Container, Menu, Segment } from "semantic-ui-react";
import AuthService from "../services/auth.service";
import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <Segment
      fixed={"top"}
      textAlign="center"
      style={{ height: 70, padding: "1em 0em" }}
      vertical
    >
      <Menu
        className="foter"
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
  );
};

export default Admin;
