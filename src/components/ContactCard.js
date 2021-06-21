import React from 'react'

function ContactCard(props) {
   const{id ,name , number}=props.contact;
    return (
        <div className="item">
        <div className="content">
            <div className="header">{name}</div>
            <div>{number}</div>
        </div>
        <div>
        <i  className="trash alternate outline icon"
        onClick={()=>props.deletehandle(id)}></i>
        </div>
        

    </div>
    )
}

export default ContactCard
