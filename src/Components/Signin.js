export function Signin() {
    return (
        <div className={"container"}>
            <div className={"row justify-content-center"}>
                <form action={""} method={"post"} className={"col-4 p-3 rounded-2 "} style={{background:"#F5F5F5"}}>
                    <div className={"mb-3"}>
                        <label className={"form-label"} htmlFor={"#username"} style={{fontWeight:400}}>username</label>
                        <input className={"form-control"} id={"username"} autoComplete={"off"}/>
                    </div>
                    <div className={"mb-3"}>
                        <label className={"form-label"} htmlFor={"#password"} style={{fontWeight:400}}>password</label>
                        <input className={"form-control"} id={"password"} autoComplete={"off"}/>
                    </div>
                    <div className={"mb-3"}>
                        <label className={"form-label"} htmlFor={"#email"} style={{fontWeight:400}}>email</label>
                        <input className={"form-control"} id={"email"} autoComplete={"off"}/>
                    </div>
                    <div>
                        <input value={"submit"} type={"submit"} />
                    </div>
                </form>
            </div>
        </div>
    );
}