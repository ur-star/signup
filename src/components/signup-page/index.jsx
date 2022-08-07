import React, { useReducer, useState } from "react";
import "./style.css";
const Form = () => {
  const initialState = {
    name: "",
    email: "",
    phone: "",
    password: "",
  };

  const [showForm, setShowForm] = useState([]);

  function reducer(state, action) {
    return { ...state, [action.input]: action.value };
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  function updateField(e) {
    const action = {
      input: e.target.name,
      value: e.target.value,
    };
    dispatch(action);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const showFormData = { ...state, key: new Date().getTime().toString };
    setShowForm([showFormData]);
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          maxLength={20}
          id="name"
          value={state.name}
          onChange={updateField}
          required
        />
        <label htmlFor="email">Email-Id</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={updateField}
          value={state.email}
          required
        />
        <label htmlFor="phone">Phone Number</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          onChange={updateField}
          required
          maxLength={10}
          minLength={10}
          value={state.phone}
        />
        <label htmlFor="Password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          minLength={8}
          onChange={updateField}
          value={state.password}
          required
        />
        <button type="submit" id="submit">
          Submit
        </button>
      </form>

      <div>
        {showForm.map((ele) => {
          return (
            <div className="user-details" key={ele.key}>
              <p>Your details are:</p>
              <p>Name: {ele.name}</p>             
              <p>Email: {ele.email}</p>
              <p>Phone: {ele.phone}</p>
              <p>Password: {ele.password}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Form;
