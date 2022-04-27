import React from "react";
import Nav from "../Shared/Nav";

const Welcome = (props) => {
  const { players } = props;

  return (
    <>
      <Nav />

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
    </>
  );
};

export default Welcome;