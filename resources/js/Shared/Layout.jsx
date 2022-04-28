import { usePage } from '@inertiajs/inertia-react';
import React from 'react'
import Nav from "./Nav";

const Layout = ({ children }) => {
  const { auth } = usePage().props;
  return (
    <div className="m-8 flex flex-col min-h-[calc(100vh-4rem)]">
      <header>
        <div className="mb-6 flex flex-row justify-between items-center">
          <div>
            <h1 className="font-bold text-3xl">Hello World!</h1>
            <p>Laravel, InertiaJS & ReactJS.</p>
          </div>

          {/* Ao implementar "persisted layout", a música não será interrompida ao mudar de página (no mesmo layout.) */}
          <iframe style={{ borderRadius: "12px" }} src="https://open.spotify.com/embed/track/5j2kGlGnZ2T6nJb2FRG2Jm?utm_source=generator&theme=0" width="25%" height="80" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>

          <div className="text-xs">
            <p>Logged in with {auth.user.displayName}</p>
          </div>
        </div>

        <Nav />
      </header>

      <main className="mx-auto">
        {children}
      </main>

      <footer className="mt-auto flex flex-row justify-center items-center">
        <span>©2021 luizdebem</span>
      </footer>
    </div>
  )
}

export default Layout