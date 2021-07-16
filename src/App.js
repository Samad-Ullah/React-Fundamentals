import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header'
import { v4 as uuid_v4 } from "uuid";
import AddContact from './components/AddContact'
import ContactList from './components/ContactList'

function App() {
  const LOCAL_STORAGE_KEY = "contacts"
  const [contacts, setcontacts] = useState([] /*,() =>{
    const localData = localStorage.getItem(LOCAL_STORAGE_KEY);
    return localData ? JSON.parse(localData) : []
  }*/);

  const [searchTerm, setsearchTerm] = useState("");
  const [searchResult, setsearchResult] = useState([])

  const contactHandler = (contact) => {
    console.log(contact);
    setcontacts([...contacts, { id: uuid_v4(), ...contact }])
  }

  const contactDeletehandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    })
    setcontacts(newContactList);
  }

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
  }, [contacts])

  useEffect(() => {
    const retrieve_Contact = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retrieve_Contact)
      setcontacts(retrieve_Contact);
  }, [])


  const searchHndler = (inputvalue) =>{
    setsearchTerm(inputvalue);

    if(searchTerm !== "") {
      const newContactList = contacts.filter((contact)=>{
        return Object.values(contact)
        .join(" ")
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      })
      setsearchResult(newContactList)
    }
    else{
      setsearchResult(contacts)
    }

  
  }
  return (
    <div className=" ui container">
      <Router>
        <Switch>
          <Route
            path="/add"
            render={(props) => (<AddContact {...props} contactHandler={contactHandler}></AddContact>)}
          >
          </Route>

          <Route
            path="/"
            exact
            render={(props) => (
            <ContactList {...props}  
            contacts={searchTerm.length < 1 ? contacts :searchResult} 
            deleteContact={contactDeletehandler} 
            term={searchTerm} 
            searchContact={searchHndler}
            >
            </ContactList>)}
          />
        </Switch>
      </Router>

    </div>
  )
}

export default App