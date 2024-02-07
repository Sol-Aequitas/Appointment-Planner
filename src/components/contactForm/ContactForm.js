import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
  isDuplicate
}) => {
  const phoneRegex = /^\+(?:[0-9]?){6,14}[0-9]$/;
  
  return (
    <div>
    <form onSubmit={handleSubmit}>
      <label htmlFor="Name">
        Name:
        <input type="text" 
        id="Name"
        value={name} 
        onChange={(e) => setName(e.target.value)} />
      </label>
      {isDuplicate && <p style={{color: 'red'}}>Name is a duplicate!</p>}
      <br />
      <label htmlFor="Phone">
        Phone:
        <input 
        type="text"
        id="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        pattern={phoneRegex}
        title="Please enter a valid phone number with country code"
        />
      </label>
      <br />
      <label htmlFor="Email">
        Email:
        <input type="text" 
        id="Email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        />
      </label>
      <br />
      <button type="submit">Add Contact</button>
    </form>
    </div>
  );
};

