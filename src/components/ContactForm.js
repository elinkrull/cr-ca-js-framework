import React, { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");
  const [errors, setErrors] = useState({});

  function validateForm() {
    let errors = {};
    if (name.trim().length < 3)
      errors.name = "Full name must be at least 3 characters.";
    if (subject.trim().length < 3)
      errors.subject = "Subject must be at least 3 characters.";
    if (!/^\S+@\S+\.\S+$/.test(email))
      errors.email = "Email must be a valid email address.";
    if (body.trim().length < 3)
      errors.body = "Message must be at least 3 characters.";
    setErrors(errors);
    return Object.keys(errors).length === 0;
  }

  function onFormSubmit(event) {
    event.preventDefault();
    if (!validateForm()) return;

    const formData = { name, subject, email, body };

    // ✅ Log the form data in the console
    console.log("Form submitted successfully:", formData);

    fetch("https://v2.api.noroff.dev/.", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    // Clear form on success
    setName("");
    setSubject("");
    setEmail("");
    setBody("");
    setErrors({});
  }

  return (
    <div>
      <form className="contact-form" onSubmit={onFormSubmit}>
        <label htmlFor="name">Full name</label>
        <input
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <p className="error-message">{errors.name}</p>}

        <label htmlFor="subject">Subject</label>
        <input
          name="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        {errors.subject && <p className="error-message">{errors.subject}</p>}

        <label htmlFor="email">Email</label>
        <input
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p className="error-message">{errors.email}</p>}

        <label htmlFor="body">Message</label>
        <input
          name="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        {errors.body && <p className="error-message">{errors.body}</p>}

        <div className="contact-form-submit-wrapper">
          <button type="submit" className="contact-form-submit-button">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
