import { React, useState } from "react";
import { Accordion, Icon, Table, Button } from "semantic-ui-react";
import UserService from "../services/user.service";

const MessageBox = (props) => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [wiadomosc, setWiadomosc] = useState("");

  const handleClick = async (e, titleProps) => {
    const { index } = titleProps;
    const newIndex = activeIndex === index ? -1 : index;
    let tresc;

    await UserService.getMessageDetails(props.id).then(
      (res) => (tresc = res.data.info)
    );
    setWiadomosc(tresc);
    setActiveIndex(newIndex);
  };
  return (
    <Table.Row key={props.id} w>
      <Table.Cell>
        <Icon name="envelope" />
      </Table.Cell>
      <Table.Cell>
        <h3>{props.name}</h3>
      </Table.Cell>
      <Table.Cell>
        <Accordion fluid>
          <Accordion.Title
            active={activeIndex === 0}
            index={0}
            onClick={handleClick}
          >
            <h3>
              {props.title} <Icon name="dropdown" />
            </h3>
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 0}>
            <h3>Treść: </h3>
            <p>{wiadomosc.content}</p>
            <h3>Adres zwotny: </h3>
            <p>{wiadomosc.email}</p>
          </Accordion.Content>
        </Accordion>
      </Table.Cell>
      <Table.Cell>
        <Button
          onClick={async () => {
            await UserService.deleteMessage(props.id);
            props.deleteMessage(props.id);
          }}
          compact
          icon="trash"
          color="red"
          negative
        ></Button>
      </Table.Cell>
    </Table.Row>
  );
};

export default MessageBox;
