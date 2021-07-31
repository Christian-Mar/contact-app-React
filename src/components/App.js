import React from "react";
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";


function App() {
  const contacts = [
    {
      id: "1",
      name: "John",
      email: "john@telenet.be"
  },
  {
      id: "2",
      name: "Anna",
      email: "anna@telenet.be"
  }

  ]
  return (
    <div className="ui container">
      <Header />
      <AddContact />
      <ContactList contacts={contacts}/> 
    </div>
  );
}

export default App;
