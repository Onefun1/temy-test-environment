const BASE_URL = "http://localhost:8000/";

export const getCities = () => {
  return fetch(`${BASE_URL}cities`)
    .then(response => response.json())
    .then(data => data);
};
export const getCountries = () => {
  return fetch(`${BASE_URL}countries`)
    .then(response => response.json())
    .then(data => data);
};
export const getStates = () => {
  return fetch(`${BASE_URL}states`)
    .then(response => response.json())
    .then(data => data);
};
export const getUsers = () => {
  return fetch(`${BASE_URL}users`)
    .then(response => response.json())
    .then(data => data);
};

// const fetchData = path => {
//   const BASE_URL = "http://localhost:3000/";

//   const base = Promise.all([
//     fetch(`${BASE_URL}cities`),
//     fetch(`${BASE_URL}countries`),
//     fetch(`${BASE_URL}states`),
//     fetch(`${BASE_URL}users`)
//   ])
//     .then(allResponses => {
//       let cities = allResponses[0].json();
//       let countries = allResponses[1].json();
//       let states = allResponses[2].json();
//       let users = allResponses[3].json();
//       console.log(cities, countries, states, users);
//     })
//     .catch(error => console.log("parsing failed", error));
//   console.log(base);
// };
