import { Outlet, NavLink } from "react-router-dom";

export const ROUTES = {
  CONTACTS: "/contacts",
  APPOINTMENTS: "/appointments",
};

function Root() {
  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS}>
          <span>Contacts</span>
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS}>
          <span>Appointments</span>
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
}

export default Root;