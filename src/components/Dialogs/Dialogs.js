import React from 'react';
import './Dialogs.scss';
import {NavLink} from 'react-router-dom';

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id
  return (
    <div className="item">
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
}

const Message = (props) => {
  return (
    <div className="message">{props.message}</div>
  )
}


const Dialogs = (props) => {
  return (
    <div className="dialogs">
      <div className="dialogs-items">
        <DialogItem name="Dimych" id="1" />
        <DialogItem name="Andrey" id="2" />
        <DialogItem name="Sasha" id="3" />
        <DialogItem name="Sveta" id="4" />
        <DialogItem name="Victor" id="5" />
        <DialogItem name="Valera" id="6" />
      </div>
      <div className="messages">
        <Message message="Hi" id="1" />
        <Message message="How is you" id="1" />
        <Message message="Privit" id="1" />
        <Message message="Privit" id="1" />
        <Message message="Privit" id="1" />
      </div>
    </div>
  );
}

export default Dialogs;
