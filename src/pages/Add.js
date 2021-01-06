import React from "react";
import UserService from "../services/user.service";

const Add = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const body = {
      name: e.target[0].value,
      email: e.target[1].value,
      bio: e.target[2].value,
      category: e.target[3].value,
      facebook: e.target[4].value,
      instagram: e.target[5].value,
      website: e.target[6].value,
    };
    UserService.addShop(body);
    props.history.push("/");
    //window.location.reload();
  };

  return (
    <div>
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="field">
          <label>Nazwa</label>
          <input type="text" name="name" placeholder="name" />
        </div>
        <div className="field">
          <label>Email</label>
          <input type="email" name="email" placeholder="email" />
        </div>
        <div className="field">
          <label>Bio</label>
          <input type="text" name="bio" placeholder="bio" />
        </div>
        <div className="field">
          <label>Kategorie</label>
          <input type="text" name="category" placeholder="category" />
        </div>
        <div className="field">
          <label>Facebook</label>
          <input type="text" name="facebook" placeholder="facebook" />
        </div>
        <div className="field">
          <label>Instagram</label>
          <input type="text" name="instagram" placeholder="instagram" />
        </div>
        <div className="field">
          <label>Strona internetowa</label>
          <input type="text" name="website" placeholder="website" />
        </div>
        <button type="submit">dodaj</button>
      </form>
    </div>
  );
};

export default Add;
