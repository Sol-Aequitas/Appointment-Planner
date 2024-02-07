import React from "react";

export const ContactPicker = (props) => {
  const names = props.names.map((contact) => (
    <option value={contact.name} key={contact.name}>
      {contact.name}
    </option>
  ));

  return (
    <form>
      <label htmlFor="contact">Select a contact:</label>
      <select
        id="contact"
        onChange={props.onChange}
        value={props.value}
        required
      >
        <option value="" disabled hidden>
          Select a contact
        </option>
        {names}
      </select>
    </form>
  );
};