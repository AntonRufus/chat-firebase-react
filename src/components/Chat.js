import React, { useState, useEffect, useRef } from "react";
import { database, auth } from "../firebase";
import SendMessage from "./SendMessage";
import SignOut from "./SignOut";

function Chat() {
  const scroll = useRef();
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    database
      .collection("messages")
      .orderBy("createdAt")
      .limit(50)
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data()));
      });
    console.log(database);
  }, []);

  return (
    <div>
      <SignOut />
      <div className="msgs">
        {messages.map(({ id, text, photoURL, uid, createdAt }) => (
          <div key={id}>
            <div
              className={`msg ${
                uid === auth.currentUser.uid ? "sent" : "received"
              }`}
            >
              <img src={photoURL} alt="photoURL" />
              <p>{text}</p>
              <span>{createdAt.time}</span>
              <span>{database.createdAt}</span>
            </div>
          </div>
        ))}
      </div>
      <SendMessage scroll={scroll} />
      <div ref={scroll}></div>
    </div>
  );
}

export default Chat;
