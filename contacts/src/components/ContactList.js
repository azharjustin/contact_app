import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";
import { useRef } from "react";

const ContactList = (props) => {
 
  const inputEl=useRef("");

  const deleteConactHandler = (id) => {
    props.getContactId(id);
  };

  const renderContactList =props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHander={deleteConactHandler}
        key={contact.id}
      />
    );
  });

   const getSearchTerm=()=>{
     props.searchKeyword(inputEl.current.value);
   };

  return (
    <div class="main">
 
      <h2>
      Contact List
     
    
     </h2>
     <div className="left">
     <Link to="/add">
      <button className="ui button blue right left">Add Contact</button>
      </Link> 
     </div>
  
   
     <div className="ui search">
       <div className="ui icon input">
        <input 
               ref={inputEl}
               type="text" 
               placeholder="Search Contact" 
               className="prompt"
               value={props.term}
               onChange={getSearchTerm}
               />
        <i className="search icon"></i>
       </div>
     </div>
     <div className="ui celled list">{renderContactList.length > 0 ? renderContactList : "No contacts available"}</div>
    </div>
  
);
};

export default ContactList;
