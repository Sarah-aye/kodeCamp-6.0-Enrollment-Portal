import React, { useState, useRef } from "react";
import * as yup from "yup";
import Button from "./Button";

const EnrollForm = ({ tracks, onEnroll, title = "" }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    track: "",
    score: 0,
  });
  const email = useRef();
  const isActive = useRef();

  const [error, setError] = useState({});

  const validationSchema = yup.object({
    firstName: yup.string().required("first name is required"),
    lastName: yup.string().required("last name is required"),
    track: yup.string().required("Track must be selected"),
    score: yup
      .number()
      .required("score is required")
      .min(0, "minimum score is 0")
      .max(100, "maximum score must be 100"),
    email: yup.string().email("Invalid email").required("email is required"),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    console.log("event is firing");
    e.preventDefault();

    const payLoad = {
      ...formData,
      id: crypto.randomUUID(),
      score: Number(formData.score),
      email: email.current.value,
      isActive: isActive.current.checked,
    };

    try {
      await validationSchema.validate(payLoad, { abortEarly: false });

      setError({});
      onEnroll(payLoad);

      console.log("validation successful. resetting state...");

      setFormData({
        firstName: "",
        lastName: "",
        track: "",
        score: 0,
      });

      email.current.value = "";
      isActive.current.checked = false;
    } catch (error) {
      const validationErrors = {};
      error.inner.forEach((err) => {
        validationErrors[err.path] = err.message;
      });

      setError(validationErrors);
    }

    console.log("event has fired", payLoad);
  };

  return (
    <div>
      <form>
        <h3>{title}</h3>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="Enter First Name"
        />

        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Enter Last Name"
        />

        <select name="track" value={formData.track} onChange={handleChange}>
          <option value="">Select a track</option>
          {tracks.map((track) => (
            <option key={track} value={track}>
              {track}
            </option>
          ))}
        </select>

        <input
          type="number"
          name="score"
          value={formData.score}
          onChange={handleChange}
          placeholder="Enter your score"
        />

        <input
          type="email"
          ref={email}
          placeholder="Enter your email"
          defaultValue="student@gmail.com"
        />

        <label>
          <input type="checkbox" ref={isActive} />
          Active
        </label>

        <Button
          title="Enroll"
          onClick={handleSubmit}
          className={Object.keys(error).length > 0 ? "disabled-btn" : ""}
        />
      </form>

      <p>{`Preview: ${formData.firstName} ${formData.lastName} ${formData.track} ${formData.score}`}</p>
    </div>
  );
};

export default EnrollForm;
