import { db } from './firebase.js';

import {
ref,
push,
onChildAdded
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const messageInput =
document.getElementById("messageInput");

const sendBtn =
document.getElementById("sendBtn");

const messages =
document.getElementById("messages");

const chatRef =
ref(db, "messages");

sendBtn.onclick = () => {

  const text =
  messageInput.value;

  if(text !== ""){

    push(chatRef, {
      message:text
    });

    messageInput.value = "";

  }

};

onChildAdded(chatRef, (snapshot)=>{

  const data = snapshot.val();

  const div =
  document.createElement("div");

  div.className = "message";

  div.innerText =
  data.message;

  messages.appendChild(div);

});