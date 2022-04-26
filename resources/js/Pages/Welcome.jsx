import React from "react";
import Nav from "../Shared/Nav";

const Welcome = (props) => {
  const { players } = props;

  return (
    <>
      <Nav />

      {!!players.length
        && <table className="border">
          <tr className="border">
            <th className="p-2">Name</th>
            <th className="p-2">Number</th>
          </tr>
          {players.map((player) => {
            return (
              <tr className="border text-center">
                <td className="p-2">{player.name}</td>
                <td className="p-2">{player.number}</td>
              </tr>
            );
          })
          }
        </table>
      }
    </>
  );
};

export default Welcome;