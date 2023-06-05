import {Link, useParams} from "react-router-dom";
import {EmailConfigurationInput} from "../Components/emailConfigurationInput";
import {useEffect, useState} from "react";
import axios from "axios";

export function EmailConfirmation() {
    const [sendNew, setSendNew] = useState(true)
    //the massage of error that sended from backend
    const [massage, setMassage] = useState({
        condition: false,
        text: 'There is something wrong with username or password or email'
    })
    //getting url params
    const params = useParams()
    //its the value of key
    const [keyValue, setKeyValue] = useState({one: null, two: null, three: null, four: null, five: null, six: null})
    //everyTime user enter a number this funcion runs
    //this function well send key to backend
    useEffect(() => {
        checkKey()
    }, [keyValue])
    useEffect(() => {
        sendCode(false)
    }, [sendNew])

    async function sendCode(code) {
        let Info = {
            username: params.username,
            email: params.email,
            new_code: sendNew,
            code: sendNew ? false : code
        }
        console.log(Info)
        let res = await axios.post('http://localhost:8000/user/verify-email/',Info, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        console.log(res)
        setSendNew(false)
    }

    async function checkKey(callByBtn = false) {
        if (validation(Object.values(keyValue))) {
            let key = keyValue.one + keyValue.two + keyValue.three + keyValue.four + keyValue.five + keyValue.six
            sendCode(key)
        } else if (callByBtn) {
            setMassage({condition: true, text: "fill all of inputs"})
        }
    }

    //this function checks if all of fields are filled
    function validation(array) {
        let isValid = null
        for (let item of array) {
            if (!item) {
                isValid = false
            }
        }
        return isValid === null ? true : isValid
    }

    return (
        <>
            <div className={"container"}>
                <div className={"row justify-content-center"}>
                    <div className={"col-4 d-flex justify-content-center"}>
                        <div
                            className={`toast ${massage.condition ? "toast-show" : ""} position-absolute`}
                            style={{top: ".6rem"}}>
                            <div className="toast-body text-center text-danger fw-bold">
                                {massage.text}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"w-100 h-100 py-5"} style={{background: "#333"}}>
                <div className={"container pb-5"}>
                    <div className={"row justify-content-center"}>
                        <form onSubmit={event => {
                            event.preventDefault()
                            checkKey(true)
                        }} className={"col-lg-6 col-8 p-4 rounded-2 bg-white"}>
                            <div>
                                <h5 style={{fontWeight: 400}} className={"text-center"}>enter the code that we have send
                                    to your email</h5>
                            </div>
                            <div className={"row rounded-2 mt-5"}>
                                <EmailConfigurationInput setKeyFunc={(number) => {
                                    setKeyValue({...keyValue, one: number})
                                    setMassage({...massage, condition: false})
                                }} inputName={"one"}/>
                                <EmailConfigurationInput setKeyFunc={(number) => {
                                    setKeyValue({...keyValue, two: number})
                                    setMassage({...massage, condition: false})
                                }} inputName={"two"}/>
                                <EmailConfigurationInput setKeyFunc={(number) => {
                                    setKeyValue({...keyValue, three: number})
                                    setMassage({...massage, condition: false})
                                }} inputName={"three"}/>
                                <EmailConfigurationInput setKeyFunc={(number) => {
                                    setKeyValue({...keyValue, four: number})
                                    setMassage({...massage, condition: false})
                                }} inputName={"four"}/>
                                <EmailConfigurationInput setKeyFunc={(number) => {
                                    setKeyValue({...keyValue, five: number})
                                    setMassage({...massage, condition: false})
                                }} inputName={"five"}/>
                                <EmailConfigurationInput setKeyFunc={(number) => {
                                    setKeyValue({...keyValue, six: number})
                                    setMassage({...massage, condition: false})
                                }} inputName={"six"}/>
                            </div>
                            <div className={"pt-5"}>
                                <input type={"submit"} value={"check"}
                                       className={"form-control fs-6 shadow-none submit"}
                                       style={{fontWeight: 500, transition: "all ease-in 500ms"}}/>
                                <p className={'text-center pt-4'}>Do you want a new code? <span
                                    style={{color: "rgb(25, 191, 211)", cursor: 'pointer'}}
                                    className={""} onClick={() => setSendNew(true)}>resend </span>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}