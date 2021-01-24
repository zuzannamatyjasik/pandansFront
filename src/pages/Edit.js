import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import UserService from "../services/user.service";
import { Link } from "react-router-dom";
import { Button, Input, Form, Grid } from "semantic-ui-react";

const Edit = (props) => {
  let { id } = useParams();
  const [newShop, setNewShop] = useState({
    name: "",
    bio: "",
    email: "",
    facebook: "",
    instagram: "",
    website: "",
    category: [],
    photo: "",
  });
  useEffect(() => {
    const getData = async () => {
      let temp = await UserService.getShop(id);
      setNewShop(temp.data.info);
    };
    getData();
  }, [id]);
  const handleChange = (e) => {
    let temp = { ...newShop };
    let pole = e.target.name;
    if (pole === "photo") temp[pole] = e.target.files[0];
    else temp[pole] = e.target.value;
    setNewShop(temp);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData();
    Object.entries(newShop).forEach((element) => {
      formData.append(element[0], element[1]);
    });
    UserService.editShop(newShop._id, formData)
      .then(() => props.history.push("/"))
      .catch(() => props.history.push("/error"));
  };

  return (
    <Grid>
      <Grid.Row columns={1} className="bg-one-d">
        <Grid.Column textAlign="center">
          <div>
            <h1>Edytuj szczegóły sklepu</h1>
          </div>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns={1} className="bg-one-p">
        <Grid.Column textAlign="center" className="pad">
          <Form onSubmit={handleSubmit}>
            <Form.Field>
              <label>Nazwa</label>
              <Input
                type="text"
                name="name"
                value={newShop.name ? newShop.name : ""}
                onChange={handleChange}
                required
              />
            </Form.Field>
            <Form.Field>
              <label>Email</label>
              <Input
                type="email"
                name="email"
                value={newShop.email ? newShop.email : ""}
                onChange={handleChange}
                required
              />
            </Form.Field>
            <Form.Field>
              <label>Bio</label>
              <Input
                type="text"
                name="bio"
                value={newShop.bio ? newShop.bio : ""}
                onChange={handleChange}
                required
              />
            </Form.Field>
            <Form.Field>
              <label>Kategorie</label>
              <Input
                type="text"
                name="category"
                value={newShop.category ? newShop.category : ""}
                onChange={handleChange}
                required
              />
            </Form.Field>
            <Form.Field>
              <label>Facebook</label>
              <Input
                type="text"
                name="facebook"
                value={newShop.facebook ? newShop.facebook : ""}
                onChange={handleChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Instagram</label>
              <Input
                type="text"
                name="instagram"
                value={newShop.instagram ? newShop.instagram : ""}
                onChange={handleChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Strona internetowa</label>
              <Input
                type="text"
                name="website"
                value={newShop.website ? newShop.website : ""}
                onChange={handleChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Zdjęcie</label>
              <input
                id="photo"
                type="file"
                name="photo"
                onChange={handleChange}
              />
            </Form.Field>
            <Button type="submit" color="olive">
              <i className="refresh icon"></i>Aktualizuj
            </Button>
            <Button
              color="red"
              type="button"
              onClick={async () => {
                if (window.confirm("Jesteś pewien, że chcesz usunąć sklep?")) {
                  await UserService.deleteShop(newShop._id);
                  props.history.push("/");
                  window.location.reload();
                }
              }}
            >
              <i className="trash icon"></i>
              Usuń
            </Button>
          </Form>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns={1} className="bg-one-d">
        <Grid.Column textAlign="center">
          <Link to="/">
            <Button type="button">Powrót</Button>
          </Link>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Edit;
