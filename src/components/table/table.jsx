import React from "react";

const Table = ({ departures }) => {
  return (
    <React.Fragment>
      <div className="table-container">
        <div className="departure-signage">Departure</div>
        <table cellSpacing="0" className="departure-table">
          <thead>
            <tr className="header">
              <th>FAQ</th>
              <th>Destination</th>
              <th>Time</th>
              <th>Flight No</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {departures.map((departure) => (
              <tr className="departure-rows" key={departure.id}>
                <td className="departure-question">{departure.faq}</td>
                <td className="departure-destination">
                  {departure.destination}
                </td>
                <td className="departure-time">{departure.time}</td>
                <td className="departure-flightno">{departure.flightNo}</td>
                <td className={`departure-status-${departure.id}`}>
                  {departure.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
};

export default Table;
