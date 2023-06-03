import {BiHide, BiShow} from "react-icons/bi";
import {useState} from "react";
import {Link} from "react-router-dom";

export function Login() {
    //username input state
    const [username, setUsername] = useState("")
    //password input state
    const [password, setPassword] = useState("")

    const [isInvalid, setInvalid] = useState({username: false, password: false})

    //this function runs when you sumbit the form
    function submitHandler(event) {
        //testing if inputs are not coordinated with their regex
        if (!isValid(username, /^[a-zA-Z0-9](_(?!(\.|_))|\.(?!(_|\.))|[a-zA-Z0-9]){6,18}[a-zA-Z0-9]$/) || !isValid(password, /^[a-zA-Z0-9!@#$%^&*]{6,16}$/)) {
            event.preventDefault()
            setUsername("")
            setPassword("")
            setInvalid({username: true, password: true})
        }
    }

    function isValid(inputValue, regex) {
        return regex.test(inputValue)
    }

    //show password condition
    const [passwordShowed, setPasswordShow] = useState(false)
    return (
        <>
            <div className={"container pb-5"}>
                <div className={"row justify-content-center"}>
                    <div className={"col-4 d-flex justify-content-center"}>
                        <div
                            className={`toast ${isInvalid.username && isInvalid.password ? "toast-show" : ""} position-absolute`}
                            style={{top: ".5rem"}}>
                            <div className="toast-body text-center text-danger fw-bold">
                                There is something wrong with username or password
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"w-100 h-100 py-5"} style={{background: "#333"}}>
                <div className={"container pb-5"}>
                    <div className={"row justify-content-center"}>
                        <form onSubmit={(event) => submitHandler(event)}
                              action={"http://localhost:8000/user/create-user/"} method={"POST"}
                              className={"col-lg-4 col-8 p-4 rounded-2 bg-white"}>
                            <div>
                                <h2 style={{fontWeight: 400}} className={"text-center"}>Login</h2>
                            </div>
                            <div className={"pt-4"}>
                                <label className={"form-label fs-6"} style={{fontWeight: 400}}>Username</label>

                                <input onKeyUp={() => setInvalid({...isInvalid, username: false})} value={username}
                                       onChange={(event) => setUsername(event.target.value)}
                                       autoComplete={"off"} type={"text"} id={"username"}
                                       className={`form-control ${isInvalid.username ? "is-invalid  " : ""}`}
                                       name={"username"}/>
                            </div>
                            <div className={"pt-4"}>
                                <label className={"form-label fs-6"} style={{fontWeight: 400}}>Password <small><Link className={"text-decoration-none"}
                                    style={{color: "#19bfd3"}}
                                    to={"/forgetpassword"}>forget?</Link></small></label>
                                <div className={"position-relative d-flex justify-content-end align-items-center"}
                                     style={{cursor: "pointer"}}>
                                    <input onKeyUp={() => setInvalid({...isInvalid, password: false})} value={password}
                                           onChange={(event) => setPassword(event.target.value)}
                                           autoComplete={"off"} type={"password"} id={"password"}
                                           className={`form-control pe-4 ${isInvalid.password ? "is-invalid  " : ""}`}
                                           name={"password"}/>

                                    {!passwordShowed && isInvalid.password !== true ?
                                        <BiShow className={"position-absolute me-2"} onClick={(event) => {
                                            event.target.parentElement.children[0].type = "text";
                                            setPasswordShow(true)
                                        }}/> : isInvalid.password !== true ?
                                            <BiHide className={"position-absolute me-2"}
                                                    onClick={(event) => {
                                                        event.target.parentElement.children[0].type = "password";
                                                        setPasswordShow(false)
                                                    }}/> : ""}
                                </div>
                            </div>
                            <div className={"pt-5"}>
                                <input type={"submit"} value={"Login"}
                                       className={"form-control fs-6 shadow-none submit"}
                                       style={{fontWeight: 500, transition: "all ease-in 500ms"}}/>
                            </div>
                            <div className={"mt-2 d-flex justify-content-center"}>
                                <Link to={"/signin"} className={"text-decoration-none text-center pt-3"}>You haven't
                                    sign in
                                    yet ?</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}