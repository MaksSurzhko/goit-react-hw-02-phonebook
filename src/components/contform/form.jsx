import React from "react";
//import { nanoid } from "nanoid";
import fcss from "../contform/form.module.css";

const ContactForm = ({ name, number, onInputChange, onAddContact }) => {
  const handleSubmit = (event) => {
  event.preventDefault();
  onAddContact(event);
};

  return (
    <form className={fcss.pform} onSubmit={handleSubmit}>
      <label className={fcss.plabel} htmlFor="nameInput">
        Name
        <input
          className={fcss.pinput}
          id="nameInput"
          type="text"
          name="name"
          value={name}
          onChange={onInputChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={fcss.plabel} htmlFor="numberInput">
        Number
        <input
          className={fcss.pinput}
          id="numberInput"
          type="tel"
          name="number"
          value={number}
          onChange={onInputChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={fcss.pbtn} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;