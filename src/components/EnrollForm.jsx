import React, { useState, useRef } from "react";
import * as yup from "yup";
import Button from "./Button";

const EnrollForm = ({ tracks, onEnroll, title = "" }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    track: "",
    score: "",
  });
  const email = useRef();
  const isActive = useRef();

  const [error, setError] = useState({});

  const validationSchema = yup.object({
    firstName: yup
      .string()
      .required("first name is required")
      .min(3, "minimum 3 letter name"),
    lastName: yup
      .string()
      .required("last name is required")
      .min(3, "minimum 3 letter name"),
    track: yup.string().required("Track must be selected"),
    score: yup
      .number()
      .required("score is required")
      .min(0, "minimum score is 0")
      .max(100, "maximum score must be 100"),
    email: yup.string().email("Invalid email").required("email is required"),
  });

  const handleChange = async (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    try {
      await validationSchema.validateAt(name, {
        ...formData,
        [name]: value,
      });

      setError((prev) => ({
        ...prev,
        [name]: "",
      }));
    } catch (err) {
      setError((prev) => ({
        ...prev,
        [name]: err.message,
      }));
    }
  };

  const validateUncontrolled = async () => {
    try {
      await validationSchema.validateAt("email", {
        email: email.current.value,
      });

      setError((prev) => ({
        ...prev,
        email: "",
      }));
    } catch (err) {
      setError((prev) => ({
        ...prev,
        email: err.message,
      }));
    }
  };

  const handleSubmit = async (e) => {
    console.log("event is firing");
    e.preventDefault();

    const payLoad = {
      ...formData,
      id: crypto.randomUUID(),
      avatar: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70)}`,
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
        score: "",
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
      <form className="container card">
        <h3>{title}</h3>
        <br />
        <div className="form-div1">
          <div>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
            />
            {error.firstName && (
              <p className="error-message">{error.firstName}</p>
            )}
          </div>

          <div>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
            />
            {error.lastName && (
              <p className="error-message">{error.lastName}</p>
            )}
          </div>

          <div>
            <select name="track" value={formData.track} onChange={handleChange}>
              <option value="">Select a track</option>
              {tracks.map((track) => (
                <option key={track} value={track}>
                  {track}
                </option>
              ))}
            </select>
            {error.track && <p className="error-message">{error.track}</p>}
          </div>

          <div>
            <input
              type="number"
              name="score"
              value={formData.score}
              onChange={handleChange}
              placeholder="Score"
            />
            {error.score && <p className="error-message">{error.score}</p>}
          </div>
        </div>

        <br />

        <div className="form-div2">
          <div>
            <label htmlFor="email">
              {`Email: `}
              <input
                type="email"
                ref={email}
                placeholder="Enter your email"
                defaultValue="student@gmail.com"
                className="input"
                onBlur={validateUncontrolled}
              />
            </label>
            {error.email && <p className="error-message">{error.email}</p>}
          </div>

          <label>
            <input type="checkbox" ref={isActive} className="input" />
            Active
          </label>
        </div>
        <br />

        {(formData.firstName ||
          formData.lastName ||
          formData.track ||
          formData.score) && (
          <p>{`Preview: ${formData.firstName} ${formData.lastName} - ${formData.track} -  ${formData.score}`}</p>
        )}

        <Button
          title="Enroll"
          onClick={handleSubmit}
          className={Object.values(error).some(Boolean) ? "disabled-btn" : ""}
        />
      </form>
    </div>
  );
};

export default EnrollForm;
