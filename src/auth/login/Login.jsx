import styles from './login.module.css';
import { useState } from 'react';
import {Link, useNavigate} from "react-router"
import { useLoginMutation } from '../../apis/loginApi';
const Login = () => {
    const [login, {data, isError, isSuccessfull}] = useLoginMutation()
    const navigate = useNavigate();
    const userLoginData = {
        username: "",
        password: ""
    }

    const [formData, setFormData] = useState(userLoginData);
    const handleChange = (e) =>{
        const {name, value} = e.target
        setFormData((prev) => ({...prev, [name]: value}))
    }
    const submitHandle = async (e)=>{
        e.preventDefault();

        try{
            const response = await login(formData).unwrap()
            localStorage.setItem("res", response.token)
            if(!response)alert("error");
            navigate("/products")
        }catch (error){
            console.log(error)
        }
    }

    // if(data)return <h1>No data loaded</h1>
    // if(isError)return <h1>Error detected</h1>
    // if(isSuccessfull)return <h1>Load successfully</h1>




    return(
    <div>
        <form  onSubmit={submitHandle} className={styles.loginForm}>
            <div className={styles.loginInput}>
                <label htmlFor="username">username</label>
                <input onChange={handleChange} name='username' className={styles.input} type="text" placeholder="Enter userName" />
            </div>
            <div className={styles.loginInput}>
                <label htmlFor="password">password</label>
                <input onChange={handleChange} name='password' className={styles.input} type="password" placeholder="enter password" />
            </div>

             <button type="submit">login</button>
        </form>
        <span className={styles.link}> Dont have an account</span>
             <Link to={"/register"}>SignUp</Link>
            {/* <a href="/register">Register</a> */}
    </div>
    );
}

export default Login;