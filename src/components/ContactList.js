import React from 'react'
import { Link } from 'react-router-dom';
import ContactCard from './ContactCard'

function ContactList(props) {
    const deletehandle = (id) => {
        props.deleteContact(id);
    }

    const addContactlist = props.contacts.map((contact) => {
        return (
            <ContactCard contact={contact} deletehandle={deletehandle} ></ContactCard>
        )
    })
    console.log(props)

    return (
        <div>
            <div className="ui celled list">{addContactlist}</div>
            <div>
                <h2>Contact List</h2>
                <Link to="/add">
                <button className="ui button blue right">
                Add Contact
            </button>
                </Link>
                
            </div>
          

        </div>

    )
}

export default ContactList
