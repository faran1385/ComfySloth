import {Link, useParams} from "react-router-dom";
import {EmailConfigurationInput} from "../Components/emailConfigurationInput";
import {useEffect, useState} from "react";
import axios from "axios";

export function EmailConfirmation() {
    const params=useParams()
    const [keyValue, setKeyValue] = useState({one: null, two: null, three: null, four: null, five: null, six: null})
    //everyTime user enter a number this funcion runs
    //this function well send key to backend
    useEffect(() => {
        checkKey()
    }, [keyValue])

    async function checkKey() {
        console.log(params)
    }

    return (
        <>
            <div className={"w-100 h-100 py-5"} style={{background: "#333"}}>
                <div className={"container pb-5"}>
                    <div className={"row justify-content-center"}>
                        <form className={"col-lg-6 col-8 p-4 rounded-2 bg-white"}>
                            <div>
                                <h5 style={{fontWeight: 400}} className={"text-center"}>enter the code that we have send
                                    to your email</h5>
                            </div>
                            <div className={"row rounded-2 mt-5"}>
                                <EmailConfigurationInput setKeyFunc={(number) => {
                                    setKeyValue({...keyValue, one: number})
                                }} inputName={"one"}/>
                                <EmailConfigurationInput setKeyFunc={(number) => {
                                    setKeyValue({...keyValue, two: number})
                                }} inputName={"two"}/>
                                <EmailConfigurationInput setKeyFunc={(number) => {
                                    setKeyValue({...keyValue, three: number})
                                }} inputName={"three"}/>
                                <EmailConfigurationInput setKeyFunc={(number) => {
                                    setKeyValue({...keyValue, four: number})
                                }} inputName={"four"}/>
                                <EmailConfigurationInput setKeyFunc={(number) => {
                                    setKeyValue({...keyValue, five: number})
                                }} inputName={"five"}/>
                                <EmailConfigurationInput setKeyFunc={(number) => {
                                    setKeyValue({...keyValue, six: number})
                                }} inputName={"six"}/>
                            </div>
                            <div className={"pt-5"}>
                                <input type={"submit"} value={"check"}
                                       className={"form-control fs-6 shadow-none submit"}
                                       style={{fontWeight: 500, transition: "all ease-in 500ms"}}/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}