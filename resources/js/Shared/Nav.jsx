import React from 'react'
import { Link } from "@inertiajs/inertia-react";

const Nav = () => {
  return (
    <>
      <div className="mb-6">
        <h1 className="font-bold">Hello World!</h1>
        <p>Laravel, InertiaJS & ReactJS.</p>
      </div>

      <nav className="mb-6">
        <ul className="flex flex-row justify-around items-center">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/login">Login</Link></li>
          <li><Link href="/settings">Settings</Link></li>
          <li><Link href="/logout" method="post" as="button">Logout</Link></li>
        </ul>
      </nav>
    </>
  )
}

export default Nav