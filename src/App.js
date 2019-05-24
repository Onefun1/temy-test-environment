import React from "react";
import "./App.css";
import { getCities, getCountries, getUsers, getStates } from "./dataFromServer";
import { UserBase } from "./UserBase";

class App extends React.Component {
  constructor() {
    super();
    let today = new Date();
    let date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    this.state = {
      isLoading: false,
      cities: {},
      countries: {},
      users: {},
      states: {},
      date: date
    };

    this.selectCountriesRef = React.createRef();
    this.selectStatesRef = React.createRef();
    this.selectCitiesRef = React.createRef();
    this.inputNameRef = React.createRef();
    this.inputEmailRef = React.createRef();
    this.inputAdressRef = React.createRef();
    this.inputAboutRef = React.createRef();
    this.inputPhoneRef = React.createRef();
  }

  async componentDidMount() {
    const cities = await getCities();
    const countries = await getCountries();
    const users = await getUsers();
    const states = await getStates();

    this.setState({
      isLoading: true,
      cities,
      countries,
      users,
      states
    });
  }

  handleChange = () => {
    const { cities, states, date } = this.state;

    if (this.selectCountriesRef.current.value) {
      this.selectStatesRef.current.parentElement.hidden = false;
      const filteredStatesById = [...states].filter(state => {
        return state.country_id === this.selectCountriesRef.current.value;
      });
      this.setState({
        states: filteredStatesById
      });
    } else {
      this.selectStatesRef.current.parentElement.hidden = true;
      this.selectStatesRef.current.value = null;
    }
    if (this.selectStatesRef.current.value) {
      this.selectCitiesRef.current.parentElement.hidden = false;

      const filteredCitiesById = [...cities].filter(city => {
        return city.state_id === this.selectStatesRef.current.value;
      });
      this.setState({
        cities: filteredCitiesById
      });
    } else {
      this.selectCitiesRef.current.parentElement.hidden = true;
      this.selectCitiesRef.current.value = null;
    }
    const userAdress =
      this.inputAdressRef.current.value === ""
        ? null
        : this.inputAdressRef.current.value;
    const aboutUser =
      this.inputAboutRef.current.value === ""
        ? null
        : this.inputAboutRef.current.value;

    let newUser = {
      name: this.inputNameRef.current.value,
      email: this.inputEmailRef.current.value,
      phone_number: this.inputPhoneRef.current.value,
      address: userAdress,
      about_me: aboutUser,
      country_id: this.selectCountriesRef.current.value,
      state_id: this.selectStatesRef.current.value,
      city_id: this.selectCitiesRef.current.value,
      date: date
    };

    this.setState({
      newUser
    });
  };

  handleSubmit = event => {
    // event.preventDefault();
    // alert("A list was submitted: " + this.state.newUser);

    return fetch("http://localhost:8000/users", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state.newUser)
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .then(user => {
        this.setState({
          users: [...this.state.users, user]
        });
      })
      .catch(err => console.log("ERROR POST", err));
  };

  render() {
    const { countries, cities, states, isLoading } = this.state;
    return (
      <div>
        <div className="app">
          <h3>Registration</h3>
          <form
            // action="http://localhost:3000/users"
            // method="post"
            onChange={() => this.handleChange()}
            onSubmit={this.handleSubmit}
          >
            <div className="group">
              <input
                type="text"
                name="name"
                required
                placeholder="Enter your firstName and lastName (Xxxxx Xxxxx)"
                pattern="[A-Z]{1}[a-z]{1,30}\s[A-Z]{1}[a-z]{1,30}"
                autoComplete="off"
                ref={this.inputNameRef}
              />
              <span className="bar" />
              <label>&#8593; Name *</label>
            </div>
            <div className="group">
              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                autoComplete="off"
                ref={this.inputEmailRef}
              />
              <span className="bar" />
              <label>&#8593; Email *</label>
            </div>
            <div className="group">
              <select name="country_id" required ref={this.selectCountriesRef}>
                <option />
                {isLoading && countries.length > 0
                  ? countries.map(country => {
                      return (
                        <option key={country.id} value={country.id}>
                          {country.name}
                        </option>
                      );
                    })
                  : null}
              </select>
              <label>&#8593; Country *</label>
            </div>
            <div className="group" hidden>
              <select name="state_id" required ref={this.selectStatesRef}>
                <option />
                {isLoading && states.length > 0
                  ? states.map(state => {
                      return (
                        <option
                          key={`${state.id}${state.hasc}`}
                          value={state.id}
                        >
                          {state.name}
                        </option>
                      );
                    })
                  : null}
              </select>
              <label>&#8593; State *</label>
            </div>
            <div className="group" hidden>
              <select name="city_id" required ref={this.selectCitiesRef}>
                <option />
                {isLoading && cities.length > 0
                  ? cities.map(city => {
                      return (
                        <option key={`${city.id}${city.hasc}`} value={city.id}>
                          {city.name}
                        </option>
                      );
                    })
                  : null}
              </select>
              <label>&#8593; City *</label>
            </div>
            <div className="group">
              <input
                type="tel"
                name="phone"
                required
                placeholder="Enter your phone number 38xxxxxxxxxx"
                pattern="[0-9]{12}"
                maxLength="12"
                autoComplete="off"
                ref={this.inputPhoneRef}
              />
              <span className="bar" />
              <label>&#8593; Phone *</label>
            </div>
            <div className="group">
              <input
                type="text"
                placeholder="Enter your address"
                autoComplete="off"
                ref={this.inputAdressRef}
              />
              <span className="bar" />
              <label>&#8593; Address</label>
            </div>
            <div className="group">
              <textarea
                name="about_me"
                rows="1"
                maxLength="500"
                style={{ resize: "none" }}
                ref={this.inputAboutRef}
              />
              <span className="bar" />
              <label>&#8593; About me</label>
            </div>
            <input className="button" type="submit" value="Submit" />
          </form>
        </div>
        {isLoading ? <UserBase state={this.state} /> : ""}
      </div>
    );
  }
}

export default App;
