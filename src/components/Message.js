import React from "react";
import UserService from "../services/user.service";

const Message = ({props}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const body ={
        name: e.target[0].value,
        email: e.target[1].value,
        title: e.target[2].value,
        content: e.target[3].value,
    }
    UserService.addMessage(body);
    props.history.push("/thanks");
  };
  return (
    <div>
      
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="field">
          <label>Imię i Nazwisko</label>
          <input required type="text" name="name" placeholder="Imię i Nazwisko" />
        </div>
        <div className="field">
          <label>Email</label>
          <input required type="text" name="email" placeholder="Adres email" />
        </div>
        <div className="field">
          <label>Tytuł</label>
          <input required type="text" name="title" placeholder="Tytuł" />
        </div>
        <div className="field">
          <label>Treść</label>
          <textarea  required name="content"></textarea>
        </div>
        <button className="ui button" type="submit">
          Wyślij
        </button>
      </form>
    </div>
  );
};

export default Message;
