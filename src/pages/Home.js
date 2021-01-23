import { React, useState, useEffect } from "react";
import Box from "../components/Box";
import Filter from "../components/Filter";
import Sort from "../components/Sort";
import { Grid, Container, Segment } from "semantic-ui-react";

const Home = ({ data }) => {
  const [shops, setShops] = useState([]);
  const [filteredShops, setFilteredShops] = useState([]);
  const [unique, setUnique] = useState([
    { key: "Wszystkie", value: "Wszystkie", text: "Wszystkie" },
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
    if (category !== "Wszystkie") {
      filtered = shops.filter((shop) => {
        if (shop.category.includes(category)) {
          return shop;
        } else return false;
      });
      setFilteredShops(filtered);
    } else setFilteredShops(filtered);
  };
  const sort = (option) => {
    let temp;
    if (option === "Od A do Z") {
      temp = [1, -1];
    } else temp = [-1, 1];
    let posortowane = [...filteredShops].sort((a, b) => {
      let nameA = a.name.toUpperCase();
      let nameB = b.name.toUpperCase();
      if (nameA > nameB) {
        return temp[0];
      }
      if (nameB > nameA) {
        return temp[1];
      }
      return 0;
    });
    setFilteredShops(posortowane);
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
  let box = filteredShops.map((sklep) => {
    return (
      <div key={sklep._id} className="five wide column">
        <Box data={sklep} />
      </div>
    );
  });
  return (
    <>
      <Segment className="bg-one-c" textAlign="right">
        <Grid columns={3}>
          <Grid.Row>
            <Grid.Column></Grid.Column>
            <Grid.Column>
              <h2>Filtruj</h2>
              <Filter
                cats={unique}
                categoriesUnique={categoriesUnique}
                func={filter}
              />
            </Grid.Column>
            <Grid.Column>
              <h2>Sortuj</h2>
              <Sort func={sort} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Container className="bg-one-t">
        <Grid centered verticalAlign="middle" stackable divided="vertically">
          <Grid.Row>{box}</Grid.Row>
        </Grid>
      </Container>
    </>
  );
};

export default Home;
