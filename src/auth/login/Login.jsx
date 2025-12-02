import styles from './login.module.css';
import {Link} from 'react-router';
const Login = () => {
    return(
    <div>
        <form className={styles.loginForm}>
            <div className={styles.loginInput}>
                <label htmlFor="userName">userName</label>
                <input className={styles.input} type="text" placeholder="Enter userName" />
            </div>
            <div className={styles.loginInput}>
                <label htmlFor="password">password</label>
                <input className={styles.input} type="password" placeholder="enter password" />
            </div>
             <span className={styles.link}> Dont have an account</span>
            <Link to="/register">Register</Link>
        </form>
    </div>
    );
}

export default Login;