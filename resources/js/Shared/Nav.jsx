import React from 'react'
import { Link } from "@inertiajs/inertia-react";

const Nav = () => {
  const page = window.location.pathname;
  return (
      <nav className="mb-6">
        <ul className="flex flex-row justify-around items-center">
          <li><Link className={ page === "/" ? "font-bold underline" : "" } href="/">Home</Link></li>
          <li><Link className={ page === "/login" ? "font-bold underline" : "" } href="/login">Login</Link></li>
          <li><Link className={ page === "/settings" ? "font-bold underline" : "" } href="/settings">Settings</Link></li>
          <li><Link href="/logout" method="post" as="button">Logout</Link></li>
        </ul>
      </nav>
  )
}

export default Nav