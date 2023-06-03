import {BiHide, BiShow} from "react-icons/bi";
import {Link} from "react-router-dom";
import {EmailConfigurationInput} from "../Components/emailConfigurationInput";

export function EmailConfirmation() {
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
                                <EmailConfigurationInput inputName={"one"}/>
                                <EmailConfigurationInput inputName={"two"}/>
                                <EmailConfigurationInput inputName={"three"}/>
                                <EmailConfigurationInput inputName={"four"}/>
                                <EmailConfigurationInput inputName={"five"}/>
                                <EmailConfigurationInput inputName={"six"}/>
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