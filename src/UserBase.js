import React from "react";

export const UserBase = props => {
  const { users } = props.state;

  return (
    <div className="app container">
      {users.map(user => {
        return (
          <div
            className="container__user-block"
            key={`${user.name}${user.email}`}
          >
            <p>
              Name: <span> {user.name}</span>
            </p>
            <p>
              Email: <span>{user.email}</span>{" "}
            </p>
            <p>
              Phone number: <span>{user.phone_number}</span>{" "}
            </p>
            <p>
              Location:{" "}
              {/* <span>
                {countries[user.country_id - 1].name},{" "}
                {states[user.state_id - 1].name},{" "}
                {cities[user.city_id - 1].name}
              </span>{" "} */}
            </p>
            <p>
              Creation date: <span>{user.date}</span>
            </p>
          </div>
        );
      })}
    </div>
  );
};
