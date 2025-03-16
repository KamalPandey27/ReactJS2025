import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    gmail: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", formData.name);
    console.log("Gmail:", formData.gmail);
    // setFormData({ name: "", gmail: "" });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="gmail"
          placeholder="Enter your email"
          value={formData.gmail}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
      <div>
        <p>Name: {formData.name}</p>
        <p>Email: {formData.gmail}</p>
      </div>
    </>
  );
}

export default Form;
