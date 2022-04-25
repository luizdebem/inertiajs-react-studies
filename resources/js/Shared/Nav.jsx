import React from 'react'
import { Link } from "@inertiajs/inertia-react";

const Nav = () => {
  return (
    <>
      <h1 class="font-bold">Hello World!</h1>
      <p>Laravel, InertiaJS & ReactJS.</p>

      <nav>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/login">Login</Link></li>
          <li><Link href="/settings">Settings</Link></li>
          <li><Link href="/logout" method="post" as="button">Logout</Link></li>
        </ul>
      </nav></>
  )
}

export default Nav