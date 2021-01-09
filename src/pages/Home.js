import { React, useState, useEffect } from "react";
import Box from "../components/Box";
import Sort from "../components/Sort";
import { Grid, Container } from "semantic-ui-react";

const Home = ({ data }) => {
  const [shops, setShops] = useState([]);
  const [filteredShops, setFilteredShops] = useState([]);
  const [unique, setUnique] = useState([
    { key: "All", value: "All", text: "All" },
  ]);

  const categoriesUnique = () => {
    let temp = unique;
    let uniqueKeys = unique.map((x) => x.key);
    shops.forEach((shop) => {
      if (shop.category && shop.category.length > 0) {
        shop.category.forEach((cat) => {
          if (!uniqueKeys.includes(cat)) {
            temp.push({ key: cat, value: cat, text: cat });
            uniqueKeys.push(cat);
          }
        });
      }
    });
    setUnique(temp);
  };
  const filter = (category) => {
    let filtered = shops;
    if (category !== "All") {
      filtered = shops.filter((shop) => {
        if (shop.category.includes(category)) {
          return shop;
        } else return false;
      });
      setFilteredShops(filtered);
    } else setFilteredShops(filtered);
  };

  useEffect(() => {
    fetch("http://localhost:3001/shops")
      .then((response) => response.json())
      .then((result) => {
        setShops(result.info);
        setFilteredShops(result.info);
      })
      .catch((err) => console.log(err));
  }, []);
  const box = filteredShops.map((sklep) => {
    return (
      <div key={sklep._id} className="five wide column">
        <Box data={sklep} />
      </div>
    );
  });
  return (
    <>
      <div className="bg-one-c">
        <Sort
          cats={unique}
          categoriesUnique={categoriesUnique}
          filter={filter}
        />
      </div>
      <Container className="bg-one-t">
        <Grid centered verticalAlign="middle" stackable divided="vertically">
          <Grid.Row className="bg-one-d">{box}</Grid.Row>
        </Grid>
      </Container>
    </>
  );
};

export default Home;
