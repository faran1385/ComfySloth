import {BiHide, BiShow} from "react-icons/bi";
import {Link} from "react-router-dom";
import {useState} from "react";

export function ForgetPassword() {
    //username input state
    const [username, setUsername] = useState("")
    //password input state
    const [password, setPassword] = useState("")
    //email input state
    const [email, setEmail] = useState("")
    const [isInvalid, setInvalid] = useState({email: false})

    //this function runs when you sumbit the form
    function submitHandler(event) {
        //testing if inputs are not coordinated with their regex
        if (!isValid(email, /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
            event.preventDefault()
            setEmail("")
            setInvalid({email: true})
        }
    }

    function isValid(inputValue, regex) {
        return regex.test(inputValue)
    }

    return (
        <>
            <div className={"container pb-5"}>
                <div className={"row justify-content-center"}>
                    <div className={"col-4 d-flex justify-content-center"}>
                        <div
                            className={`toast ${isInvalid.email? "toast-show" : ""} position-absolute`}
                            style={{top: ".5rem"}}>
                            <div className="toast-body text-center text-danger fw-bold">
                                There is something wrong with email
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"w-100 h-100 py-5"} style={{background: "#333"}}>
                <div className={"container pb-5 "}>
                    <div className={"row justify-content-center"}>
                        <form onSubmit={(event) => submitHandler(event)}
                              action={"http://localhost:8000/user/create-user/"} method={"POST"}
                              className={"col-lg-4 p-4 col-8 rounded-2 bg-white"}>
                            <div className={"pt-4"}>
                                <label className={"form-label fs-6"} style={{fontWeight: 400}}>Email</label>
                                <input onKeyUp={() => setInvalid({...isInvalid, email: false})} value={email}
                                       onChange={(event) => setEmail(event.target.value)}
                                       autoComplete={"off"} type={"email"} id={"email"}
                                       className={`form-control ${isInvalid.email ? "is-invalid    " : ""}`}
                                       name={"email"}/>
                            </div>
                            <div className={"pt-5"}>
                                <input type={"submit"} value={"Confirm"}
                                       className={"form-control fs-6 shadow-none submit"}
                                       style={{fontWeight: 500, transition: "all ease-in 500ms"}}/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}