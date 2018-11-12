import React, { Component } from "react";

const contacts = [
  {
    name: "Xenia Polyakova",
    position: "assistent",
    phone: "8(988)-144-14-88"
  }
];
class ContactsScreen extends React.Component {
  render() {
    return (
      <div>
        {contacts.map((c, index) => {
          return (
            <div key={index}>
              <h5>{c.name}</h5>
              <p>{c.position}</p>
              <p>{c.phone}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ContactsScreen;
