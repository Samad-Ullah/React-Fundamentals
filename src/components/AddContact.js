import React, { useState } from 'react'

function AddContact(props) {

    const [name, setname] = useState("");
    const [number, setnumber] = useState("");

    const add = (e) => {
        e.preventDefault();
        props.contactHandler({ name, number })
        setname("");
        setnumber("");
        props.history.push("/");
    }

    return (
        <div>
            <div className="ui main ">
                <h2>Add Contact</h2>
                <form className="ui form" onSubmit={add}>
                    <div className="field">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Name" onChange={e => setname(e.target.value)} value={name}></input>
                        <div className="field">
                            <label>Contact #</label>
                            <input type="text" name="number" placeholder="Contact Number" onChange={e => setnumber(e.target.value)} value={number}></input>
                        </div>
                        <button className=" ui button blue">Add</button>
                    </div>

                </form>
            </div>
        </div>

    )
}

export default AddContact
