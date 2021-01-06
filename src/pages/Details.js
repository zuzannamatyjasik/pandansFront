import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Details = ({ data }) => {
  let { id } = useParams();
  const [shop, setShop] = useState({});
  let kategorie = [];
  useEffect(() => {
    fetch(`http://localhost:3001/shops/${id}`)
      .then((response) => response.json())
      .then((result) => {
        setShop(result.info);
      })
      .catch((err) => console.log(err));
  }, [id]);

  if (shop.category && shop.category.length > 0) {
    kategorie = shop.category.map((kat) => {
      console.log(kat);
      return <span className="ui tag pink label">{kat}</span>;
    });
  } else kategorie = "Brak Kategorii";

  if (!shop) {
    return <div>pusto</div>;
  }
  return (
    <div className="ui pages grid centered container ">
      <div className="sixteen wide column ">
        <h1>{shop.name}</h1>
      </div>
      <div className="eight wide column ">
        <img className="ui fluid image" src="../img/CAT.jpg" alt="kot" />
      </div>

      <div className="eight wide column ">
        <h2>{shop.bio}</h2>
      </div>

      <div className="eight wide column ">
        <div>
          {shop.facebook ? (
            <a href={shop.facebook}>
              <i className="facebook big pink icon"></i>
            </a>
          ) : null}
          {shop.instagram ? (
            <a href={shop.instagram}>
              <i className="instagram big pink icon"></i>
            </a>
          ) : null}
          {shop.website ? (
            <a href={shop.website}>
              <i className="globe big pink icon"></i>
            </a>
          ) : null}
        </div>
      </div>
      <div className="eight wide column ">{kategorie}</div>
      <div className="eight wide column ">
        <Link to="/">
          <button>powrot</button>
        </Link>
      </div>
    </div>
  );
};

export default Details;
