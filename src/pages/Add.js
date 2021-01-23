import React from "react";
import UserService from "../services/user.service";
import { Button, Input, Form, Grid } from "semantic-ui-react";


const Add = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("name", e.target[0].value);
    formData.append("email", e.target[1].value);
    formData.append("bio", e.target[2].value);
    formData.append("category", e.target[3].value);
    formData.append("facebook", e.target[4].value);
    formData.append("instagram", e.target[5].value);
    formData.append("website", e.target[6].value);
    formData.append("photo", e.target[7].files[0]);
    UserService.addShop(formData)
      .then(() => props.history.push("/"))
      .catch(() => props.history.push("error"));
  };

  return (
    <Grid>
      <Grid.Row columns={1} className="bg-one-d">
        <Grid.Column textAlign="center">
          <div>
            <h1>Dodaj nowy sklep</h1>
          </div>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns={1} className="bg-one-p">
        <Grid.Column textAlign="center" className="pad">
          <Form onSubmit={handleSubmit}>
            <Form.Field>
              <label>Nazwa</label>
              <Input type="text" name="name" placeholder="name" required />
            </Form.Field>
            <Form.Field>
              <label>Email</label>
              <Input type="email" name="email" placeholder="email" required />
            </Form.Field>
            <Form.Field>
              <label>Bio</label>
              <Input type="text" name="bio" placeholder="bio" required />
            </Form.Field>
            <Form.Field>
              <label>Kategorie</label>
              <Input
                type="text"
                name="category"
                placeholder="category"
                required
              />
            </Form.Field>
            <Form.Field>
              <label>Facebook</label>
              <Input type="text" name="facebook" placeholder="facebook" />
            </Form.Field>
            <Form.Field>
              <label>Instagram</label>
              <Input type="text" name="instagram" placeholder="instagram" />
            </Form.Field>
            <Form.Field>
              <label>Strona internetowa</label>
              <Input type="text" name="website" placeholder="website" />
            </Form.Field>
            <Form.Field>
              <label>Zdjęcie</label>
              <input id="photo" type="file" required />
            </Form.Field>
            <Button type="submit">Dodaj</Button>
          </Form>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Add;
