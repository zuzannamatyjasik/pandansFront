import { React, useState } from "react";
import AuthService from "../services/auth.service";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
} from "semantic-ui-react";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setMessage("loguje");
    AuthService.login(email, password).then(
      () => {
        props.history.push("/messages");
        window.location.reload();
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setMessage(resMessage);
      }
    );
  };
  return (
    <Grid
      stackable
      className="login-page"
      textAlign="center"
      style={{ height: "70vh" }}
      verticalAlign="middle"
    >
      <Grid.Row columns='3'>
        <Grid.Column textAlign="centered" >
        <Image size='medium' src="./img/catT.png" verticalAlign="middle" />
          
        </Grid.Column>
        <Grid.Column style={{ maxWidth: 450 }} >
          <Header as="h2" textAlign="center">
            Zaloguj się na konto administratora!
          </Header>
          <Form onSubmit={handleLogin} size="large">
            <Segment stacked>
              <Form.Input
                value={email}
                onChange={onChangeEmail}
                fluid
                icon="user"
                iconPosition="left"
                placeholder="Email"
              />
              <Form.Input
                fluid
                value={password}
                onChange={onChangePassword}
                icon="lock"
                iconPosition="left"
                placeholder="Hasło"
                type="password"
              />

              <Button fluid size="large" type="submit">
                Zaloguj
              </Button>
            </Segment>
          </Form>
        </Grid.Column>
        <Grid.Column textAlign="centered" >
        <Image size='medium' src="./img/cat.png" verticalAlign="middle" />
            </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Login;
