import React, { useState }from "react";

const ContactForm = () => {
  const [inputs, setInputs] = useState({});
  const [notification, setNotification] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const Modal = ({message, closeModal}) =>{
    return(
      <div className="modal-container">
        <div className="modal-content">
          <p>{message}</p>
          <button onClick={closeModal}>Zamknij</button>
        </div>
      </div>
    )
  }
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    const scriptURL = "https://script.google.com/macros/s/AKfycbzyicHnTNhL1TGX4p2C9htsKLtHFNxLtaDa_ZX5IDD5_6wKeIpdCwjWF-VE4cpIzAnE/exec"
    try{
      const response = await fetch (scriptURL,{
        method:"POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(inputs),
      });
      setNotification("Twój email został wysłany");
      setIsModalOpen(true);
      setInputs({}); //clear the form inputs
    }
    catch (error){
      console.log("error")
      setNotification("Wystąpił błąd podczas wysyłania wiadomości.")
      setIsModalOpen(true);
    }
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
      <label>
        Napisz w jakiej sprawie:
        <input
          type="message"
          name="message"
          value={inputs.message || ""}
          onChange={handleChange}
        />
      </label>
      
      <input type="submit" value="Wyślij"/>
      {notification && <p className="notification-email">{notification}</p>}

      {isModalOpen &&(
        <Modal message={notification} closeModal={closeModal}/>
      )}
    </form>
  );
}

export default ContactForm;