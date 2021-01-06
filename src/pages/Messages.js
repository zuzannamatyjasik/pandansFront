import { React, useState, useEffect } from "react";
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
    let newMess = messages.filter((x) => {
      return x._id !== id ? x : false;
    });
    setMessages(newMess);
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
    <div>
      <table className="ui celled striped table">
        <thead>
          <tr>
            <th colSpan="3">Wiadomości</th>
          </tr>
        </thead>
        <tbody>{messagebox}</tbody>
      </table>
    </div>
  );
};

export default Messages;
