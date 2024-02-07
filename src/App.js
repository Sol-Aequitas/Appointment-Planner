

import React, { useState, useEffect } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Root  from "./components/root/Root"; // Import Root, ContactsPage, and AppointmentsPage
import { ContactsPage } from "./containers/contactsPage/ContactsPage";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState([]);

  const addContact = (name, phone, email) => {
    setContacts((prev) => [...prev, { name, phone, email }]);
  };

  const addAppointment = (contact, date, time) => {
    setAppointments((prev) => [...prev, { contact, date, time }]);
  };

  useEffect(() => {
    console.log("Route changed to:", window.location.pathname);
    // Handle any side effects related to route changes
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route element={<Navigate to="/contacts" replace />} />
        <Route
          path="/contacts"
          element={<ContactsPage contacts={contacts} addContact={addContact} />}
        />
        <Route
          path="/appointments"
          element={
            <AppointmentsPage
              appointments={appointments}
              addAppointment={addAppointment}
            />
          }
        />
      </Route>
    )
  );

  return (
    <div>
      <RouterProvider router={router} />
      {/* Removed duplicate rendering of ContactsPage and AppointmentsPage */}
    </div>
  );
};

export default App;
