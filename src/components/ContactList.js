import React, {useRef} from 'react'
import { Link } from 'react-router-dom';
import ContactCard from './ContactCard'

function ContactList(props) {
    const inputEl = useRef();
    const deletehandle = (id) => {
        props.deleteContact(id);
    }

    const addContactlist = props.contacts.map((contact) => {
        return (
            <ContactCard contact={contact} deletehandle={deletehandle} ></ContactCard>
        )
    })
    console.log(props)

    const searchContactTerm = () =>{
        props.searchContact(inputEl.current.value)

    }
    return (
        <div>
            <div className="ui celled list">{addContactlist}</div>
            <div style={{margin:"20px" , paddingTop:"20px"}}>
                <h2>Contact List</h2>
                <Link to="/add">
                <button className="ui button blue right">
                Add Contact
            </button>
                </Link>
                
            </div>
            <div className="ui search">
                <div className="ui icon input">
                    <input 
                    ref={inputEl}
                    type="text" 
                    placeholder="Search Contacts" 
                    className="prompt" 
                    value={props.term} 
                    onChange={searchContactTerm}
                    >
                    </input>
                    <i className="search icon"></i>
                </div>

            </div>
          

        </div>

    )
}

export default ContactList
