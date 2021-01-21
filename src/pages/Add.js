import React from "react";
import UserService from "../services/user.service";
import { Button, Input, Form,  Grid} from 'semantic-ui-react'

const Add = (props) => {
  console.log(props);
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
        <Input type="text" name="name" placeholder="name" />
      </Form.Field>
      <Form.Field>
        <label>Email</label>
        <Input type="email" name="email" placeholder="email" />
      </Form.Field>
      <Form.Field>
        <label>Bio</label>
        <Input type="text" name="bio" placeholder="bio"  />
      </Form.Field>
      <Form.Field>
        <label>Kategorie</label>
        <Input type="text" name="category" placeholder="category"  />
      </Form.Field>
      <Form.Field>
          <label>Facebook</label>
        <Input type="text" name="facebook" placeholder="facebook"  />
      </Form.Field>
      <Form.Field>
        <label>Instagram</label>
        <Input type="text" name="instagram" placeholder="instagram"  />
      </Form.Field>
      <Form.Field>
        <label>Strona internetowa</label>
        <Input type="text" name="website" placeholder="website" />
      </Form.Field>
  
                <Button type='submit'>Dodaj</Button>
  
            </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>
    );
  
  
};

export default Add;
