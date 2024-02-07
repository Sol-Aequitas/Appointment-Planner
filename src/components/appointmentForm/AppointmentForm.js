import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";



export const AppointmentForm = ({
  name,
  date,
  time,
  setName,
  setDate,
  setTime,
  handleSubmit,
  contacts,
  setContact
}) => {
  const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <label htmlFor="Name">
        Name:
        <input type="text" 
        id="Name"
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
      </label>
      <br />
      <label htmlFor="Date">
        Date:
        <input type="date"
          id="Date"
          value={date} 
          onChange={(e) => setDate(e.target.value)} min={getTodayString()} />
      </label>
      <br />
      <label htmlFor="Time">
        Time:
        <input type="time" 
        value={time} 
        id="Time" onChange={(e) => setTime(e.target.value)} />
      </label>
      <br />
      <label htmlFor="Contact">
        Contact:
        <ContactPicker 
        contacts={contacts} 
        onChange={(e) => setContact(e.target.value)} />
      </label>
      <button type="submit">Add Appointment</button>
    </form>
    </div>
  );
};
