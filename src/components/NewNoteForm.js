import React, { useState } from "react";
import PropTypes from "prop-types";

export default function FormAddClock(props) {
  const [form, setForm] = useState({
    text: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.text !== "") {
      const newNote = {
        // id: shortid.generate(),
        text: form.text,
      };

      props.onFormSubmit(newNote);
      setForm({
        text: "",
      });
    }
  };

  return (
    <form>
      <label>New Note</label>
      <textarea name="text" onChange={handleChange} value={form.text} />
      <div className="material-icons send" onClick={handleSubmit}>
        send
      </div>
    </form>
  );
}

FormAddClock.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};