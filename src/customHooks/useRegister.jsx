// import { useEffect, useState } from "react";

// const useRegister = (userDetails) => {
//   console.log(userDetails);

//   let name = userDetails.firstName;
//   let lastName = userDetails.lastName;
//   let message = "Registration Successful";
//   const [name, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [message, setMessage] = useState("");

//   useEffect(() => {
//     if (userDetails) {
//       setFirstName(userDetails.firstName);
//       setLastName(userDetails.lastName);
//       setMessage("Registration Successful");
//     }
//   }, [userDetails]);
//   return { name, lastName, message };
// };
// export default useRegister;


const useRegister = async (userDetails) => {
  return new Promise((resolve) => {
    resolve({
      name: userDetails.firstName,
      message: "Registration successful",
    })
  });
}

export default useRegister