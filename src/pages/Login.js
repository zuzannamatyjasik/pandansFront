import { React, useState } from "react";
import AuthService from "../services/auth.service";

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
    <div>
      <div className="ui middle aligned center aligned grid">
        <div className="column">
          <form className="ui large form" onSubmit={handleLogin}>
            <div className="ui stacked segment">
              <div className="field">
                <div className="ui left icon input">
                  <i className="user icon"></i>
                  <input
                    type="text"
                    name="email"
                    value={email}
                    onChange={onChangeEmail}
                    placeholder="E-mail address"
                  />
                </div>
              </div>
              <div className="field">
                <div className="ui left icon input">
                  <i className="lock icon"></i>
                  <input
                    type="password"
                    value={password}
                    onChange={onChangePassword}
                    name="password"
                    placeholder="Hasło"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="ui fluid large pink submit button"
              >
                Login
              </button>
            </div>
          </form>
          {message && (
            <div>
              <div className="red" role="alert">
                {message}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
