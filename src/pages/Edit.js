import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import UserService from "../services/user.service";
const Edit = (props) => {
  let { id } = useParams();
  const [shop, setShop] = useState({});
  const [newShop, setNewShop] = useState({
    name: "",
    bio: "",
    facebook: "",
    instagram: "",
    website: "",
    category: [],
  });
  let kategorie = "";
  useEffect(() => {
    fetch(`http://localhost:3001/shops/${id}`)
      .then((response) => response.json())
      .then((result) => {
        setShop(result.info);
        if (!newShop.name) {
          setNewShop(result.info);
        }
      })
      .catch((err) => console.log(err));
  });

  if (newShop && newShop.category && newShop.category.length > 0) {
    kategorie = newShop.category.join(",");
  } else kategorie = "";

  if (!shop) {
    return <div>pusto</div>;
  }
  const handleName = (e) => {
    setNewShop({ ...newShop, name: e.target.value });
  };
  const handleBio = (e) => {
    setNewShop({ ...newShop, bio: e.target.value });
  };
  const handleChange = (e, pole) => {
    if (pole === "facebook")
      setNewShop({ ...newShop, facebook: e.target.value });
    else if (pole === "instagram")
      setNewShop({ ...newShop, instagram: e.target.value });
    else if (pole === "website")
      setNewShop({ ...newShop, website: e.target.value });
    else if (pole === "category") {
      let temp = e.target.value.split(",");
      setNewShop({ ...newShop, category: temp });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newShop);
    UserService.editShop(newShop._id, newShop);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="ui pages grid centered container ">
        <div className="sixteen wide column ui input ">
          <input value={newShop.name} onChange={handleName}></input>
        </div>
        <div className="eight wide column ">
          <img className="ui fluid image" src="../img/CAT.jpg" alt="kot" />
        </div>

        <div className="eight wide column ">
          <input value={newShop.bio} onChange={handleBio}></input>
        </div>

        <div className="eight wide column ">
          <div>
            <a href={shop.facebook}>
              <i className="facebook big pink icon"></i>
            </a>
            <input
              value={newShop.facebook}
              onChange={(e) => handleChange(e, "facebook")}
            ></input>

            <a href={shop.instagram}>
              <i className="instagram big pink icon"></i>
            </a>
            <input
              value={newShop.instagram}
              onChange={(e) => handleChange(e, "instagram")}
            ></input>

            <a href={shop.website}>
              <i className="globe big pink icon"></i>
            </a>
            <input
              value={newShop.website}
              onChange={(e) => handleChange(e, "website")}
            ></input>
          </div>
        </div>
        <div className="eight wide column ">
          <input
            type="text"
            value={kategorie}
            onChange={(e) => handleChange(e, "category")}
          />
        </div>

        <div className="eight wide column ">
          <button
            type="button"
            className="ui youtube button"
            onClick={async() => {
              await UserService.deleteShop(newShop._id);
              props.history.push("/");
              window.location.reload();
            }}
          >
            <i
              className="heart icon"
            ></i>
            Usuń
          </button>
          <Link to="/">
            <button type="button">powrot</button>
          </Link>
        </div>
      </div>
      <button type="submit">wyslij</button>
    </form>
  );
};

export default Edit;
