import styles from './register.module.css';
import {Link} from 'react-router';

const Register = () => {
    return (
    <div>
        <form className={styles.registerForm}> 
            <div className={styles.labelInput}>
                <label htmlFor="firstname">firstName</label>
                <input id="firstName" className={styles.input} type="text" placeholder="Enter your first name" />
            </div>
            <div className={styles.labelInput}>
                <label htmlFor="lastname">lastName</label>
                <input className={styles.input} type="text" placeholder="Enter your last name" />
            </div>
            <div className={styles.labelInput}>
                <label htmlFor="email">email</label>
                <input className={styles.input} type="email" placeholder="Enter your email" />
            </div>
            <div className={styles.labelInput}>
                <label htmlFor="password">password</label>
                <input className={styles.input} type="password" placeholder="Enter your password" />
            </div>
            <div className={styles.labelInput}>
                <label htmlFor="confirmPassword">confirm password</label>
                <input className={styles.input} type="password" placeholder="Confirm your  password" />
            </div>
            <span className={styles.link}> Already have an account</span>
            <Link to="/">Login</Link>
         </form>
    </div>
    );
}

export default Register;