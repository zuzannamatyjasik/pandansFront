import { React, useState } from "react";
import UserService from "../services/user.service";
import { Accordion, Icon } from "semantic-ui-react";
import { Button } from "semantic-ui-react";

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
    console.log(tresc);
    setWiadomosc(tresc);
    setActiveIndex(newIndex);
  };
  return (
    <tr key={props.id}>
      <td className="right aligned collapsing">
        <i className="envelope icon"></i>
      </td>
      <td className="collapsing">{props.name}</td>
      <td>
        <Accordion fluid>
          <Accordion.Title
            active={activeIndex === 0}
            index={0}
            onClick={handleClick}
          >
            <Icon name="dropdown" />
            {props.title}
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 0}>
            <p>{wiadomosc.content}</p>
            <p>{wiadomosc.email}</p>
            <Button
              onClick={async () => {
                await UserService.deleteMessage(props.id);
                props.deleteMessage(props.id);
              }}
            >
              <i className="trash icon"></i>
            </Button>
          </Accordion.Content>
        </Accordion>
      </td>
    </tr>
  );
};

export default MessageBox;
