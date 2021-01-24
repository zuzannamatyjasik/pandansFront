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
                Witaj na naszej stonie, gdzie z łatwością znajdziesz pomysły
                na prezenty dla siebie czy swoich bliskich. Oferujemy przegląd
                małych, etycznych marek z Polski, które na tle innych wyróżniają
                się swoim podejściem zarówno do klienta jak i środowska.
                Inspiruj się i wybieraj produkty świadomie. 
                Skorzystaj z opcji filtrowania, by w szybki sposób znaleźć sklepy oferujące
                poszukiwane przez ciebie produkty z odpowiednich kategorii.
              </p>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default Baner;
