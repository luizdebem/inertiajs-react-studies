import { usePage } from "@inertiajs/inertia-react";
import React from "react";
import Layout from "../Shared/Layout";
import Nav from "../Shared/Nav";

const Welcome = () => {
  const { players } = usePage().props;

  return (
    <Layout>
      {!!players.length
        && <table className="border">
          <thead>
            <tr className="border">
              <th className="p-2">Name</th>
              <th className="p-2">Number</th>
            </tr>
          </thead>
          <tbody>
            {players.map((player, index) => {
              return (
                <tr className="border text-center" key={index}>
                  <td className="p-2">{player.name}</td>
                  <td className="p-2">{player.number}</td>
                </tr>
              );
            })
            }
          </tbody>
        </table>
      }
    </Layout>
  );
};

export default Welcome;