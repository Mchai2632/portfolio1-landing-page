import React, { useEffect, useState } from "react";
import Input from "./Input";
import Button from "./Button";
import Alert from "./Alert";

export default function Form() {
  const [value, setValue] = useState({
    name: "",
    email: "",
    contact: "",
    description: "",
  });
  const [isDisabled, setIsDisabled] = useState(true); // connect with us button
  const [showAlert, setShowAlert] = useState(false);
  const [focused, setFocused] = useState("");

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    setIsDisabled(
      !value.name || !value.email || !value.contact || !value.description
    );
  }, [value]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", value);
    setShowAlert(true);
  };

  const clearForm = (e) => {
    e.preventDefault();
    setValue({ name: "", email: "", contact: "", description: "" });
  };

  return (
    <div className="form-container">
      <div className="form-input-group">
        <div className={`input-box ${value.name ? "has-value" : ""}`}>
          <label htmlFor="name">Name</label>

          <Input
            id="name"
            name="name"
            value={value.name}
            onChange={handleChange}
          />
        </div>
        <div className={`input-box ${value.email ? "has-value" : ""}`}>
          <label htmlFor="email">Email address</label>

          <Input
            id="email"
            name="email"
            value={value.email}
            onChange={handleChange}
          />
        </div>
        <div className={`input-box ${value.contact ? "has-value" : ""}`}>
          <label htmlFor="contact">Contact no.</label>

          <Input
            id="contact"
            name="contact"
            type="tel"
            value={value.contact}
            onChange={handleChange}
          />
        </div>
        <div className={`input-box ${value.description ? "has-value" : ""}`}>
          <label htmlFor="description" className="description-label">
            How can we help?
          </label>

          <textarea
            name="description"
            id="description"
            value={value.description}
            onChange={handleChange}
          ></textarea>
        </div>
      </div>

      <div className="form-button-group">
        <Button onClick={clearForm} variant="outline">
          Clear
        </Button>
        <Button onClick={handleSubmit} disabled={isDisabled}>
          Connect with us
        </Button>
      </div>

      <Alert
        show={showAlert}
        title="This page says"
        message="Thank you! We will get in touch with you as soon as possible."
        onClose={(e) => {
          clearForm(e);
          setShowAlert(false);
        }}
      />
    </div>
  );
}
