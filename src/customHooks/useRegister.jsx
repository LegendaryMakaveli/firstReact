import { useEffect, useState } from "react";

const useRegister = (userDetails) => {
const [name, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [message, setMessage] = useState("");

    useEffect(() =>{
        if(userDetails){
            setFirstName(userDetails.firstName);
            setLastName(userDetails.lastName);
            setMessage("Registration Successful");
        }
    }, [userDetails])
    return {name,lastName, message };
};
export default useRegister;