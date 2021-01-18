import { React, useState, useEffect } from "react";
import { Table } from "semantic-ui-react";

import UserService from "../services/user.service";
import MessageBox from "../components/MessageBox";

const Messages = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    async function fetchData() {
      await UserService.getAllMessages().then((res) =>
        setMessages(res.data.info)
      );
    }
    fetchData();
  }, []);
  const deleteMessage = (id) => {
    if (window.confirm("Jesteś pewien, że chcesz usunąć wiadomość?")) {
      let newMess = messages.filter((x) => {
        return x._id !== id ? x : false;
      });
      setMessages(newMess);
    }
  };
  const messagebox = messages.map((data) => {
    return (
      <MessageBox
        key={data._id}
        id={data._id}
        title={data.title}
        name={data.name}
        deleteMessage={deleteMessage}
      />
    );
  });
  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell width={1}></Table.HeaderCell>
          <Table.HeaderCell width={3}>Nadawca</Table.HeaderCell>
          <Table.HeaderCell width={11}>Temat</Table.HeaderCell>
          <Table.HeaderCell width={1}>Usuń</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>{messagebox}</Table.Body>
    </Table>
  );
};

export default Messages;
