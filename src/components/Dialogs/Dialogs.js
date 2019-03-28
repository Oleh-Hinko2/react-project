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
    <div className="message">{props.name}</div>
  )
}

const Dialogs = (props) => {
      let dialogsData = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sasha'},
        {id: 4, name: 'Sveta'},
        {id: 5, name: 'Victior'},
        {id: 6, name: 'Valera'}
      ]

      let messageData = [
        {id: 1,message: 'Hi'},
        {id: 2, message: 'How is you'},
        {id: 3, message: 'What do you do'},
        {id: 4, message: 'Pruvit'},
        {id: 5, message: 'Hi'}
      ]

      let dialogsElements = dialogsData.map((dialog) => {
        return (
          <DialogItem name={dialog.name} id={dialog.id} />
        );
      })

      let messagesElements = messageData.map((message) => {
        return (
          <Message name={message.message} />
        );
      })
      return (
        <div className="dialogs">
          <div className="dialogs-items">
            {dialogsElements}
          </div>
          <div className="messages">
            {messagesElements}
          </div>
        </div>
      );
    }


export default Dialogs;
