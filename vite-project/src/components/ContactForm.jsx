import React, { useState }from "react";

const ContactForm = () => {
  const [inputs, setInputs] = useState({});
  const [notification, setNotification] = useState("");

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
    setNotification("Twój email został wysłany");
  };

  return (
    <form className="my-form" onSubmit={handleSubmit}>
      <label>
        Podaj swoje imię:
        <input
          type="text"
          name="username"
          value={inputs.username || ""}
          onChange={handleChange}
        />
      </label>
      <label>
        Podaj swój email do kontaktu:
        <input
          type="email"
          name="email"
          value={inputs.email || ""}
          onChange={handleChange}
        />
      </label> 
      <label>
        Podaj swój numer telefonu:
        <input
          type="phoneNumber"
          name="phoneNumber"
          value={inputs.phoneNumber || ""}
          onChange={handleChange}
        />
      </label>
      
      <input type="submit" />
      {notification && <p className="notification-email">{notification}</p>}
    </form>
  );
}

export default ContactForm;