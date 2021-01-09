import { Link } from "react-router-dom";
import {
    Container,
    Divider,
    Grid,
    Header,
    List,
    Segment,
  } from 'semantic-ui-react'
  

const Footer = () => {
    return (
        <Segment className='foter' vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }} fixed={"bottom"}>
        <Container textAlign='center'>
          <Grid divided inverted stackable>
            
            <Grid.Column width={16}>
              <Header inverted as='h4' content='Footer Header' />
              <p>
                Extra space for a call to action inside the footer that could help re-engage users.
              </p>
            </Grid.Column>
          </Grid>
  
          <Divider inverted section />
          <List horizontal inverted divided link size='small'>
            <List.Item as={Link} to="/">
            Strona Główna
            </List.Item>
            <List.Item as={Link} to="/about">
            O nas
            </List.Item>
            
            <List.Item as={Link} to="/login">
            Login
                    </List.Item>
                    
          </List>
        </Container>
      </Segment>
   
  );
};

export default Footer;
