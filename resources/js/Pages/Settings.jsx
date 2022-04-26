import React from 'react'
import Nav from "../Shared/Nav";
import { Link } from '@inertiajs/inertia-react';

const Settings = (props) => {
  const { time } = props;
  return (
    <>
      <Nav />
      <div style={{ marginTop: "800px" }}>
        <p>Welcome! The current time is: { time }</p>
        <Link href="/settings" as="button" preserveScroll className="my-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Refresh</Link>
      </div>
    </>
  )
}

export default Settings