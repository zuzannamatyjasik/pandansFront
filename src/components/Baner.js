import { Grid, Image, Container } from "semantic-ui-react";

const Baner = () => {
  return (
    <Container className="baner">
      <Grid centered verticalAlign="middle" stackable divided="vertically">
        <Grid.Row columns={2}>
          <Grid.Column className="about-image">
            <Image ui={false} centered src="./img/two.png" />
          </Grid.Column>
          <Grid.Column textAlign="center" className="bg-one-p">
            <div className="pad">
              <h1>PANDANS</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                beatae maiores sapiente qui ullam minus explicabo, eligendi
                similique hic, quidem tempore eius harum vel enim velit suscipit
                nemo sed distinctio? Illum unde cumque laboriosam inventore
                maiores atq voluptate quidem amet maxime et autem in id unde
                quod blanditiis ducimus numquam. Sed, voluptates. Praesentium ex
                quas accustibus unde provident enim consectetur saepe, quo sed
                illum commodi officiis possimus quae explicabo, temporibus, rem
                rerum? Aliquam, natus itaque voluptas dolorum omnis illum.
                Alias, quas vitae. Dolorum quam soluta laboriosam atque dolores
                nihil, architecto earum magni deleniti molestias culpa dolor non
                vero hic voluptas mollitia dicta repellendus neque ipsam
                pariatur libero sequi. Quisquam!
              </p>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default Baner;
