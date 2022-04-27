import React from 'react'
import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <div className="m-8 flex flex-col min-h-[calc(100vh-4rem)]">
      <header>
        <div className="mb-6">
          <h1 className="font-bold text-3xl">Hello World!</h1>
          <p>Laravel, InertiaJS & ReactJS.</p>
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