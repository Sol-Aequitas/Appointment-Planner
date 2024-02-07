import React, { useState, useEffect } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = (props) => {
  // State variables for contact info and duplicate check
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [duplicate, setDuplicate] = useState(false);

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Add contact info and clear data if the contact name is not a duplicate
    if (!duplicate) {
      props.addContacts(name, phone, email);
      // Clear form after submit
      setName('');
      setPhone('');
      setEmail('');
    }
  };

  // Check for duplicate contact name using useEffect
  useEffect(() => {
    const isDuplicate = props.contacts.some(contactItem => contactItem.name === name);

    if (isDuplicate) {
      setDuplicate(true);
      console.log('Contact already exists.');
    } else {
      setDuplicate(false);
    }
  }, [props.contacts, name]);

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm
          name={name}
          phone={phone}
          email={email}
          setName={setName}
          setPhone={setPhone}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
          duplicate={duplicate}
          setDuplicate={setDuplicate}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList object={props.contacts} />
      </section>
    </div>
  );
};