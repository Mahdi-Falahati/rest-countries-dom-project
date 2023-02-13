import { Outlet, NavLink } from "react-router-dom"

import "./RootLayout.css"

export default function RootLayout() {
  return (
    <>
      <header className="header">
        <nav className="navbar">
          <NavLink to="/">Where in the world ?</NavLink>
          <button>Dark Mode</button>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  )
}
