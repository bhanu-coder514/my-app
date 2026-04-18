import { useRef, useState } from "react"
import { checkValidData } from "../../utils/validate";

function Login() {

    const [isSignIn, setIsignIn] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const [form,setForm] = useState({
        name:"",
        email:"",
        password:"",
    })

    const Disable = !form.email || !form.password || (!isSignIn && !form.name);

    // const name = useRef(null);
    // const email = useRef(null);
    // const password = useRef(null);

    const handleButtonClick = (e) => {
        e.preventDefault();

        // Check validation
        const message = checkValidData(form.email, form.password, isSignIn ? "" : form.name);
        setErrorMessage(message);

        if(!message){
            console.log("form submitted");
        }

    }

    return (
        <div className="min-h-screen bg-blue-500 flex items-center">
            <form className="w-3/12 p-12 flex flex-col ml-[40%] gap-8 bg-white rounded-2xl" onSubmit={handleButtonClick}>
                <h1 className="text-center text-3xl font-bold">{isSignIn ? "Login" : "SignUp"}</h1>

                {!isSignIn && <input
                    type="text"
                    placeholder="Full name"
                    className="border border-gray-400 px-1 py-2 rounded-sm font-semibold"
                    value={form.name}
                    onChange={
                        (e) => {
                            setForm({...form, name: e.target.value});
                            setErrorMessage("");
                    }}
                />}
                <input
                    type="text"
                    placeholder="email"
                    value={form.email}
                    className="border border-gray-400 px-1 py-2 rounded-sm font-semibold"
                    onChange={(e) => {
                        setForm({...form, email: e.target.value})
                        setErrorMessage("");
                    }}
                />

                <span
                    className="absolute mt-56 ml-[16%] cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                >
                    {showPassword ? "Hide" : "show"}
                </span>


                <input
                    type={showPassword ? "text" : "password"}
                    placeholder={isSignIn ? "Password" : "Create Password"}
                    className="border border-gray-400 px-1 py-2 rounded-sm font-semibold"
                    value={form.password}
                    onChange={(e) =>{ 
                        setForm({...form, password: e.target.value});
                        setErrorMessage("");
                    }}
                />

                {errorMessage && <p className="text-red-500">{errorMessage}</p>}

                {Disable ? <button
                    className="bg-blue-400 border border-blue-500 rounded-sm py-2 cursor-pointer text-white text-xl"
                    onClick={handleButtonClick}
                    disabled={true}
                >
                    {isSignIn ? "Login" : "SignUp"}</button> :

                    <button
                        className="bg-blue-500 border border-blue-500 rounded-sm py-2 cursor-pointer text-white text-xl"
                        type="submit"
                    >
                        {isSignIn ? "Login" : "SignUp"}</button>
                }



                <p className="text-xl cursor-pointer" onClick={() => setIsignIn(!isSignIn)}>{isSignIn ? "Create a new account" : "Already have an account?"}</p>

            </form>
        </div>
    )
}

export default Login
