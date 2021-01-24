import { Button, Container, Menu, Segment } from "semantic-ui-react";
import AuthService from "../services/auth.service";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Admin = (props) => {
  let logged;
  if (props.valid) {
    logged = (
      <>
        <Menu.Item as={Link} to="/Messages">
          Wiadomości
        </Menu.Item>
        <Menu.Item as={Link} to="/Add">
          Dodaj nowy sklep
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
      </>
    );
  } else {
    console.log(props.valid);
  }

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
            Strona Główna {props.valid}
          </Menu.Item>
          <Menu.Item as={Link} to="/about">
            O nas
          </Menu.Item>
          {logged}
        </Container>
      </Menu>
    </Segment>
  );
};

export default Admin;
