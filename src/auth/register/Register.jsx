import styles from "./register.module.css";
import { useState, useEffect } from "react";
import useRegister from "../../customHooks/useRegister";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("")

  useEffect(() => {
    if(message)alert(message);
  }, [message]);

  const handleSubmit = async (e) => {
    e.preventDefault(); //don't reload my page
    const userDatas = { firstName, lastName, email };

    try {
      const { name, message } = await useRegister(userDatas);
      localStorage.setItem("firstName", name);
      setMessage(message);
    } catch (error) {
      setError("Registration failed. Please try again.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.registerForm}>
        <div className={styles.labelInput}>
          <label htmlFor="firstname">firstName</label>
          <input
            id="firstname"
            onChange={(e) => setFirstName(e.target.value)}
            className={styles.input}
            type="text"
            placeholder="Enter your first name"
          />
        </div>

        <div className={styles.labelInput}>
          <label htmlFor="lastname">lastName</label>
          <input
            id="lastname"
            onChange={(e) => setLastName(e.target.value)}
            className={styles.input}
            type="text"
            placeholder="Enter your last name"
          />
        </div>

        <div className={styles.labelInput}>
          <label htmlFor="email">email</label>
          <input
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
            type="email"
            placeholder="Enter your email"
          />
        </div>

        <div className={styles.labelInput}>
          <label htmlFor="password">password</label>
          <input
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
            type="password"
            placeholder="Enter your password"
          />
        </div>

        <div className={styles.labelInput}>
          <label htmlFor="confirmPassword">confirm password</label>
          <input
            className={styles.input}
            type="password"
            placeholder="Confirm your  password"
          />
        </div>

        <button className={styles.button} type="submit">
          Submit
        </button>
      </form>
      <span className={styles.link}> Already have an account</span>
      <a href="/">Login</a>
    </div>
  );
};

export default Register;
