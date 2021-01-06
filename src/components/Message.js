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
    props.history.push("/");
  };
  return (
    <div>
      <div className="ui attached pink message">
        <div className="header">Skontaktuj się z nami!</div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem
          voluptas tenetur nobis, quae quo, perferendis modi reprehenderit
          molestiae laboriosam beatae totam sed eos facilis adipisci ducimus
          sint labore temporibus libero.
        </p>
      </div>
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="required field">
          <label>Imię i Nazwisko</label>
          <input type="text" name="name" placeholder="Imię i Nazwisko" />
        </div>
        <div className="required field">
          <label>Email</label>
          <input type="text" name="email" placeholder="Adres email" />
        </div>
        <div className="required field">
          <label>Tytuł</label>
          <input type="text" name="title" placeholder="Tytuł" />
        </div>
        <div className="required field">
          <label>Kontent</label>
          <textarea name="content"></textarea>
        </div>
        <button className="ui button" type="submit">
          Wyślij
        </button>
      </form>
    </div>
  );
};

export default Message;
