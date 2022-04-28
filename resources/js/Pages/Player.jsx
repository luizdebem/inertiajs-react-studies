import React from 'react'
import Layout from '../Shared/Layout';
import Nav from "../Shared/Nav";

const Player = () => {
  return (
    <div>Player page</div>
  )
}

Player.layout = page => <Layout> {page} </Layout>;

export default Player