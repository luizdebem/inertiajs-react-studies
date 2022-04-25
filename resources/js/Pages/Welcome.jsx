import React from "react";
import Nav from "../Shared/Nav";

const Welcome = (props) => {
  const { players } = props;

  return (
    <>
      <Nav />

      {!!players.length
        && <table class="border">
          <tr class="border">
            <th class="p-2">Name</th>
            <th class="p-2">Number</th>
          </tr>
          {players.map((player) => {
            return (
              <tr class="border text-center">
                <td class="p-2">{player.name}</td>
                <td class="p-2">{player.number}</td>
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