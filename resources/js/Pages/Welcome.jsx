import React from "react";

const Welcome = (props) => {
  const { players } = props;

  return (
    <>
      <h1 class="font-bold">Hello World!</h1>
      <p>Laravel, InertiaJS & ReactJS.</p>
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