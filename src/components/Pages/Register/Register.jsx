import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../../firebase/firebase.config";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {

    const [heroEror, setheroEror] = useState("");
    const [success, setsuccess] = useState("");
    const [showpassword, setShowpassword] = useState(false);


    const handleregister = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const accepted =e.target.terms.checked;
        console.log(email, password,accepted);
        setheroEror("")
        setsuccess("")
        if (password.length < 6) {
            setheroEror('Please Provide a maximum 6 digit');
            return;
        } else if (!/[A-Z]/.test(password)) {
            setheroEror("Must be password can be upercase longer")
            return;
        }
        else if(!accepted){
            setheroEror("sala tik mar re")
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const getpassEmail = result.user
                console.log(getpassEmail)
                setsuccess("Ragistration has been successfully")
            })
            .catch(eror => {
                console.error(eror);
                setheroEror(eror.message)
            })

    }
    return (
        <div className="flex justify-center items-center min-h-screen ">
            <div className="rounded bg-orange-500 w-96 h-96 p-5 text-center">
                <h1 className="text-2xl mt-5 mb-4 font-semibold text-white">Please Registration</h1>
                <form onSubmit={handleregister} className="mt-20">
                    <input className="mb-4 w-full  p-2 bg-blue-600" type="email" name="email" id="" required placeholder="please enter email" />
                    <br />
                    <div className=" flex relative">
                        <input
                            className="mb-4 w-full p-2 bg-blue-600"
                            type={showpassword ? "text" : "password"}
                            name="password"
                            placeholder="enter password"
                            id="" required />

                        <span className=" mt-3 mr-5" onClick={() => setShowpassword(!showpassword)}>{showpassword ? <FaEyeSlash></FaEyeSlash>
                            : <FaEye></FaEye>}</span>
                    </div>
                         <div className="flex gap-2 text-white">
                         <input type="checkbox" name="terms" id="terms" />
                         <level>Accept our terms and Conditions</level>
                         </div>
                         
                    <input className="btn btn-primary hover:bg-red-600 w-full" type="submit" value="Registration" />


                </form>
                {
                    heroEror && <p className="text-red-600">{heroEror}</p>
                }
                {
                    success && <p>{success}</p>
                }
            </div>
        </div>
    );
};

export default Register;